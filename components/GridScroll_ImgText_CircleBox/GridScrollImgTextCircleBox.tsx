/**
 * GridScroll_ImgText_CircleBox
 *
 * Figma: common/GridScroll_ImgText_CircleBox (node 11502:27436)
 *
 * 홈 화면 원형 아이콘 그리드 스크롤 블럭.
 * - 2행(row1: 브랜드, row2: 서비스), 각 행 가로 스크롤
 * - 각 셀: 52×52 원형 아이콘 + Pretendard Regular 13px 라벨
 * - 전체: bg white, width 375px, padding 18px 0, gap 12px
 *
 * Props:
 *   items  — 표시할 아이템 목록 (기본값: Figma 원본 데이터)
 *   onItemClick — 아이템 클릭 핸들러
 */

'use client';

import React from 'react';
import { IconBrand, BrandIconType } from './IconBrand';
import { IconService, ServiceIconType } from './IconService';
import { SERVICE_ASSETS } from './assets';

// ============================================================
// Types
// ============================================================

export type GridItemKind = 'brand' | 'service' | 'custom';

export interface GridItem {
  id: string;
  label: string;
  kind: GridItemKind;
  /** kind="brand" 일 때 */
  brandType?: BrandIconType;
  /** kind="service" 일 때 */
  serviceType?: ServiceIconType;
  /** kind="custom" 일 때 배경색 */
  bgColor?: string;
  /** kind="custom" 일 때 이미지 URL */
  imgSrc?: string;
  /** New 뱃지 표시 여부 */
  dot?: boolean;
}

export interface GridScrollImgTextCircleBoxProps {
  /** row1 아이템 (브랜드). 기본값: Figma 원본 6개 */
  row1?: GridItem[];
  /** row2 아이템 (서비스). 기본값: Figma 원본 6개 */
  row2?: GridItem[];
  onItemClick?: (item: GridItem) => void;
  style?: React.CSSProperties;
  className?: string;
}

// ============================================================
// 기본 데이터 (Figma 원본)
// ============================================================

const DEFAULT_ROW1: GridItem[] = [
  { id: 'ooah',      label: '우아럭스',   kind: 'brand',   brandType: 'OOAh luxe' },
  { id: 'fresh',     label: '신선밥상',   kind: 'brand',   brandType: '신선밥상' },
  { id: 'shooting',  label: '슈팅배송',   kind: 'brand',   brandType: '슈팅배송' },
  { id: 'fashion',   label: '머니한잔',   kind: 'brand',   brandType: '패션뷰티' },
  { id: 'republic',  label: '리퍼블릭',   kind: 'brand',   brandType: '리퍼블릭' },
  { id: 'oolk',      label: '우주패스',   kind: 'brand',   brandType: '우주패스' },
];

const DEFAULT_ROW2: GridItem[] = [
  { id: 'coupon',    label: '쿠폰/혜택',    kind: 'service', serviceType: '쿠폰혜택' },
  { id: 'best',      label: '베스트랭킹',   kind: 'service', serviceType: '베스트' },
  { id: 'mega',      label: '다이슨',       kind: 'service', serviceType: '메가데이', dot: true },
  { id: 'shopping',  label: '헤라',         kind: 'service', serviceType: '쇼핑초월', dot: true },
  { id: 'cake',      label: '발렌타인데이', kind: 'service', serviceType: '케이크' },
  { id: 'pet',       label: '반려동물',     kind: 'service', serviceType: '반려동물' },
];

// ============================================================
// Sub-components
// ============================================================

/** Dot 뱃지 — 9×9px, Figma: left:49px top:5px (셀 기준) */
function DotBadge() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', left: 49, top: 5, width: 9, height: 9 }}
    >
      <img
        alt=""
        src={SERVICE_ASSETS.dot}
        style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
      />
    </div>
  );
}

/** 단일 셀: 아이콘 + 라벨 */
function GridCell({
  item,
  onClick,
}: {
  item: GridItem;
  onClick?: (item: GridItem) => void;
}) {
  return (
    /* 셀 너비 68px (px:8px + 아이콘 52px + px:8px) */
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        padding: '0 8px',
        flexShrink: 0,
        width: 68,
        cursor: onClick ? 'pointer' : undefined,
      }}
      onClick={() => onClick?.(item)}
      role={onClick ? 'button' : undefined}
      aria-label={item.label}
    >
      {/* 아이콘 */}
      {item.kind === 'brand' && (
        <IconBrand type={item.brandType} bgColor={item.bgColor} imgSrc={item.imgSrc} />
      )}
      {item.kind === 'service' && (
        <IconService type={item.serviceType} />
      )}
      {item.kind === 'custom' && (
        <IconBrand kind="custom" bgColor={item.bgColor} imgSrc={item.imgSrc} />
      )}

      {/* 라벨 — Pretendard Regular 13px, #333, center */}
      <div
        style={{
          fontFamily: 'var(--font-family-pretendard, "Pretendard", sans-serif)',
          fontSize: 13,
          fontWeight: 400,
          fontStyle: 'normal',
          lineHeight: '16px',
          color: '#333333',
          textAlign: 'center',
          width: 70,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p style={{ margin: 0, lineHeight: '16px' }}>{item.label}</p>
      </div>

      {/* Dot 뱃지 */}
      {item.dot && <DotBadge />}
    </div>
  );
}

/** 단일 행: 가로 스크롤 */
function GridRow({
  items,
  onItemClick,
}: {
  items: GridItem[];
  onItemClick?: (item: GridItem) => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        height: 74,
        padding: '0 8px',
        flexShrink: 0,
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {items.map((item) => (
        <GridCell key={item.id} item={item} onClick={onItemClick} />
      ))}
    </div>
  );
}

// ============================================================
// Main Component
// ============================================================

export function GridScrollImgTextCircleBox({
  row1 = DEFAULT_ROW1,
  row2 = DEFAULT_ROW2,
  onItemClick,
  style,
  className,
}: GridScrollImgTextCircleBoxProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12,
        overflow: 'clip',
        padding: '18px 0',
        width: 375,
        ...style,
      }}
    >
      <GridRow items={row1} onItemClick={onItemClick} />
      <GridRow items={row2} onItemClick={onItemClick} />
    </div>
  );
}

export default GridScrollImgTextCircleBox;
