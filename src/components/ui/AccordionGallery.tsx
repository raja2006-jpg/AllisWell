"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import type {
    CSSProperties,
    KeyboardEvent,
    MouseEvent,
} from "react";
import Image from "next/image";
import { gsap } from "gsap";

import "./AccordionGallery.css";

export interface AccordionGalleryItem {
    image: string;
    label?: string;
    link?: string;
    alt?: string;
}

export interface AccordionGalleryProps {
    items?: AccordionGalleryItem[];
    defaultIndex?: number;
    accentColor?: string;
    overlayColor?: string;
    textColor?: string;
    height?: number;
    gap?: number;
    radius?: number;
    expandRatio?: number;
    orientation?: "horizontal" | "vertical";
    duration?: number;
    ease?: string;
    parallax?: number;
    tilt?: number;
    stagger?: number;
    trigger?: "hover" | "click";
    showLabels?: boolean;
    grayscale?: boolean;
    className?: string;
}

const DEFAULT_ITEMS: AccordionGalleryItem[] = [
    {
        image: "https://picsum.photos/id/1015/900/1200",
        label: "Canyon",
        link: "#",
    },
    {
        image: "https://picsum.photos/id/1018/900/1200",
        label: "Ridgeline",
        link: "#",
    },
    {
        image: "https://picsum.photos/id/1039/900/1200",
        label: "Falls",
        link: "#",
    },
    {
        image: "https://picsum.photos/id/1043/900/1200",
        label: "Harbour",
        link: "#",
    },
    {
        image: "https://picsum.photos/id/1044/900/1200",
        label: "Skyline",
        link: "#",
    },
];

