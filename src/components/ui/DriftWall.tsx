"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";

import "./DriftWall.css";

export interface DriftWallItem {
  image: string;
  title?: string;
  href?: string;
}

export interface DriftWallProps {
  items?: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  radius?: number;
  tilt?: number;
  turn?: number;
  roll?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: "up" | "down";
  variance?: number;
  parallax?: number;
  pauseOnHover?: boolean;
  lift?: number;
  fade?: number;
  dim?: number;
  grayscale?: boolean;
  overlayColor?: string;
  className?: string;
  style?: CSSProperties;
}

interface ColumnMeta {
  copyHeight: number;
  copies: number;
}

const DEFAULT_ITEMS: DriftWallItem[] = [
  {
    image: "https://picsum.photos/id/1015/600/400",
    title: "Peaks",
  },
  {
    image: "https://picsum.photos/id/1025/600/400",
    title: "Pup",
  },
  {
    image: "https://picsum.photos/id/1039/600/400",
    title: "Falls",
  },
  {
    image: "https://picsum.photos/id/1043/600/400",
    title: "Nature",
  },
  {
    image: "https://picsum.photos/id/1044/600/400",
    title: "Mountain",
  },
  {
    image: "https://picsum.photos/id/1050/600/400",
    title: "Travel",
  },
  {
    image: "https://picsum.photos/id/1062/600/400",
    title: "Adventure",
  },
  {
    image: "https://picsum.photos/id/1069/600/400",
    title: "Landscape",
  },
  {
    image: "https://picsum.photos/id/1074/600/400",
    title: "Road",
  },
  {
    image: "https://picsum.photos/id/1080/600/400",
    title: "City",
  },
  {
    image: "https://picsum.photos/id/1084/600/400",
    title: "Creative",
  },
  {
    image: "https://picsum.photos/id/110/600/400",
    title: "Stories",
  },
  {
    image: "https://picsum.photos/id/133/600/400",
    title: "Business",
  },
  {
    image: "https://picsum.photos/id/164/600/400",
    title: "Lifestyle",
  },
  {
    image: "https://picsum.photos/id/106/600/400",
    title: "Content",
  },
];

const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  return window
    .matchMedia("(prefers-reduced-motion: reduce)")
    .matches;
};

const columnFactor = (
  index: number,
  variance: number
): number => {
  const pseudo =
    ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;

  return 1 + variance * pseudo;
};

