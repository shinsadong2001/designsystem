/**
 * 서비스 원형 아이콘
 *
 * Figma: iOS_GridScroll_ImgText_CircleBox/icon_service
 * 컨테이너: 52×52px, border-radius: 100px, bg: #F4F4F4, overflow: clip
 *
 * Props:
 *   type — 서비스 종류 (기본: "출석체크")
 */

'use client';

import React from 'react';
import { SERVICE_ASSETS } from './assets';

export type ServiceIconType =
  | '출석체크'
  | '베스트'
  | '메가데이'
  | '쇼핑초월'
  | '케이크'
  | '반려동물'
  | '쿠폰혜택';

export interface IconServiceProps {
  type?: ServiceIconType;
  style?: React.CSSProperties;
  className?: string;
}

const baseStyle: React.CSSProperties = {
  position: 'relative',
  width: 52,
  height: 52,
  borderRadius: '100px',
  backgroundColor: '#F4F4F4',
  flexShrink: 0,
  overflow: 'clip',
};

export function IconService({ type = '출석체크', style, className }: IconServiceProps) {

  // ── 출석체크 ────────────────────────────────────────────
  if (type === '출석체크') {
    return (
      <div className={className} style={{ ...baseStyle, ...style }}>
        {/* 출첵 이미지: h:36px, left:1px, top:8px, w:50px */}
        <div style={{ position: 'absolute', height: 36, left: 1, top: 8, width: 50 }}>
          <img alt="" src={SERVICE_ASSETS.attendanceImg}
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', maxWidth: 'none' }} />
        </div>
        {/* Vector 오버레이: h:5px, left:22px, top:22.5px, w:8.5px */}
        <div style={{ position: 'absolute', height: 5, left: 22, top: 22.5, width: 8.5 }}>
          <div style={{ position: 'absolute', top: '-7.4%', right: '-3.96%', bottom: '-13.81%', left: '-4.16%' }}>
            <img alt="" src={SERVICE_ASSETS.attendanceVector}
              style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
      </div>
    );
  }

  // ── 베스트랭킹 ──────────────────────────────────────────
  if (type === '베스트') {
    return (
      <div className={className} style={{ ...baseStyle, ...style }}>
        {/* 인기브랜드2: left:5px, top:5px, 42×42 */}
        <div style={{ position: 'absolute', left: 5, top: 5, width: 42, height: 42 }}>
          <img alt="" src={SERVICE_ASSETS.bestImg}
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', maxWidth: 'none' }} />
        </div>
      </div>
    );
  }

  // ── 메가데이 ────────────────────────────────────────────
  if (type === '메가데이') {
    const mask = `url('${SERVICE_ASSETS.megaMask}')`;
    return (
      <div
        className={className}
        style={{
          ...baseStyle,
          background: 'linear-gradient(153.435deg, rgb(47,1,89) 15.385%, rgb(11,9,60) 84.295%)',
          left: -0.43,
          overflow: 'clip',
          ...style,
        }}
      >
        {/* 별 (큰): left:41px top:26px 8×8 */}
        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: 41, top: 26, width: 8, height: 8 }}>
          <div style={{ transform: 'scaleY(-1) rotate(180deg)', position: 'relative', boxShadow: '0px 0px 4px 0px #9578ff', width: 8, height: 8 }}>
            <img alt="" src={SERVICE_ASSETS.megaStar}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', maxWidth: 'none' }} />
          </div>
        </div>
        {/* 별 (작은): left:5px top:20px 5×5 */}
        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: 5, top: 20, width: 5, height: 5 }}>
          <div style={{ transform: 'scaleY(-1) rotate(180deg)', position: 'relative', boxShadow: '0px 0px 3px 0px #9578ff', width: 5, height: 5 }}>
            <img alt="" src={SERVICE_ASSETS.megaStar}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', maxWidth: 'none' }} />
          </div>
        </div>
        {/* 빛 레이어: left:-90px top:-146px, w:189.797px h:251.663px */}
        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: -90, top: -146, width: 189.797, height: 251.663 }}>
          <div style={{ transform: 'rotate(-93.47deg)', flexShrink: 0 }}>
            <div style={{ height: 175.505, opacity: 0.7, position: 'relative', width: 241.484, overflow: 'hidden', pointerEvents: 'none' }}>
              <img alt="" src={SERVICE_ASSETS.megaLightImg}
                style={{ position: 'absolute', height: '264.83%', left: '-62.86%', maxWidth: 'none', top: '-157.24%', width: '331.84%' }} />
            </div>
          </div>
        </div>
        {/* image 2 (glow): left:-0.4px top:126.6px 24×25 */}
        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: -0.4, top: 126.6, width: 24, height: 25 }}>
          <div style={{ transform: 'scaleY(-1) rotate(180deg)', height: 25, opacity: 0.9, position: 'relative', boxShadow: '0px 0px 12px 0px rgba(161,93,255,0.98)', width: 24 }}>
            <img alt="" src={SERVICE_ASSETS.megaStar}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', maxWidth: 'none' }} />
          </div>
        </div>
        {/* image 1 (E-쿠폰 마스크): left:50%-50%+13.5px top:50%-14px 28×28 */}
        <div style={{
          position: 'absolute',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          height: 28, overflow: 'clip', width: 29.373,
        }}>
          <div style={{
            position: 'absolute',
            left: 'calc(50% + 13.5px - 50%)',
            top: -11,
            width: 97, height: 44,
            WebkitMaskImage: mask,
            maskImage: mask,
            maskMode: 'alpha',
            maskComposite: 'intersect',
            maskRepeat: 'no-repeat',
            maskPosition: '21.363px 10.999px',
            maskSize: '27.275px 28px',
            left: 'calc(50% + 13.5px)',
            transform: 'translateX(-50%)',
          } as React.CSSProperties}>
            <img alt="" src={SERVICE_ASSETS.megaImage2}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', maxWidth: 'none' }} />
          </div>
        </div>
      </div>
    );
  }

  // ── 쇼핑초월 ────────────────────────────────────────────
  if (type === '쇼핑초월') {
    return (
      <div
        className={className}
        style={{
          ...baseStyle,
          left: -0.43,
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0.65 2.5 -2.5 0.65 19.5 27)'><stop stop-color='rgba(6,43,139,1)' offset='0'/><stop stop-color='rgba(7,25,89,1)' offset='1'/></radialGradient></defs></svg>\")",
          ...style,
        }}
      >
        {/* 배경 이미지 */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: 52, height: 52, overflow: 'hidden', pointerEvents: 'none' }}>
          <img alt="" src={SERVICE_ASSETS.shoppingImg}
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
        {/* 하단 뱃지 이미지: left:27px top:30px 22×22 */}
        <div style={{ position: 'absolute', left: 27, top: 30, width: 22, height: 22, boxShadow: '0px 0px 8px 0px #1d409a' }}>
          <img alt="" src={SERVICE_ASSETS.shoppingBadge}
            style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', maxWidth: 'none' }} />
        </div>
        {/* 텍스트 "쇼핑 초월" */}
        <div style={{
          position: 'absolute',
          left: '50%', top: 'calc(50% - 14px)',
          transform: 'translateX(-50%)',
          fontFamily: '"Sandoll GyeokdongGothic", sans-serif',
          fontSize: 13,
          fontWeight: 400,
          lineHeight: 0,
          letterSpacing: -0.5,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          backgroundImage: 'linear-gradient(234.462deg, rgb(79,252,255) 10.648%, rgb(255,255,255) 96.007%)',
        }}>
          <p style={{ lineHeight: '14px', marginBottom: 0 }}>쇼핑</p>
          <p style={{ lineHeight: '14px', margin: 0 }}>초월</p>
        </div>
      </div>
    );
  }

  // ── 케이크 ──────────────────────────────────────────────
  if (type === '케이크') {
    return (
      <div className={className} style={{ ...baseStyle, ...style }}>
        {/* 케이크: bottom:26.56% left:25% right:25% top:25% */}
        <div style={{ position: 'absolute', top: '25%', right: '25%', bottom: '26.56%', left: '25%', overflow: 'hidden', pointerEvents: 'none' }}>
          <img alt="" src={SERVICE_ASSETS.cakeImg}
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
      </div>
    );
  }

  // ── 반려동물 ────────────────────────────────────────────
  if (type === '반려동물') {
    return (
      <div className={className} style={{ ...baseStyle, ...style }}>
        {/* 펫: bottom:23.08% left:25% right:22.89% top:23.08% */}
        <div style={{ position: 'absolute', top: '23.08%', right: '22.89%', bottom: '23.08%', left: '25%', overflow: 'hidden', pointerEvents: 'none' }}>
          <img alt="" src={SERVICE_ASSETS.petImg}
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
      </div>
    );
  }

  // ── 쿠폰혜택 ────────────────────────────────────────────
  return (
    <div className={className} style={{ ...baseStyle, ...style }}>
      {/* 쿠폰 그룹1: inset 34.13% 23.08% 33.17% 23.08% */}
      <div style={{ position: 'absolute', top: '34.13%', right: '23.08%', bottom: '33.17%', left: '23.08%' }}>
        <div style={{ position: 'absolute', top: '-20.59%', right: '-14.29%', bottom: '-26.47%', left: '-14.29%' }}>
          <img alt="" src={SERVICE_ASSETS.couponGroup1}
            style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
        </div>
      </div>
      {/* 쿠폰 그룹2: inset 32.69% 23.08% 34.62% 23.08% */}
      <div style={{ position: 'absolute', top: '32.69%', right: '23.08%', bottom: '34.62%', left: '23.08%' }}>
        <img alt="" src={SERVICE_ASSETS.couponGroup2}
          style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </div>
      {/* 느낌표: inset 42.31% 50.96% 43.27% 35.58% */}
      <div style={{ position: 'absolute', top: '42.31%', right: '50.96%', bottom: '43.27%', left: '35.58%' }}>
        <img alt="" src={SERVICE_ASSETS.couponDot}
          style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
      </div>
    </div>
  );
}

export default IconService;