export default function AccordionGallery({
    items = DEFAULT_ITEMS,
    defaultIndex = 2,
    accentColor = "#ffffff",
    overlayColor = "#060010",
    textColor = "#ffffff",
    height = 460,
    gap = 10,
    radius = 16,
    expandRatio = 0.52,
    orientation = "horizontal",
    duration = 0.6,
    ease = "power3.out",
    parallax = 0.5,
    tilt = 8,
    stagger = 0.06,
    trigger = "hover",
    showLabels = true,
    grayscale = true,
    className = "",
}: AccordionGalleryProps) {
    const rootRef = useRef<HTMLDivElement | null>(null);

    const panelRefs = useRef<(HTMLElement | null)[]>([]);
    const mediaRefs = useRef<(HTMLElement | null)[]>([]);
    const barRefs = useRef<(HTMLElement | null)[]>([]);
    const textRefs = useRef<(HTMLElement | null)[]>([]);

    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    const activeRef = useRef(0);
    const mediaSizeRef = useRef(320);
    const firstLayoutRef = useRef(true);

    const count = items.length;
    const vertical = orientation === "vertical";

    const safeDefault =
        count > 0
            ? Math.min(
                  Math.max(defaultIndex, 0),
                  count - 1,
              )
            : 0;

    const [active, setActive] =
        useState(safeDefault);

    useEffect(() => {
        activeRef.current = active;
    }, [active]);

    const reducedMotion =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function"
            ? window.matchMedia(
                  "(prefers-reduced-motion: reduce)",
              ).matches
            : false;

    /* ========================================================= */
    /* CALCULATE EXPANDED FLEX VALUE */
    /* ========================================================= */

    const getGrowValue = useCallback(() => {
        const ratio = Math.min(
            Math.max(expandRatio, 0.2),
            0.9,
        );

        return count > 1
            ? (ratio * (count - 1)) / (1 - ratio)
            : 1;
    }, [count, expandRatio]);

    /* ========================================================= */
    /* ANIMATE TO INDEX */
    /* ========================================================= */

    const animateTo = useCallback(
        (nextIndex: number, animate = true) => {
            if (!count) return;

            const clampedIndex = Math.min(
                Math.max(nextIndex, 0),
                count - 1,
            );

            activeRef.current = clampedIndex;
            setActive(clampedIndex);

            const panels = panelRefs.current;

            if (!panels.length) return;

            timelineRef.current?.kill();

            const growValue = getGrowValue();

            const actualDuration =
                animate && !reducedMotion
                    ? duration
                    : 0;

            const timeline = gsap.timeline({
                defaults: {
                    ease,
                },
            });

            panels.forEach((panel, index) => {
                if (!panel) return;

                const media =
                    mediaRefs.current[index];

                const bar =
                    barRefs.current[index];

                const text =
                    textRefs.current[index];

                const isActive =
                    index === clampedIndex;

                const rotation = isActive
                    ? 0
                    : index < clampedIndex
                      ? tilt
                      : -tilt;

                /* =============================== */
                /* PANEL */
                /* =============================== */

                timeline.to(
                    panel,
                    {
                        flexGrow: isActive
                            ? growValue
                            : 1,
                        ...(vertical
                            ? {
                                  rotateX:
                                      -rotation,
                              }
                            : {
                                  rotateY:
                                      rotation,
                              }),
                        duration: actualDuration,
                    },
                    0,
                );

                /* =============================== */
                /* IMAGE */
                /* =============================== */

                if (media) {
                    const distance =
                        clampedIndex - index;

                    const drift = Math.max(
                        -1.5,
                        Math.min(1.5, distance),
                    );

                    const shift =
                        drift *
                        parallax *
                        mediaSizeRef.current *
                        0.06;

                    timeline.to(
                        media,
                        {
                            xPercent: -50,
                            yPercent: -50,

                            x: vertical
                                ? 0
                                : isActive
                                  ? 0
                                  : shift,

                            y: vertical
                                ? isActive
                                  ? 0
                                  : shift
                                : 0,

                            "--ag-gray":
                                grayscale
                                    ? isActive
                                        ? 0
                                        : 1
                                    : 0,

                            "--ag-dim":
                                isActive ? 0 : 0.35,

                            duration: actualDuration,
                        },
                        0,
                    );
                }

                /* =============================== */
                /* LABEL */
                /* =============================== */

                if (
                    showLabels &&
                    bar &&
                    text
                ) {
                    if (isActive) {
                        timeline.to(
                            bar,
                            {
                                opacity: 1,
                                x: 0,
                                duration:
                                    actualDuration,
                            },
                            0,
                        );

                        timeline.to(
                            text,
                            {
                                opacity: 1,
                                x: 0,
                                duration:
                                    actualDuration,
                            },
                            actualDuration *
                                stagger,
                        );
                    } else {
                        timeline.to(
                            [bar, text],
                            {
                                opacity: 0,
                                x: -18,
                                duration:
                                    Math.max(
                                        actualDuration *
                                            0.45,
                                        0,
                                    ),
                            },
                            0,
                        );
                    }
                }
            });

            timelineRef.current = timeline;
        },
        [
            count,
            duration,
            ease,
            getGrowValue,
            grayscale,
            parallax,
            reducedMotion,
            showLabels,
            stagger,
            tilt,
            vertical,
        ],
    );

    /* ========================================================= */
    /* MEASURE */
    /* ========================================================= */

    useEffect(() => {
        const root = rootRef.current;

        if (!root || !count) return;

        const measure = () => {
            const rect =
                root.getBoundingClientRect();

            const total = vertical
                ? rect.height
                : rect.width;

            const usable = Math.max(
                total - gap * (count - 1),
                160,
            );

            const ratio = Math.min(
                Math.max(expandRatio, 0.2),
                0.9,
            );

            const mediaSize = Math.max(
                140,
                usable * ratio * 1.22,
            );

            mediaSizeRef.current =
                mediaSize;

            root.style.setProperty(
                "--ag-media-size",
                `${mediaSize}px`,
            );

            requestAnimationFrame(() => {
                animateTo(
                    activeRef.current,
                    !firstLayoutRef.current,
                );

                firstLayoutRef.current = false;
            });
        };

        measure();

        const resizeObserver =
            new ResizeObserver(measure);

        resizeObserver.observe(root);

        window.addEventListener(
            "resize",
            measure,
        );

        return () => {
            resizeObserver.disconnect();

            window.removeEventListener(
                "resize",
                measure,
            );
        };
    }, [
        animateTo,
        count,
        expandRatio,
        gap,
        vertical,
    ]);

    /* ========================================================= */
    /* INITIAL LAYOUT */
    /* ========================================================= */

    useEffect(() => {
        if (!count) return;

        requestAnimationFrame(() => {
            animateTo(
                safeDefault,
                false,
            );

            firstLayoutRef.current = false;
        });
    }, [
        animateTo,
        count,
        safeDefault,
    ]);

    /* ========================================================= */
    /* CLEANUP */
    /* ========================================================= */

    useEffect(() => {
        return () => {
            timelineRef.current?.kill();
        };
    }, []);

    /* ========================================================= */
    /* EVENTS */
    /* ========================================================= */

    const handleMouseEnter = (
        index: number,
    ) => {
        if (trigger === "hover") {
            animateTo(index, true);
        }
    };

    const handleClick = (
        index: number,
        event: MouseEvent,
    ) => {
        if (index !== activeRef.current) {
            event.preventDefault();

            animateTo(
                index,
                true,
            );
        }
    };

    const handleKeyDown = (
        index: number,
        event: KeyboardEvent,
    ) => {
        if (!count) return;

        if (
            event.key === "ArrowRight" ||
            event.key === "ArrowDown"
        ) {
            event.preventDefault();

            animateTo(
                (index + 1) % count,
                true,
            );
        }

        if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp"
        ) {
            event.preventDefault();

            animateTo(
                (index - 1 + count) %
                    count,
                true,
            );
        }
    };

    /* ========================================================= */
    /* ROOT STYLE */
    /* ========================================================= */

    const rootStyle = {
        "--ag-accent": accentColor,
        "--ag-overlay": overlayColor,
        "--ag-text": textColor,
        "--ag-gap": `${gap}px`,
        "--ag-radius": `${radius}px`,
        "--ag-media-size": "320px",
        height: vertical
            ? `${Math.round(height * 1.6)}px`
            : `${height}px`,
    } as CSSProperties;

    if (!count) {
        return null;
    }

    return (
        <div
            ref={rootRef}
            className={[
                "accordion-gallery",
                vertical
                    ? "accordion-gallery--vertical"
                    : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            style={rootStyle}
            role="list"
            aria-label="Portfolio gallery"
        >
            {items.map((item, index) => {
                const isActive =
                    index === active;

                const panelContent = (
                    <>
                        <span className="ag-panel__frame">
                            <span
                                className="ag-panel__media"
                                ref={(element) => {
                                    mediaRefs.current[
                                        index
                                    ] = element;
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={
                                        item.alt ??
                                        item.label ??
                                        ""
                                    }
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    draggable={false}
                                />
                            </span>

                            <span
                                className="ag-panel__overlay"
                                aria-hidden="true"
                            />
                        </span>

                        {showLabels && (
                            <span
                                className="ag-panel__label"
                                aria-hidden="true"
                            >
                                <span
                                    ref={(element) => {
                                        barRefs.current[
                                            index
                                        ] = element;
                                    }}
                                    className="ag-panel__bar"
                                />

                                <span
                                    ref={(element) => {
                                        textRefs.current[
                                            index
                                        ] = element;
                                    }}
                                    className="ag-panel__text"
                                >
                                    {item.label}
                                </span>
                            </span>
                        )}
                    </>
                );

                const commonProps = {
                    ref: (
                        element: HTMLElement | null,
                    ) => {
                        panelRefs.current[
                            index
                        ] = element;
                    },

                    className: [
                        "ag-panel",
                        isActive
                            ? "ag-panel--active"
                            : "",
                    ]
                        .filter(Boolean)
                        .join(" "),

                    style: {
                        borderRadius:
                            `${radius}px`,
                    },

                    role: "listitem" as const,
                    tabIndex: 0,

                    "aria-label":
                        item.label ??
                        `Portfolio item ${
                            index + 1
                        }`,

                    "aria-current":
                        isActive
                            ? ("true" as const)
                            : undefined,

                    onMouseEnter: () =>
                        handleMouseEnter(
                            index,
                        ),

                    onFocus: () =>
                        animateTo(
                            index,
                            true,
                        ),

                    onKeyDown: (
                        event: KeyboardEvent,
                    ) =>
                        handleKeyDown(
                            index,
                            event,
                        ),
                };

                if (item.link) {
                    return (
                        <a
                            key={`${item.label}-${index}`}
                            {...commonProps}
                            href={item.link}
                            onClick={(
                                event,
                            ) =>
                                handleClick(
                                    index,
                                    event,
                                )
                            }
                        >
                            {panelContent}
                        </a>
                    );
                }

                return (
                    <div
                        key={`${item.label}-${index}`}
                        {...commonProps}
                        onClick={(event) =>
                            handleClick(
                                index,
                                event,
                            )
                        }
                    >
                        {panelContent}
                    </div>
                );
            })}
        </div>
    );
}