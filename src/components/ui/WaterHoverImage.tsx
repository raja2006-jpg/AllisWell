"use client";

import Image from "next/image";
import {
    type CSSProperties,
    type PointerEvent,
    useId,
    useRef,
    useState,
} from "react";

interface WaterHoverImageProps {
    src: string;
    alt: string;
    sizes?: string;
    className?: string;
}

interface WaterStyle extends CSSProperties {
    "--mx"?: string;
    "--my"?: string;
}

export default function WaterHoverImage({
    src,
    alt,
    sizes = "100vw",
    className = "",
}: WaterHoverImageProps) {
    const id = useId();

    const filterId =
        `water-${id.replace(
            /[^a-zA-Z0-9_-]/g,
            "",
        )}`;

    const distortionRef =
        useRef<SVGFEDisplacementMapElement | null>(
            null,
        );

    const turbulenceRef =
        useRef<SVGFETurbulenceElement | null>(
            null,
        );

    const [hovered, setHovered] =
        useState(false);

    const [waterStyle, setWaterStyle] =
        useState<WaterStyle>({
            "--mx": "50%",
            "--my": "50%",
        });

    const handlePointerEnter = () => {
        setHovered(true);
    };

    const handlePointerMove = (
        event: PointerEvent<HTMLDivElement>,
    ) => {
        const rect =
            event.currentTarget.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) /
                rect.width) *
            100;

        const y =
            ((event.clientY - rect.top) /
                rect.height) *
            100;

        const centerX =
            x - 50;

        const centerY =
            y - 50;

        /*
         * Stronger distortion when cursor
         * moves away from center.
         */
        const distance =
            Math.min(
                1,
                Math.sqrt(
                    centerX * centerX +
                        centerY *
                            centerY,
                ) / 70,
            );

        const displacement =
            7 + distance * 18;

        distortionRef.current?.setAttribute(
            "scale",
            String(displacement),
        );

        /*
         * Move the noise pattern slightly
         * according to mouse position.
         */
        const frequencyX =
            0.008 +
            Math.abs(centerX) *
                0.00012;

        const frequencyY =
            0.025 +
            Math.abs(centerY) *
                0.00018;

        turbulenceRef.current?.setAttribute(
            "baseFrequency",
            `${frequencyX} ${frequencyY}`,
        );

        setWaterStyle({
            "--mx": `${x}%`,
            "--my": `${y}%`,
        });
    };

    const handlePointerLeave = () => {
        setHovered(false);

        distortionRef.current?.setAttribute(
            "scale",
            "0",
        );

        turbulenceRef.current?.setAttribute(
            "baseFrequency",
            "0.008 0.025",
        );

        setWaterStyle({
            "--mx": "50%",
            "--my": "50%",
        });
    };

    return (
        <div
            className="
                group/water
                relative
                h-full
                w-full
                overflow-hidden
            "
            onPointerEnter={
                handlePointerEnter
            }
            onPointerMove={
                handlePointerMove
            }
            onPointerLeave={
                handlePointerLeave
            }
        >
            {/* =====================================================
                ORIGINAL IMAGE
            ====================================================== */}
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className={`
                    absolute
                    inset-0
                    z-0
                    object-cover
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover/water:scale-[1.045]
                    ${className}
                `}
            />

            {/* =====================================================
                WATER DISTORTION IMAGE
            ====================================================== */}
            <Image
                src={src}
                alt=""
                aria-hidden="true"
                fill
                sizes={sizes}
                className={`
                    pointer-events-none
                    absolute
                    inset-0
                    z-[1]
                    object-cover
                    transition-opacity
                    duration-300
                    ease-out
                    ${
                        hovered
                            ? "opacity-100"
                            : "opacity-0"
                    }
                `}
                style={{
                    filter: `url(#${filterId})`,
                }}
            />

            {/* =====================================================
                MOVING WATER LIGHT
            ====================================================== */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[2]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover/water:opacity-100
                "
                style={{
                    background:
                        "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 14%, transparent 42%)",
                    ...waterStyle,
                }}
            />

            {/* =====================================================
                WATER SHEEN
            ====================================================== */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-[40%]
                    top-0
                    z-[3]
                    h-full
                    w-[32%]
                    -skew-x-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.16]
                    to-transparent
                    opacity-0
                    transition-all
                    duration-[900ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover/water:left-[125%]
                    group-hover/water:opacity-100
                "
            />

            {/* =====================================================
                SUBTLE RIPPLE LAYER
            ====================================================== */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[4]
                    opacity-0
                    mix-blend-screen
                    transition-opacity
                    duration-500
                    group-hover/water:opacity-100
                "
                style={{
                    background:
                        "repeating-radial-gradient(circle at var(--mx) var(--my), transparent 0px, transparent 14px, rgba(255,255,255,0.045) 15px, transparent 20px)",
                    ...waterStyle,
                }}
            />

            {/* =====================================================
                SVG WATER DISTORTION
            ====================================================== */}
            <svg
                aria-hidden="true"
                className="pointer-events-none absolute h-0 w-0"
            >
                <defs>
                    <filter
                        id={filterId}
                        x="-15%"
                        y="-15%"
                        width="130%"
                        height="130%"
                    >
                        <feTurbulence
                            ref={turbulenceRef}
                            type="fractalNoise"
                            baseFrequency="0.008 0.025"
                            numOctaves="2"
                            seed="11"
                            result="waterNoise"
                        />

                        <feDisplacementMap
                            ref={distortionRef}
                            in="SourceGraphic"
                            in2="waterNoise"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}