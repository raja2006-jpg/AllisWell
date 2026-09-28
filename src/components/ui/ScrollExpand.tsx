"use client";

import {
    useCallback,
    useEffect,
    useRef,
} from "react";

import type {
    CSSProperties,
    ReactNode,
} from "react";

interface ScrollExpandProps {
    src?: string;
    mediaType?: "image" | "video";
    poster?: string;
    alt?: string;
    title?: string;
    scrollHint?: string;

    startWidth?: number;
    startHeight?: number;
    startRadius?: number;
    endRadius?: number;

    mediaZoom?: number;
    scrollDistance?: number;
    holdDistance?: number;
    smoothing?: number;
    overlayScrim?: number;

    useWindowScroll?: boolean;
    enabled?: boolean;

    /**
     * Makes the component escape a centered max-width parent
     * and become full browser viewport width.
     */
    fullBleed?: boolean;

    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const clamp = (
    value: number,
    min: number,
    max: number,
) =>
    Math.min(
        Math.max(value, min),
        max,
    );

const smoothstep = (
    edge0: number,
    edge1: number,
    value: number,
) => {
    const denominator =
        edge1 - edge0 || 1e-6;

    const t = clamp(
        (value - edge0) /
            denominator,
        0,
        1,
    );

    return t * t * (3 - 2 * t);
};

export default function ScrollExpand({
    src = "",
    mediaType = "image",
    poster = "",
    alt = "",
    title = "",
    scrollHint = "",

    startWidth = 62,
    startHeight = 60,
    startRadius = 22,
    endRadius = 0,

    mediaZoom = 1.18,
    scrollDistance = 0.95,
    holdDistance = 0.3,
    smoothing = 0.08,
    overlayScrim = 0.38,

    useWindowScroll = true,
    enabled = true,
    fullBleed = false,

    children,
    className = "",
    style,
}: ScrollExpandProps) {
    const rootRef =
        useRef<HTMLDivElement | null>(null);

    const trackRef =
        useRef<HTMLDivElement | null>(null);

    const stageRef =
        useRef<HTMLDivElement | null>(null);

    const frameRef =
        useRef<HTMLDivElement | null>(null);

    const imageRef =
        useRef<HTMLImageElement | null>(null);

    const videoRef =
        useRef<HTMLVideoElement | null>(null);

    const titleRef =
        useRef<HTMLDivElement | null>(null);

    const scrimRef =
        useRef<HTMLDivElement | null>(null);

    const overlayRef =
        useRef<HTMLDivElement | null>(null);

    const hintRef =
        useRef<HTMLDivElement | null>(null);

    const configRef = useRef({
        startWidth,
        startHeight,
        startRadius,
        endRadius,
        mediaZoom,
        scrollDistance,
        holdDistance,
        smoothing,
        overlayScrim,
        enabled,
        fullBleed,
        useWindowScroll,
    });

    useEffect(() => {
        configRef.current = {
            startWidth,
            startHeight,
            startRadius,
            endRadius,
            mediaZoom,
            scrollDistance,
            holdDistance,
            smoothing,
            overlayScrim,
            enabled,
            fullBleed,
            useWindowScroll,
        };
    }, [
        startWidth,
        startHeight,
        startRadius,
        endRadius,
        mediaZoom,
        scrollDistance,
        holdDistance,
        smoothing,
        overlayScrim,
        enabled,
        fullBleed,
        useWindowScroll,
    ]);

    const applyProgress = useCallback(
        (progress: number) => {
            const frame =
                frameRef.current;

            if (!frame) return;

            const image =
                imageRef.current;

            const video =
                videoRef.current;

            const config =
                configRef.current;

            const eased =
                smoothstep(
                    0,
                    1,
                    progress,
                );

            /*
             * -----------------------------------------------------
             * FRAME EXPANSION
             * -----------------------------------------------------
             */
            const width =
                config.startWidth +
                (100 -
                    config.startWidth) *
                    eased;

            const height =
                config.startHeight +
                (100 -
                    config.startHeight) *
                    eased;

            const insetX =
                Math.max(
                    0,
                    (100 - width) / 2,
                );

            const insetY =
                Math.max(
                    0,
                    (100 - height) / 2,
                );

            const radius =
                config.startRadius +
                (config.endRadius -
                    config.startRadius) *
                    eased;

            /*
             * Important:
             * At progress = 1 this becomes:
             *
             * inset(0% 0% 0% 0% round 0px)
             *
             * which removes all edge gaps.
             */
            frame.style.clipPath =
                `inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${radius}px)`;

            /*
             * -----------------------------------------------------
             * MEDIA SCALE
             * -----------------------------------------------------
             */
            const mediaScale =
                config.mediaZoom +
                (1 -
                    config.mediaZoom) *
                    eased;

            if (image) {
                image.style.transform =
                    `scale(${mediaScale})`;
            }

            if (video) {
                video.style.transform =
                    `scale(${mediaScale})`;
            }

            /*
             * -----------------------------------------------------
             * SCRIM
             * -----------------------------------------------------
             */
            if (scrimRef.current) {
                scrimRef.current.style.opacity =
                    String(
                        config.overlayScrim *
                            eased,
                    );
            }

            /*
             * -----------------------------------------------------
             * TITLE
             * -----------------------------------------------------
             */
            if (titleRef.current) {
                const exit =
                    smoothstep(
                        0.3,
                        0.78,
                        progress,
                    );

                titleRef.current.style.opacity =
                    String(1 - exit);

                titleRef.current.style.transform =
                    `translate3d(0, ${-30 * exit}px, 0) scale(${1 + 0.05 * exit})`;
            }

            /*
             * -----------------------------------------------------
             * SCROLL HINT
             * -----------------------------------------------------
             */
            if (hintRef.current) {
                const gone =
                    smoothstep(
                        0,
                        0.14,
                        progress,
                    );

                hintRef.current.style.opacity =
                    String(1 - gone);

                hintRef.current.style.transform =
                    `translate3d(0, ${10 * gone}px, 0)`;
            }

            /*
             * -----------------------------------------------------
             * CONTENT OVERLAY
             * -----------------------------------------------------
             */
            if (overlayRef.current) {
                const incoming =
                    smoothstep(
                        0.66,
                        1,
                        progress,
                    );

                overlayRef.current.style.opacity =
                    String(incoming);

                overlayRef.current.style.transform =
                    `translate3d(0, ${20 * (1 - incoming)}px, 0)`;
            }
        },
        [],
    );

    useEffect(() => {
        const root =
            rootRef.current;

        const track =
            trackRef.current;

        const stage =
            stageRef.current;

        if (!root || !track || !stage) {
            return;
        }

        const reduceMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

        let animationFrame = 0;
        let current = 0;
        let target = 0;
        let stageHeight = 0;

        const measure = () => {
            const config =
                configRef.current;

            /*
             * Always use viewport height when
             * running against window scroll.
             */
            stageHeight =
                config.useWindowScroll
                    ? window.innerHeight
                    : root.clientHeight;

            if (stageHeight <= 0) {
                return;
            }

            stage.style.height =
                `${stageHeight}px`;

            const travelMultiplier =
                reduceMotion
                    ? 1
                    : 1 +
                      Math.max(
                          0,
                          config.scrollDistance,
                      ) +
                      Math.max(
                          0,
                          config.holdDistance,
                      );

            track.style.height =
                `${stageHeight * travelMultiplier}px`;
        };

        const readProgress = () => {
            const config =
                configRef.current;

            if (reduceMotion) {
                return 1;
            }

            if (!config.enabled) {
                return 1;
            }

            const span =
                stageHeight *
                Math.max(
                    0.01,
                    config.scrollDistance,
                );

            if (
                config.useWindowScroll
            ) {
                const top =
                    track.getBoundingClientRect()
                        .top;

                return clamp(
                    -top / span,
                    0,
                    1,
                );
            }

            return clamp(
                root.scrollTop /
                    span,
                0,
                1,
            );
        };

        const tick = () => {
            const config =
                configRef.current;

            const smoothingValue =
                config.smoothing <= 0
                    ? 1
                    : 1 -
                      Math.exp(
                          -1 /
                              (60 *
                                  config.smoothing),
                      );

            current +=
                (target - current) *
                smoothingValue;

            if (
                Math.abs(
                    target - current,
                ) < 0.0005
            ) {
                current = target;
            }

            applyProgress(current);

            if (
                Math.abs(
                    target - current,
                ) >= 0.0005
            ) {
                animationFrame =
                    requestAnimationFrame(
                        tick,
                    );
            } else {
                animationFrame = 0;
            }
        };

        const onScroll = () => {
            target =
                readProgress();

            if (
                configRef.current
                    .smoothing <= 0 ||
                reduceMotion
            ) {
                current = target;

                applyProgress(
                    current,
                );

                return;
            }

            if (!animationFrame) {
                animationFrame =
                    requestAnimationFrame(
                        tick,
                    );
            }
        };

        const onResize = () => {
            measure();

            target =
                readProgress();

            current = target;

            applyProgress(
                current,
            );
        };

        measure();

        target =
            readProgress();

        current =
            target;

        applyProgress(
            current,
        );

        const scroller =
            configRef.current
                .useWindowScroll
                ? window
                : root;

        scroller.addEventListener(
            "scroll",
            onScroll,
            {
                passive: true,
            },
        );

        window.addEventListener(
            "resize",
            onResize,
        );

        const resizeObserver =
            new ResizeObserver(
                onResize,
            );

        resizeObserver.observe(
            root,
        );

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(
                    animationFrame,
                );
            }

            animationFrame = 0;

            scroller.removeEventListener(
                "scroll",
                onScroll,
            );

            window.removeEventListener(
                "resize",
                onResize,
            );

            resizeObserver.disconnect();
        };
    }, [
        applyProgress,
    ]);

    const bleedClass =
        fullBleed
            ? "w-screen max-w-none relative left-1/2 -translate-x-1/2"
            : "w-full";

    return (
        <div
            ref={rootRef}
            className={`
                relative
                ${bleedClass}
                ${useWindowScroll ? "" : "overflow-y-auto overflow-x-hidden"}
                ${className}
            `.trim()}
            style={style}
        >
            <div
                ref={trackRef}
                className="relative w-full"
            >
                <div
                    ref={stageRef}
                    className="sticky top-0 w-full overflow-hidden"
                >
                    <div
                        ref={frameRef}
                        className="
                            absolute
                            inset-0
                            overflow-hidden
                            bg-black
                            [clip-path:inset(20%_25%_20%_25%_round_22px)]
                            will-change-[clip-path]
                        "
                    >
                        {mediaType === "video" ? (
                            <video
                                ref={videoRef}
                                src={src}
                                poster={poster}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    origin-center
                                    object-cover
                                    will-change-transform
                                "
                            />
                        ) : (
                            <img
                                ref={imageRef}
                                src={src}
                                alt={alt}
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    origin-center
                                    object-cover
                                    will-change-transform
                                "
                            />
                        )}

                        {/* Dark overlay */}
                        <div
                            ref={scrimRef}
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/75
                                via-black/10
                                to-black/20
                                opacity-0
                            "
                        />

                        {/* Overlay content */}
                        {children && (
                            <div
                                ref={overlayRef}
                                className="
                                    absolute
                                    inset-0
                                    z-20
                                    flex
                                    items-center
                                    justify-center
                                    p-6
                                    text-center
                                    opacity-0
                                    will-change-transform
                                    sm:p-12
                                "
                            >
                                {children}
                            </div>
                        )}
                    </div>

                    {/* Hero title */}
                    {title && (
                        <div
                            ref={titleRef}
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                z-20
                                flex
                                items-center
                                justify-center
                                px-6
                                text-center
                                text-4xl
                                font-semibold
                                leading-none
                                tracking-[-0.05em]
                                text-white
                                will-change-transform
                                sm:text-6xl
                                lg:text-7xl
                            "
                        >
                            {title}
                        </div>
                    )}

                    {/* Scroll hint */}
                    {scrollHint && (
                        <div
                            ref={hintRef}
                            className="
                                pointer-events-none
                                absolute
                                inset-x-0
                                bottom-7
                                z-30
                                text-center
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-[0.22em]
                                text-white/55
                            "
                        >
                            {scrollHint}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}