const DriftWall = ({
  items = DEFAULT_ITEMS,
  columns = 5,
  tileWidth = 200,
  tileHeight = 132,
  gap = 18,
  radius = 14,
  tilt = 16,
  turn = -14,
  roll = 0,
  perspective = 1200,
  depth = 120,
  speed = 42,
  direction = "up",
  variance = 0.45,
  parallax = 0.6,
  pauseOnHover = false,
  lift = 64,
  fade = 0.6,
  dim = 0.55,
  grayscale = false,
  overlayColor = "#060010",
  className = "",
  style,
}: DriftWallProps) => {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const planeRef =
    useRef<HTMLDivElement>(null);

  const trackRefs =
    useRef<(HTMLDivElement | null)[]>([]);

  const rafRef =
    useRef<number | null>(null);

  const offsetsRef =
    useRef<number[]>([]);

  const velocitiesRef =
    useRef<number[]>([]);

  const hoveredColRef =
    useRef<number>(-1);

  const wallHoveredRef =
    useRef<boolean>(false);

  const pointerRef = useRef({
    x: 0,
    y: 0,
  });

  const pointerDampedRef = useRef({
    x: 0,
    y: 0,
  });

  const lastTsRef =
    useRef<number | null>(null);

  const activeIdRef =
    useRef<string | null>(null);

  const [containerHeight, setContainerHeight] =
    useState(600);

  const [activeId, setActiveId] =
    useState<string | null>(null);

  const [reduced, setReduced] =
    useState(false);

  /*
   * ------------------------------------------------------
   * Reduced motion
   * ------------------------------------------------------
   */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => {
      setReduced(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener(
      "change",
      update
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        update
      );
    };
  }, []);

  /*
   * ------------------------------------------------------
   * Normalize data
   * ------------------------------------------------------
   */

  const safeItems =
    items.length > 0
      ? items
      : DEFAULT_ITEMS;

  const safeColumns = Math.max(
    1,
    Math.floor(columns)
  );

  /*
   * ------------------------------------------------------
   * Split items into columns
   * ------------------------------------------------------
   */

  const columnItems = useMemo<
    DriftWallItem[][]
  >(() => {
    const cols: DriftWallItem[][] =
      Array.from(
        { length: safeColumns },
        () => []
      );

    safeItems.forEach((item, index) => {
      cols[index % safeColumns].push(item);
    });

    return cols.map((col) =>
      col.length
        ? col
        : [safeItems[0]]
    );
  }, [safeItems, safeColumns]);

  /*
   * ------------------------------------------------------
   * Calculate copies
   * ------------------------------------------------------
   */

  const columnMeta = useMemo<
    ColumnMeta[]
  >(() => {
    const unit =
      tileHeight + gap;

    return columnItems.map((column) => {
      const copyHeight = Math.max(
        unit,
        column.length * unit
      );

      const copies = Math.max(
        3,
        Math.ceil(
          (containerHeight * 1.8) /
            copyHeight
        ) + 2
      );

      return {
        copyHeight,
        copies,
      };
    });
  }, [
    columnItems,
    tileHeight,
    gap,
    containerHeight,
  ]);

  /*
   * ------------------------------------------------------
   * Observe wall size
   * ------------------------------------------------------
   */

  useLayoutEffect(() => {
    const element =
      containerRef.current;

    if (!element) {
      return;
    }

    const updateHeight = () => {
      setContainerHeight(
        element.getBoundingClientRect()
          .height || 600
      );
    };

    updateHeight();

    const observer =
      new ResizeObserver(() => {
        updateHeight();
      });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * ------------------------------------------------------
   * Base column velocities
   * ------------------------------------------------------
   */

  const baseVelocities = useMemo<
    number[]
  >(() => {
    const directionSign =
      direction === "up"
        ? 1
        : -1;

    return columnItems.map(
      (_, columnIndex) => {
        const alternatingSign =
          columnIndex % 2 === 0
            ? 1
            : -1;

        return (
          speed *
          columnFactor(
            columnIndex,
            variance
          ) *
          directionSign *
          alternatingSign
        );
      }
    );
  }, [
    columnItems,
    direction,
    speed,
    variance,
  ]);

  /*
   * ------------------------------------------------------
   * Initial positions
   * ------------------------------------------------------
   */

  useEffect(() => {
    offsetsRef.current =
      columnMeta.map(
        (meta, columnIndex) =>
          meta.copyHeight *
          ((columnIndex * 0.37) % 1)
      );

    velocitiesRef.current =
      columnItems.map(() => 0);

    trackRefs.current =
      trackRefs.current.slice(
        0,
        columnItems.length
      );
  }, [
    columnMeta,
    columnItems,
  ]);

  /*
   * ------------------------------------------------------
   * 3D wall transform
   * ------------------------------------------------------
   */

  const applyPlaneTransform =
    useCallback(
      (pointerX: number, pointerY: number) => {
        const plane =
          planeRef.current;

        if (!plane) {
          return;
        }

        plane.style.transform =
          [
            "translate(-50%, -50%)",
            "scale(1.08)",
            `rotateX(${tilt + pointerY}deg)`,
            `rotateY(${turn + pointerX}deg)`,
            `rotateZ(${roll}deg)`,
            `translateZ(${-depth}px)`,
          ].join(" ");
      },
      [
        tilt,
        turn,
        roll,
        depth,
      ]
    );

  /*
   * ------------------------------------------------------
   * Main animation loop
   * ------------------------------------------------------
   */

  useEffect(() => {
    let mounted = true;

    const animate = (
      timestamp: number
    ) => {
      if (!mounted) {
        return;
      }

      if (
        lastTsRef.current === null
      ) {
        lastTsRef.current =
          timestamp;
      }

      const deltaTime = Math.min(
        0.05,
        Math.max(
          0,
          timestamp -
            lastTsRef.current
        ) / 1000
      );

      lastTsRef.current =
        timestamp;

      /*
       * Pointer parallax
       */

      const maxTilt =
        parallax * 8;

      const targetPointerX =
        pointerRef.current.x *
        maxTilt;

      const targetPointerY =
        -pointerRef.current.y *
        maxTilt;

      const damping =
        1 -
        Math.exp(
          -deltaTime / 0.12
        );

      pointerDampedRef.current.x +=
        (
          targetPointerX -
          pointerDampedRef.current.x
        ) * damping;

      pointerDampedRef.current.y +=
        (
          targetPointerY -
          pointerDampedRef.current.y
        ) * damping;

      applyPlaneTransform(
        pointerDampedRef.current.x,
        pointerDampedRef.current.y
      );

      /*
       * Drift columns
       */

      if (!reduced) {
        for (
          let columnIndex = 0;
          columnIndex <
          trackRefs.current.length;
          columnIndex++
        ) {
          const meta =
            columnMeta[columnIndex];

          const track =
            trackRefs.current[
              columnIndex
            ];

          if (!meta || !track) {
            continue;
          }

          const wallPaused =
            wallHoveredRef.current &&
            pauseOnHover;

          const columnHovered =
            hoveredColRef.current ===
            columnIndex;

          const movementFactor =
            wallPaused ||
            columnHovered
              ? 0
              : 1;

          const targetVelocity =
            baseVelocities[
              columnIndex
            ] *
            movementFactor;

          const velocityEase =
            1 -
            Math.exp(
              -deltaTime /
                (targetVelocity === 0
                  ? 0.16
                  : 0.28)
            );

          velocitiesRef.current[
            columnIndex
          ] +=
            (
              targetVelocity -
              velocitiesRef.current[
                columnIndex
              ]
            ) *
            velocityEase;

          let nextOffset =
            (
              offsetsRef.current[
                columnIndex
              ] ?? 0
            ) +
            velocitiesRef.current[
              columnIndex
            ] *
              deltaTime;

          nextOffset =
            ((nextOffset %
              meta.copyHeight) +
              meta.copyHeight) %
            meta.copyHeight;

          offsetsRef.current[
            columnIndex
          ] = nextOffset;

          track.style.transform =
            `translate3d(0, ${-nextOffset}px, 0)`;
        }
      }

      rafRef.current =
        requestAnimationFrame(
          animate
        );
    };

    rafRef.current =
      requestAnimationFrame(
        animate
      );

    return () => {
      mounted = false;

      if (
        rafRef.current !== null
      ) {
        cancelAnimationFrame(
          rafRef.current
        );
      }

      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [
    baseVelocities,
    columnMeta,
    pauseOnHover,
    parallax,
    reduced,
    applyPlaneTransform,
  ]);

  /*
   * ------------------------------------------------------
   * Tile activation
   * ------------------------------------------------------
   */

  const activate = useCallback(
    (
      id: string,
      columnIndex: number
    ) => {
      activeIdRef.current =
        id;

      hoveredColRef.current =
        columnIndex;

      setActiveId(id);
    },
    []
  );

  const release = useCallback(
    () => {
      activeIdRef.current =
        null;

      hoveredColRef.current =
        -1;

      setActiveId(null);
    },
    []
  );

  /*
   * ------------------------------------------------------
   * Pointer move
   * ------------------------------------------------------
   */

  const handlePointerMove =
    useCallback(
      (
        event: ReactPointerEvent<HTMLDivElement>
      ) => {
        const container =
          containerRef.current;

        if (!container) {
          return;
        }

        const rect =
          container.getBoundingClientRect();

        if (
          parallax > 0 &&
          !reduced &&
          rect.width > 0 &&
          rect.height > 0
        ) {
          pointerRef.current = {
            x:
              (event.clientX -
                rect.left) /
                rect.width -
              0.5,

            y:
              (event.clientY -
                rect.top) /
                rect.height -
              0.5,
          };
        }

        const element =
          document.elementFromPoint(
            event.clientX,
            event.clientY
          );

        const tile =
          element?.closest(
            "[data-tile-id]"
          ) as HTMLElement | null;

        if (!tile) {
          return;
        }

        const id =
          tile.dataset.tileId;

        const columnIndex = Number(
          tile.dataset.col
        );

        if (!id) {
          return;
        }

        if (
          activeIdRef.current ===
          id
        ) {
          return;
        }

        activate(
          id,
          columnIndex
        );
      },
      [
        activate,
        parallax,
        reduced,
      ]
    );

  /*
   * ------------------------------------------------------
   * Pointer enter / leave
   * ------------------------------------------------------
   */

  const handlePointerEnter =
    useCallback(() => {
      wallHoveredRef.current =
        true;
    }, []);

  const handlePointerLeave =
    useCallback(() => {
      wallHoveredRef.current =
        false;

      pointerRef.current = {
        x: 0,
        y: 0,
      };

      release();
    }, [release]);

  /*
   * ------------------------------------------------------
   * CSS variables
   * ------------------------------------------------------
   */

  const cssVars = useMemo(
    () =>
      ({
        "--dw-tile-w": `${tileWidth}px`,
        "--dw-tile-h": `${tileHeight}px`,
        "--dw-gap": `${gap}px`,
        "--dw-radius": `${radius}px`,
        "--dw-perspective": `${perspective}px`,
        "--dw-lift": `${lift}px`,
        "--dw-dim": dim,
        "--dw-gray": grayscale ? 1 : 0,
        "--dw-overlay": overlayColor,
        "--dw-edge": `${Math.max(
          0,
          Math.min(100, (1 - fade) * 100)
        )}%`,
        ...style,
      }) as CSSProperties,
    [
      tileWidth,
      tileHeight,
      gap,
      radius,
      perspective,
      lift,
      dim,
      grayscale,
      overlayColor,
      fade,
      style,
    ]
  );

  /*
   * ------------------------------------------------------
   * Render one tile
   * ------------------------------------------------------
   */

  const renderTile = (
    item: DriftWallItem,
    id: string,
    columnIndex: number
  ) => {
    const inner = (
      <span className="drift-wall__inner">
        <img
          src={item.image}
          alt={item.title ?? ""}
          loading="lazy"
          decoding="async"
          draggable={false}
        />

        <span
          className="drift-wall__overlay"
          aria-hidden="true"
        />

        {item.title ? (
          <span className="drift-wall__title">
            {item.title}
          </span>
        ) : null}
      </span>
    );

    const className = [
      "drift-wall__tile",
      activeId === id
        ? "is-active"
        : "",
    ]
      .filter(Boolean)
      .join(" ");

    if (item.href) {
      return (
        <a
          key={id}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          className={className}
          data-tile-id={id}
          data-col={columnIndex}
          onFocus={() =>
            activate(
              id,
              columnIndex
            )
          }
          onBlur={release}
          aria-label={
            item.title ??
            "Drift wall item"
          }
        >
          {inner}
        </a>
      );
    }

    return (
      <div
        key={id}
        tabIndex={0}
        role="button"
        aria-label={
          item.title ??
          "Drift wall item"
        }
        className={className}
        data-tile-id={id}
        data-col={columnIndex}
        onFocus={() =>
          activate(
            id,
            columnIndex
          )
        }
        onBlur={release}
      >
        {inner}
      </div>
    );
  };

  const rootClass = [
    "drift-wall",
    reduced
      ? "drift-wall--reduced"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      className={rootClass}
      style={cssVars}
      onPointerEnter={
        handlePointerEnter
      }
      onPointerMove={
        handlePointerMove
      }
      onPointerLeave={
        handlePointerLeave
      }
      role="group"
      aria-label="Drifting wall of content"
    >
      <div
        ref={planeRef}
        className="drift-wall__plane"
      >
        {columnItems.map(
          (columnItemsForColumn, columnIndex) => {
            const meta =
              columnMeta[columnIndex];

            if (!meta) {
              return null;
            }

            const copies =
              Array.from({
                length:
                  meta.copies,
              });

            return (
              <div
                className="drift-wall__col"
                key={`column-${columnIndex}`}
              >
                <div
                  className="drift-wall__track"
                  ref={(element) => {
                    trackRefs.current[
                      columnIndex
                    ] = element;
                  }}
                >
                  {copies.map(
                    (_, copyIndex) =>
                      columnItemsForColumn.map(
                        (
                          item,
                          itemIndex
                        ) =>
                          renderTile(
                            item,
                            `${columnIndex}-${copyIndex}-${itemIndex}`,
                            columnIndex
                          )
                      )
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default DriftWall;