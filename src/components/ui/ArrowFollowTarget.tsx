"use client";

import React, { useEffect, useRef } from "react";

type ArrowFollowTargetProps = {
    children: React.ReactNode;
    fadeStart?: number;
    fadeEnd?: number;
    maxOpacity?: number;
    proximityPadding?: number;
    fadeDurationMs?: number;
};

export default function ArrowFollowTarget({
                                              children,
                                              fadeStart = 400,
                                              fadeEnd = 10,
                                              maxOpacity = 0.75,
                                              proximityPadding = 12,
                                              fadeDurationMs = 180,
                                          }: ArrowFollowTargetProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const targetRef = useRef<HTMLDivElement | null>(null);

    const pointer = useRef<{ x: number | null; y: number | null }>({
        x: null,
        y: null,
    });

    const dprRef = useRef(1);
    const rafIdRef = useRef<number | null>(null);
    const runningRef = useRef(false);
    const activeRef = useRef(true);

    const supportsPointer = typeof window !== "undefined" && "PointerEvent" in window;

    /* ---------------- Canvas ---------------- */

    function setCanvasSize() {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        dprRef.current = dpr;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        canvas.width = Math.round(window.innerWidth * dpr);
        canvas.height = Math.round(window.innerHeight * dpr);

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function clearCanvas() {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        ctx.clearRect(
            0,
            0,
            canvas.width / dprRef.current,
            canvas.height / dprRef.current
        );
    }

    /* ---------------- Utilities ---------------- */

    function isTargetVisible() {
        const el = targetRef.current;
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return !(r.bottom < 0 || r.top > window.innerHeight);
    }

    function isInsideTarget(x: number, y: number) {
        const el = targetRef.current;
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
    }

    /* ---------------- RAF ---------------- */

    function draw() {
        if (!activeRef.current) {
            stop();
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        clearCanvas();

        const { x: mx, y: my } = pointer.current;
        if (mx == null || my == null) {
            rafIdRef.current = requestAnimationFrame(draw);
            return;
        }

        if (!isTargetVisible() || isInsideTarget(mx, my)) {
            rafIdRef.current = requestAnimationFrame(draw);
            return;
        }

        const rect = targetRef.current!.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const angle = Math.atan2(cy - my, cx - mx);
        const tx = cx - Math.cos(angle) * (rect.width / 2 + proximityPadding);
        const ty = cy - Math.sin(angle) * (rect.height / 2 + proximityPadding);

        const dist = Math.hypot(tx - mx, ty - my);

        let opacity = 0;
        if (dist >= fadeStart) opacity = maxOpacity;
        else if (dist > fadeEnd) {
            opacity = ((dist - fadeEnd) / (fadeStart - fadeEnd)) * maxOpacity;
        }

        if (opacity <= 0.001) {
            rafIdRef.current = requestAnimationFrame(draw);
            return;
        }

        const midX = (mx + tx) / 2;
        const midY = (my + ty) / 2;
        const offset = Math.min(200, dist * 0.5);
        const t = Math.max(-1, Math.min(1, (my - ty) / 200));

        const cpx = midX;
        const cpy = midY + offset * t;

            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = "rgba(255,255,255,1)";
            ctx.lineWidth = 1;
            ctx.setLineDash([10, 4]);

        ctx.beginPath();
        ctx.moveTo(mx, my);
        ctx.quadraticCurveTo(cpx, cpy, tx, ty);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = "rgba(255,255,255,1)";
        ctx.lineWidth = 1;
        const head = Math.atan2(ty - cpy, tx - cpx);
        const len = 10;

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx - len * Math.cos(head - Math.PI / 6), ty - len * Math.sin(head - Math.PI / 6));
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx - len * Math.cos(head + Math.PI / 6), ty - len * Math.sin(head + Math.PI / 6));
        ctx.stroke();
        ctx.restore();

        rafIdRef.current = requestAnimationFrame(draw);
    }

    function start() {
        if (runningRef.current) return;
        runningRef.current = true;
        rafIdRef.current = requestAnimationFrame(draw);
    }

    function stop() {
        runningRef.current = false;
        if (rafIdRef.current != null) {
            cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
        }
        clearCanvas();
    }

    /* ---------------- Suspend / Resume ---------------- */

    function suspend() {
        activeRef.current = false;
        stop();
        removeActiveListeners();
        installResumeListeners();
    }

    function resume(e: PointerEvent | MouseEvent) {
        const x = (e as PointerEvent).clientX;
        const y = (e as PointerEvent).clientY;
        if (typeof x !== "number" || typeof y !== "number") return;

        pointer.current = { x, y };
        removeResumeListeners();
        activeRef.current = true;
        installActiveListeners();
        start();
    }

    /* ---------------- Listeners ---------------- */

    function onMove(e: PointerEvent | MouseEvent) {
        pointer.current = { x: e.clientX, y: e.clientY };
        if (!runningRef.current && activeRef.current) start();
    }

    function onPointerOut(e: PointerEvent) {
        if (e.relatedTarget === null) suspend();
    }

    function installActiveListeners() {
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);
        document.addEventListener(supportsPointer ? "pointermove" : "mousemove", onMove, { passive: true });
        document.addEventListener("pointerout", onPointerOut);
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) suspend();
        });
    }

    function removeActiveListeners() {
        window.removeEventListener("resize", setCanvasSize);
        document.removeEventListener(supportsPointer ? "pointermove" : "mousemove", onMove);
        document.removeEventListener("pointerout", onPointerOut);
    }

    function installResumeListeners() {
        const evs = supportsPointer ? ["pointerover", "pointermove"] : ["mouseover", "mousemove"];
        evs.forEach(ev =>
            document.addEventListener(ev, resume as EventListener, { passive: true })
        );
    }

    function removeResumeListeners() {
        const evs = supportsPointer ? ["pointerover", "pointermove"] : ["mouseover", "mousemove"];
        evs.forEach(ev =>
            document.removeEventListener(ev, resume as EventListener)
        );
    }

    /* ---------------- Lifecycle ---------------- */

    useEffect(() => {
        installActiveListeners();
        return () => {
            stop();
            removeActiveListeners();
            removeResumeListeners();
        };
    }, []);

    return (
        <>
            <div ref={targetRef} style={{ display: "inline-block" }}>
                {children}
            </div>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-50"
                style={{ transition: `opacity ${fadeDurationMs}ms ease` }}
            />
        </>
    );
}
