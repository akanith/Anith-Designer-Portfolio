'use client';

// OrbitImages component based on React Bits by Dominik Koch
// Enhanced with accessible interactions, reduced-motion support, and TypeScript types

import { useMemo, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useTransform, animate, type MotionValue } from 'motion/react';
import './OrbitImages.css';

export type OrbitShape =
  | 'ellipse'
  | 'circle'
  | 'square'
  | 'rectangle'
  | 'triangle'
  | 'star'
  | 'heart'
  | 'infinity'
  | 'wave'
  | 'custom';

export interface OrbitImageItem {
  id?: string;
  src: string;
  alt?: string;
  name?: string;
  subtitle?: string;
  category?: string;
  slug?: string;
  bg?: string;
  tag?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export interface OrbitImagesProps {
  images?: string[];
  items?: (string | OrbitImageItem)[];
  altPrefix?: string;
  shape?: OrbitShape;
  customPath?: string;
  baseWidth?: number;
  radiusX?: number;
  radiusY?: number;
  radius?: number;
  starPoints?: number;
  starInnerRatio?: number;
  rotation?: number;
  duration?: number;
  itemSize?: number;
  direction?: 'normal' | 'reverse';
  fill?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  showPath?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathStrokeDasharray?: string;
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
  paused?: boolean;
  pauseOnHover?: boolean;
  centerContent?: ReactNode;
  responsive?: boolean;
  aspectRatio?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
  onItemSelect?: (item: OrbitImageItem | string, index: number) => void;
  renderItem?: (item: OrbitImageItem | string, index: number) => ReactNode;
}

interface OrbitItemProps {
  item: ReactNode;
  index: number;
  totalItems: number;
  path: string;
  itemSize: number;
  rotation: number;
  progress: MotionValue<number>;
  fill: boolean;
  isInteractive?: boolean;
  onItemClick?: () => void;
  label?: string;
}

function generateEllipsePath(cx: number, cy: number, rx: number, ry: number): string {
  return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}`;
}

function generateCirclePath(cx: number, cy: number, r: number): string {
  return generateEllipsePath(cx, cy, r, r);
}

function generateSquarePath(cx: number, cy: number, size: number): string {
  const h = size / 2;
  return `M ${cx - h} ${cy - h} L ${cx + h} ${cy - h} L ${cx + h} ${cy + h} L ${cx - h} ${cy + h} Z`;
}

function generateRectanglePath(cx: number, cy: number, w: number, h: number): string {
  const hw = w / 2;
  const hh = h / 2;
  return `M ${cx - hw} ${cy - hh} L ${cx + hw} ${cy - hh} L ${cx + hw} ${cy + hh} L ${cx - hw} ${cy + hh} Z`;
}

function generateTrianglePath(cx: number, cy: number, size: number): string {
  const height = (size * Math.sqrt(3)) / 2;
  const hs = size / 2;
  return `M ${cx} ${cy - height / 1.5} L ${cx + hs} ${cy + height / 3} L ${cx - hs} ${cy + height / 3} Z`;
}

function generateStarPath(cx: number, cy: number, outerR: number, innerR: number, points: number): string {
  const step = Math.PI / points;
  let path = '';
  for (let i = 0; i < 2 * points; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = i * step - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    path += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  }
  return path + ' Z';
}

function generateHeartPath(cx: number, cy: number, size: number): string {
  const s = size / 30;
  return `M ${cx} ${cy + 12 * s} C ${cx - 20 * s} ${cy - 5 * s}, ${cx - 12 * s} ${cy - 18 * s}, ${cx} ${cy - 8 * s} C ${cx + 12 * s} ${cy - 18 * s}, ${cx + 20 * s} ${cy - 5 * s}, ${cx} ${cy + 12 * s}`;
}

function generateInfinityPath(cx: number, cy: number, w: number, h: number): string {
  const hw = w / 2;
  const hh = h / 2;
  return `M ${cx} ${cy} C ${cx + hw * 0.5} ${cy - hh}, ${cx + hw} ${cy - hh}, ${cx + hw} ${cy} C ${cx + hw} ${cy + hh}, ${cx + hw * 0.5} ${cy + hh}, ${cx} ${cy} C ${cx - hw * 0.5} ${cy + hh}, ${cx - hw} ${cy + hh}, ${cx - hw} ${cy} C ${cx - hw} ${cy - hh}, ${cx - hw * 0.5} ${cy - hh}, ${cx} ${cy}`;
}

function generateWavePath(cx: number, cy: number, w: number, amplitude: number, waves: number): string {
  const pts: string[] = [];
  const segs = waves * 20;
  const hw = w / 2;
  for (let i = 0; i <= segs; i++) {
    const x = cx - hw + (w * i) / segs;
    const y = cy + Math.sin((i / segs) * waves * 2 * Math.PI) * amplitude;
    pts.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
  }
  for (let i = segs; i >= 0; i--) {
    const x = cx - hw + (w * i) / segs;
    const y = cy - Math.sin((i / segs) * waves * 2 * Math.PI) * amplitude;
    pts.push(`L ${x} ${y}`);
  }
  return pts.join(' ') + ' Z';
}

function OrbitItem({
  item,
  index,
  totalItems,
  path,
  itemSize,
  rotation,
  progress,
  fill,
  isInteractive,
  onItemClick,
  label,
}: OrbitItemProps) {
  const itemOffset = fill ? (index / totalItems) * 100 : 0;

  const offsetDistance = useTransform(progress, (p: number) => {
    const offset = (((p + itemOffset) % 100) + 100) % 100;
    return `${offset}%`;
  });

  return (
    <motion.div
      className="orbit-item"
      style={{
        width: itemSize,
        height: itemSize,
        offsetPath: `path("${path}")`,
        offsetRotate: '0deg',
        offsetAnchor: 'center center',
        offsetDistance,
      }}
    >
      <div style={{ transform: `rotate(${-rotation}deg)` }} className="orbit-item-inner">
        {isInteractive ? (
          <button
            type="button"
            onClick={onItemClick}
            aria-label={label || `Orbit branding item ${index + 1}`}
            className="orbit-item-button group"
          >
            {item}
          </button>
        ) : (
          item
        )}
      </div>
    </motion.div>
  );
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function OrbitImages({
  images = [],
  items: rawItems,
  altPrefix = 'Orbiting image',
  shape = 'ellipse',
  customPath,
  baseWidth,
  radiusX = 340,
  radiusY = 100,
  radius = 300,
  starPoints = 5,
  starInnerRatio = 0.5,
  rotation = -8,
  duration = 30,
  itemSize = 100,
  direction = 'normal',
  fill = true,
  width = '100%',
  height = 'auto',
  className = '',
  showPath = false,
  pathColor = 'rgba(0,0,0,0.1)',
  pathWidth = 2,
  pathStrokeDasharray,
  easing = 'linear',
  paused = false,
  pauseOnHover = true,
  centerContent,
  responsive = true,
  aspectRatio,
  ariaHidden,
  ariaLabel,
  onItemSelect,
  renderItem,
}: OrbitImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Compute normalized items list
  const resolvedItems: (string | OrbitImageItem)[] = useMemo(() => {
    if (rawItems && rawItems.length > 0) return rawItems;
    return images;
  }, [rawItems, images]);

  // Determine base coordinate space width
  const effectiveBaseWidth = useMemo(() => {
    if (baseWidth) return baseWidth;
    if (shape === 'ellipse') {
      return Math.max(860, (radiusX + itemSize) * 2 + 60);
    }
    return 1400;
  }, [baseWidth, shape, radiusX, itemSize]);

  const designCenterX = effectiveBaseWidth / 2;
  const designCenterY = effectiveBaseWidth / 2;

  const path = useMemo(() => {
    switch (shape) {
      case 'circle':
        return generateCirclePath(designCenterX, designCenterY, radius);
      case 'ellipse':
        return generateEllipsePath(designCenterX, designCenterY, radiusX, radiusY);
      case 'square':
        return generateSquarePath(designCenterX, designCenterY, radius * 2);
      case 'rectangle':
        return generateRectanglePath(designCenterX, designCenterY, radiusX * 2, radiusY * 2);
      case 'triangle':
        return generateTrianglePath(designCenterX, designCenterY, radius * 2);
      case 'star':
        return generateStarPath(designCenterX, designCenterY, radius, radius * starInnerRatio, starPoints);
      case 'heart':
        return generateHeartPath(designCenterX, designCenterY, radius * 2);
      case 'infinity':
        return generateInfinityPath(designCenterX, designCenterY, radiusX * 2, radiusY * 2);
      case 'wave':
        return generateWavePath(designCenterX, designCenterY, radiusX * 2, radiusY, 3);
      case 'custom':
        return customPath || generateCirclePath(designCenterX, designCenterY, radius);
      default:
        return generateEllipsePath(designCenterX, designCenterY, radiusX, radiusY);
    }
  }, [shape, customPath, designCenterX, designCenterY, radiusX, radiusY, radius, starPoints, starInnerRatio]);

  useIsomorphicLayoutEffect(() => {
    if (!responsive || !containerRef.current) return;
    const updateScale = () => {
      if (!containerRef.current) return;
      setScale(containerRef.current.clientWidth / effectiveBaseWidth);
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [responsive, effectiveBaseWidth]);

  const progress = useMotionValue(0);
  const isEffectivelyPaused = paused || (pauseOnHover && isHovered) || prefersReducedMotion;

  useEffect(() => {
    if (isEffectivelyPaused) return;
    const current = progress.get();
    const target = direction === 'reverse' ? current - 100 : current + 100;
    const controls = animate(progress, target, {
      duration,
      ease: easing,
      repeat: Infinity,
      repeatType: 'loop',
    });
    return () => controls.stop();
  }, [progress, duration, easing, direction, isEffectivelyPaused]);

  const containerWidth = responsive ? '100%' : (typeof width === 'number' ? width : width || '100%');
  const containerHeight = responsive ? 'auto' : (typeof height === 'number' ? height : height || 'auto');

  const isInteractive = Boolean(onItemSelect || resolvedItems.some(i => typeof i !== 'string' && (i.onClick || i.slug)));
  const computedAriaHidden = ariaHidden !== undefined ? ariaHidden : !isInteractive;

  return (
    <div
      ref={containerRef}
      className={`orbit-container overflow-hidden max-w-full ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
        aspectRatio: responsive ? (aspectRatio ?? '1 / 1') : undefined,
      }}
      aria-hidden={computedAriaHidden ? 'true' : undefined}
      role={!computedAriaHidden ? 'region' : undefined}
      aria-label={!computedAriaHidden ? (ariaLabel || 'Orbiting brand identities') : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={responsive ? 'orbit-scaling-container orbit-scaling-container--responsive' : 'orbit-scaling-container'}
        style={{
          width: responsive ? effectiveBaseWidth : '100%',
          height: responsive ? effectiveBaseWidth : '100%',
          transform: responsive && scale !== null ? `translate(-50%, -50%) scale(${scale})` : undefined,
          visibility: responsive && scale === null ? 'hidden' : undefined,
        }}
      >
        <div
          className="orbit-rotation-wrapper"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {showPath && (
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${effectiveBaseWidth} ${effectiveBaseWidth}`}
              className="orbit-path-svg"
            >
              <path
                d={path}
                fill="none"
                stroke={pathColor}
                strokeWidth={pathWidth / (scale ?? 1)}
                strokeDasharray={pathStrokeDasharray}
              />
            </svg>
          )}

          {resolvedItems.map((entry, index) => {
            const isItemObj = typeof entry !== 'string';
            const src = isItemObj ? entry.src : entry;
            const alt = isItemObj ? (entry.alt || entry.name || `${altPrefix} ${index + 1}`) : `${altPrefix} ${index + 1}`;
            const label = isItemObj ? (entry.ariaLabel || entry.name || alt) : alt;

            const handleSelect = () => {
              if (isItemObj && entry.onClick) {
                entry.onClick();
              } else if (onItemSelect) {
                onItemSelect(entry, index);
              }
            };

            const renderedContent = renderItem ? (
              renderItem(entry, index)
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={src}
                alt={alt}
                draggable={false}
                className="orbit-image"
              />
            );

            return (
              <OrbitItem
                key={isItemObj && entry.id ? entry.id : `${src}-${index}`}
                item={renderedContent}
                index={index}
                totalItems={resolvedItems.length}
                path={path}
                itemSize={itemSize}
                rotation={rotation}
                progress={progress}
                fill={fill}
                isInteractive={isInteractive}
                onItemClick={handleSelect}
                label={label}
              />
            );
          })}
        </div>
      </div>

      {centerContent && (
        <div className="orbit-center-content">
          {centerContent}
        </div>
      )}
    </div>
  );
}
