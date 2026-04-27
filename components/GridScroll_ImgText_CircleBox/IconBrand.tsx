/**
 * 브랜드 원형 아이콘
 *
 * Figma: iOS_GridScroll_ImgText_CircleBox/icon_brand
 * 컨테이너: 52×52px, border-radius: 100px
 *
 * Props:
 *   type — 브랜드 종류 (기본: "슈팅배송")
 */

'use client';

import React from 'react';
import { BRAND_ASSETS } from './assets';

export type BrandIconType =
  | '슈팅배송'
  | '패션뷰티'
  | '리퍼블릭'
  | '우주패스'
  | 'OOAh luxe'
  | '신선밥상'
  | 'custom';

export interface IconBrandProps {
  type?: BrandIconType;
  /** type="custom" 시 배경색 직접 지정 */
  bgColor?: string;
  /** type="custom" 시 표시할 이미지 URL */
  imgSrc?: string;
  style?: React.CSSProperties;
  className?: string;
}

const baseStyle: React.CSSProperties = {
  position: 'relative',
  width: 52,
  height: 52,
  borderRadius: '100px',
  flexShrink: 0,
  overflow: 'hidden',
};

export function IconBrand({ type = '슈팅배송', bgColor, imgSrc, style, className }: IconBrandProps) {

  // ── 슈팅배송 ────────────────────────────────────────────
  if (type === '슈팅배송') {
    return (
      <div
        className={className}
        style={{
          ...baseStyle,
          background: 'linear-gradient(135deg, rgb(255,90,46) 0%, rgb(255,0,56) 51.96%, rgb(255,0,239) 100%)',
          ...style,
        }}
      >
        {/* shootingdelivery_square: h:25px, left:9.85px, top:15.5px, w:28.295px */}
        <div style={{ position: 'absolute', height: 25, left: 9.85, top: 15.5, width: 28.295, overflow: 'clip' }}>
          <div style={{ position: 'absolute', top: 0, right: '0.01%', bottom: '2.85%', left: 0 }}>
            <img alt="" src={BRAND_ASSETS.shootingShape}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
      </div>
    );
  }

  // ── 패션뷰티 ────────────────────────────────────────────
  if (type === '패션뷰티') {
    return (
      <div
        className={className}
        style={{ ...baseStyle, backgroundColor: '#000000', ...style }}
      >
        {/* 패션 그룹: inset 26.54% 29.29% 51.76% 28.43% */}
        <div style={{ position: 'absolute', top: '26.54%', right: '29.29%', bottom: '51.76%', left: '28.43%' }}>
          <img alt="" src={BRAND_ASSETS.fashionGroup}
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
        {/* 뷰티 그룹: inset 51.71% 30.25% 26.29% 27.64% */}
        <div style={{ position: 'absolute', top: '51.71%', right: '30.25%', bottom: '26.29%', left: '27.64%' }}>
          <img alt="" src={BRAND_ASSETS.beautyGroup}
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
      </div>
    );
  }

  // ── 리퍼블릭 ────────────────────────────────────────────
  if (type === '리퍼블릭') {
    return (
      <div
        className={className}
        style={{ ...baseStyle, backgroundColor: '#5A73F6', ...style }}
      >
        {/* 하단 그룹: inset 52.24% 30.85% 28.85% 30.77% */}
        <div style={{ position: 'absolute', top: '52.24%', right: '30.85%', bottom: '28.85%', left: '30.77%' }}>
          <img alt="" src={BRAND_ASSETS.republicTop}
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
        {/* 상단 그룹: inset 28.85% 30.97% 52.24% 31.44% */}
        <div style={{ position: 'absolute', top: '28.85%', right: '30.97%', bottom: '52.24%', left: '31.44%' }}>
          <img alt="" src={BRAND_ASSETS.republicBot}
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
      </div>
    );
  }

  // ── 우주패스 ────────────────────────────────────────────
  if (type === '우주패스') {
    return (
      <div
        className={className}
        style={{ ...baseStyle, backgroundColor: '#3617CE', ...style }}
      >
        {/* Logo/olklpass2: inset 40.38% 17.31% 41.78% 17.31% */}
        <div style={{ position: 'absolute', top: '40.38%', right: '17.31%', bottom: '41.78%', left: '17.31%' }}>
          {/* 내부 right offset 0.43% */}
          <div style={{ position: 'absolute', top: 0, right: '0.43%', bottom: 0, left: 0 }}>
            <img alt="" src={BRAND_ASSETS.olklpassLogo}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
      </div>
    );
  }

  // ── OOAh luxe ───────────────────────────────────────────
  if (type === 'OOAh luxe') {
    return (
      <div
        className={className}
        style={{ ...baseStyle, ...style }}
      >
        {/* 비디오 루프 배경 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '100px',
            maxWidth: 'none',
          }}
        >
          <source src="/_videos/v1/95ed749d5c2b1d38a42ee150f37d11c9edc4010c" />
        </video>
        {/* OOAh_luxe_square: h:20px, left:11px, top:16px, w:30px */}
        <div style={{ position: 'absolute', height: 20, left: 11, top: 16, width: 30 }}>
          <div style={{ position: 'absolute', top: 0, right: '1.45%', bottom: 0, left: 0 }}>
            <img alt="" src={BRAND_ASSETS.ooahLuxeLogo}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
      </div>
    );
  }

  // ── 신선밥상 ────────────────────────────────────────────
  if (type === '신선밥상') {
    return (
      <div
        className={className}
        style={{ ...baseStyle, backgroundColor: '#00B4A5', ...style }}
      >
        {/* Freshtable_square: h:25.667px, left:15px, top:13px, w:22px */}
        <div style={{ position: 'absolute', height: 25.667, left: 15, top: 13, width: 22 }}>
          <div style={{ position: 'absolute', top: 0, right: '0.88%', bottom: '2.04%', left: 0 }}>
            <img alt="" src={BRAND_ASSETS.freshtable}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
      </div>
    );
  }

  // ── custom ──────────────────────────────────────────────
  return (
    <div
      className={className}
      style={{ ...baseStyle, backgroundColor: bgColor, ...style }}
    >
      {imgSrc && (
        <img alt="" src={imgSrc}
          style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', maxWidth: 'none' }} />
      )}
    </div>
  );
}

export default IconBrand;
