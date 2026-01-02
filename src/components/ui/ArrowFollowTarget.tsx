"use client";

import { useEffect, useRef } from "react";
import React from "react";

type Props = {
    children: React.ReactElement;
};

export default function ArrowFollowTarget({ children }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetRef = useRef<HTMLElement | null>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const target = targetRef.current;
        if (!canvas || !target) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", onMouseMove);

        let raf = 0;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { x: x0, y: y0 } = mouse.current;
            if (!x0 || !y0) {
                raf = requestAnimationFrame(draw);
                return;
            }

            const rect = target.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            const a = Math.atan2(cy - y0, cx - x0);
            const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
            const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

            const midX = (x0 + x1) / 2;
            const midY = (y0 + y1) / 2;

            const dist = Math.hypot(x1 - x0, y1 - y0);
            const offset = Math.min(200, dist * 0.5);
            const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));

            const cxp = midX;
            const cyp = midY + offset * t;

            const opacity = Math.min(
                0.75,
                (dist - Math.max(rect.width, rect.height) / 2) / 750
            );

            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([10, 4]);

            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.quadraticCurveTo(cxp, cyp, x1, y1);
            ctx.stroke();

            const angle = Math.atan2(y1 - cyp, x1 - cxp);
            const head = 10;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(
                x1 - head * Math.cos(angle - Math.PI / 6),
                y1 - head * Math.sin(angle - Math.PI / 6)
            );
            ctx.moveTo(x1, y1);
            ctx.lineTo(
                x1 - head * Math.cos(angle + Math.PI / 6),
                y1 - head * Math.sin(angle + Math.PI / 6)
            );
            ctx.stroke();

            raf = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    // ✅ THIS is the only correct way to attach the ref
    const child = React.cloneElement(children, {
        ref: (node: HTMLElement) => {
            targetRef.current = node;

            const originalRef = (children as any).ref;
            if (typeof originalRef === "function") originalRef(node);
            else if (originalRef) originalRef.current = node;
        },
    });

    return (
        <>
            {child}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-50"
            />
        </>
    );
}
