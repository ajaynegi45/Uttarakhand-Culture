"use client";

import React, { useEffect, useRef } from "react";

type ArrowFollowTargetProps = {
    children: React.ReactNode;

    // Visibility tuning
    fadeStart?: number;   // px distance where arrow is fully visible
    fadeEnd?: number;     // px distance where arrow becomes invisible
    maxOpacity?: number;  // 0–1

    // Geometry
    proximityPadding?: number; // px padding from target edge

    // CSS fade
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

    const mouse = useRef<{ x: number | null; y: number | null }>({
        x: null,
        y: null,
    });

    const dprRef = useRef(1);

    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;

        function setCanvasSize() {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const dpr = window.devicePixelRatio || 1;
            dprRef.current = dpr;

            const w = window.innerWidth;
            const h = window.innerHeight;

            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function onMouseMove(e: MouseEvent) {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        }

        function isTargetVisible() {
            const el = targetRef.current;
            if (!el) return false;
            const r = el.getBoundingClientRect();
            return !(r.bottom < 0 || r.top > window.innerHeight);
        }

        function isMouseInsideTarget(mx: number, my: number) {
            const el = targetRef.current;
            if (!el) return false;

            const r = el.getBoundingClientRect();
            return (
                mx >= r.left &&
                mx <= r.right &&
                my >= r.top &&
                my <= r.bottom
            );
        }

        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);
        window.addEventListener("mousemove", onMouseMove);

        let rafId = 0;

        const draw = () => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");

            if (!canvas || !ctx) {
                rafId = requestAnimationFrame(draw);
                return;
            }

            ctx.clearRect(
                0,
                0,
                canvas.width / dprRef.current,
                canvas.height / dprRef.current
            );

            const { x: mx, y: my } = mouse.current;
            if (mx == null || my == null) {
                rafId = requestAnimationFrame(draw);
                return;
            }

            if (!isTargetVisible() || isMouseInsideTarget(mx, my)) {
                rafId = requestAnimationFrame(draw);
                return;
            }

            const rect = target.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            const angle = Math.atan2(cy - my, cx - mx);
            const tx =
                cx - Math.cos(angle) * (rect.width / 2 + proximityPadding);
            const ty =
                cy - Math.sin(angle) * (rect.height / 2 + proximityPadding);

            const dist = Math.hypot(tx - mx, ty - my);

            let opacity = 0;
            if (dist >= fadeStart) opacity = maxOpacity;
            else if (dist <= fadeEnd) opacity = 0;
            else {
                opacity =
                    ((dist - fadeEnd) / (fadeStart - fadeEnd)) * maxOpacity;
            }

            if (opacity <= 0.001) {
                rafId = requestAnimationFrame(draw);
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

            const headAngle = Math.atan2(ty - cpy, tx - cpx);
            const headLength = 10;

            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(
                tx - headLength * Math.cos(headAngle - Math.PI / 6),
                ty - headLength * Math.sin(headAngle - Math.PI / 6)
            );
            ctx.moveTo(tx, ty);
            ctx.lineTo(
                tx - headLength * Math.cos(headAngle + Math.PI / 6),
                ty - headLength * Math.sin(headAngle + Math.PI / 6)
            );
            ctx.stroke();
            ctx.restore();

            rafId = requestAnimationFrame(draw);
        };

        rafId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", setCanvasSize);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [fadeStart, fadeEnd, maxOpacity, proximityPadding, fadeDurationMs]);

    return (
        <>
            <div ref={targetRef} style={{ display: "inline-block" }}>
                {children}
            </div>

            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-50"
                style={{
                    transition: `opacity ${fadeDurationMs}ms ease`,
                }}
            />
        </>
    );
}
