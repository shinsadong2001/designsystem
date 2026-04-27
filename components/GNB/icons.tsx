/**
 * GNB / TabBar Icon Components
 *
 * Figma 에셋 출처: node 578:1427 ~ 24244:6621 (TabBar icon set)
 * 실제 SVG/PNG 파일은 Figma MCP 로컬 서버(localhost:3845)에서 제공됩니다.
 * 프로덕션 배포 시 아이콘 파일을 /public/icons/ 로 복사하고 경로를 교체하세요.
 */

import React from 'react';

// ============================================================
// Figma 에셋 URL (Figma MCP Dev 서버)
// ============================================================

const ASSETS = {
  // GNB Back (두 조각으로 구성)
  gnbBackPath1:  '../../assets/ic-back-p1.svg',
  gnbBackPath2:  '../../assets/ic-back-p2.svg',

  // Tab icons — SVG
  sidemenu:      '../../assets/ic-sidemenu.svg',
  search:        '../../assets/ic-search.svg',
  home:          '../../assets/ic-home.svg',
  mypage:        '../../assets/ic-mypage.svg',
  talk:          '../../assets/ic-talk.svg',
  recentgoodsNo: '../../assets/ic-recentgoods-no.svg',

  // Recent goods — PNG
  recentgoods:   '../../assets/ic-recentgoods.png',

  // CustomHomeButton — Figma node 24086:3811 (iOS_Tabbar/customHomeButton)
  customHomeLogo:  '../../assets/ic-custom-home-logo.svg',
  customHomeArrow: '../../assets/ic-custom-home-arrow.svg',

  // icon layer — Figma node 24086:3813 (customHomeButton 내부 아이콘)
  // 52×52 그라디언트 원을 꽉 채우는 11st 아이콘 (음수 inset: top -25.42% / right -4.38% / bottom -16.67% / left -4.47%)
  customHomeIcon:  '../../assets/ic-custom-home-icon.svg',

  // floating_btn_brand — Figma node 24086:1306 (홈탭 플로팅 브랜드 배너)
  floatingBannerMask:    '../../assets/floating-banner-mask.svg', // BN/MW/홈탭플로팅배너 마스크 SVG
  floatingBannerFill:    '../../assets/floating-banner-fill.svg', // @ 컬러 변경 (그라디언트 배경)
  floatingBannerEllipse: '../../assets/floating-banner-ellipse.svg', // Ellipse1325 장식선
  floatingBannerCloseX:  '../../assets/ic-close-x.svg', // ic/ic_close X 아이콘
  // 아래 두 에셋은 브랜드별 교체 대상 (현재: 드리미)
  floatingBrandProduct:  '../../assets/floating-brand-product-dreame.png', // 화이트1 (브랜드 상품 이미지)
  floatingBrandLogo:     '../../assets/floating-brand-logo-dreame.png', // 드리미 로고_화이트 2
} as const;

// ============================================================
// 아이콘 컨테이너 기본 스타일 (36×36, overflow hidden)
// ============================================================

const iconWrap: React.CSSProperties = {
  position:  'relative',
  width:     36,
  height:    36,
  flexShrink: 0,
  overflow:  'hidden',
};

// ============================================================
// GNB Back (←)
// Figma: inset-[30.56%_58.33%_30.54%_22.22%] + bottom-1/2 left-[22.22%] right-[22.22%]
// ============================================================
export function IconBack({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ ...iconWrap, ...style }} aria-hidden="true">
      {/* Path-16 (짧은 가로획) */}
      <div style={{
        position: 'absolute',
        top:    '30.56%',
        right:  '58.33%',
        bottom: '30.54%',
        left:   '22.22%',
      }}>
        <div style={{ position: 'absolute', inset: '-5.36% -10.71%' }}>
          <img alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} src={ASSETS.gnbBackPath1} />
        </div>
      </div>
      {/* Path-18-Copy (긴 사선획) */}
      <div style={{
        position: 'absolute',
        top:    '50%',
        bottom: '50%',
        left:   '22.22%',
        right:  '22.22%',
      }}>
        <div style={{ position: 'absolute', inset: '-0.75px -3.75%' }}>
          <img alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} src={ASSETS.gnbBackPath2} />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Sidemenu (≡)
// Figma: bottom-[23.61%] left-[21.59%] right-[20.79%] top-1/4
// ============================================================
export function IconSideMenu({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ ...iconWrap, ...style }} aria-hidden="true">
      <div style={{
        position: 'absolute',
        top:    '25%',
        right:  '20.79%',
        bottom: '23.61%',
        left:   '21.59%',
      }}>
        <img alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} src={ASSETS.sidemenu} />
      </div>
    </div>
  );
}

// ============================================================
// Search (돋보기)
// Figma: h-[22.274px] left-[20.14%] right-[18.68%] top-[calc(50%-0.11px)] -translate-y-1/2
// ============================================================
export function IconSearch({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ ...iconWrap, ...style }} aria-hidden="true">
      <div style={{
        position:  'absolute',
        top:       'calc(50% - 0.11px)',
        transform: 'translateY(-50%)',
        left:      '20.14%',
        right:     '18.68%',
        height:    22.274,
      }}>
        <img alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} src={ASSETS.search} />
      </div>
    </div>
  );
}

// ============================================================
// Home (집 아이콘)
// Figma: inset-[20.49%_19.44%_19.44%_19.44%]
// ============================================================
export function IconHome({
  active = false,
  style,
}: {
  active?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ ...iconWrap, ...style }} aria-hidden="true">
      <div style={{
        position: 'absolute',
        top:    '20.49%',
        right:  '19.44%',
        bottom: '19.44%',
        left:   '19.44%',
        /* 활성 상태: 빨간색 틴트 필터 적용 */
        filter: active
          ? 'invert(12%) sepia(96%) saturate(7476%) hue-rotate(341deg) brightness(103%) contrast(116%)'
          : 'none',
      }}>
        <img
          alt=""
          style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
          src={ASSETS.home}
        />
      </div>
    </div>
  );
}

// ============================================================
// MyPage (사람 아이콘)
// Figma: inset-[17.36%_20.14%_18.75%_20.14%]
// ============================================================
export function IconMyPage({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ ...iconWrap, ...style }} aria-hidden="true">
      <div style={{
        position: 'absolute',
        top:    '17.36%',
        right:  '20.14%',
        bottom: '18.75%',
        left:   '20.14%',
      }}>
        <img alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} src={ASSETS.mypage} />
      </div>
    </div>
  );
}

// ============================================================
// 11Talk (말풍선)
// Figma: bottom-1/4 left-[25.86%] right-[21.36%] top-[22.22%] / inner: inset-[-3.95%]
// ============================================================
export function Icon11Talk({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ ...iconWrap, ...style }} aria-hidden="true">
      <div style={{
        position: 'absolute',
        top:    '22.22%',
        right:  '21.36%',
        bottom: '25%',
        left:   '25.86%',
      }}>
        <div style={{ position: 'absolute', inset: '-3.95%' }}>
          <img alt="" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} src={ASSETS.talk} />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Recent Goods (시계 — 구매 기록, 최근 본 상품)
// Figma: inset-[21.53%] / inner: inset-[-3.66%]  (PNG)
// ============================================================
export function IconRecentGoods({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ ...iconWrap, ...style }} aria-hidden="true">
      <div style={{
        position: 'absolute',
        top: '21.53%', right: '21.53%', bottom: '21.53%', left: '21.53%',
      }}>
        <div style={{ position: 'absolute', inset: '-3.66%' }}>
          <img
            alt=""
            width={22} height={22}
            style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
            src={ASSETS.recentgoods}
          />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Recent Goods No (비어있는 최근 버전)
// Figma: inset-[19.44%]
// ============================================================
export function IconRecentGoodsNo({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={{ ...iconWrap, ...style }} aria-hidden="true">
      <div style={{
        position: 'absolute',
        top: '19.44%', right: '19.44%', bottom: '19.44%', left: '19.44%',
      }}>
        <img alt="" style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} src={ASSETS.recentgoodsNo} />
      </div>
    </div>
  );
}

// ============================================================
// Logo 11st
// Figma: node 112:447 (Default) / node 2992:10337 (White)
// 컨테이너: 56×24px
// ============================================================

const LOGO_ASSETS = {
  default: '../../assets/logo-default.svg',
  white:   '../../assets/logo-white.svg',
} as const;

export function Logo11st({
  color = 'Default',
  style,
  className,
}: {
  color?: 'Default' | 'White';
  style?: React.CSSProperties;
  className?: string;
}) {
  const src = color === 'White' ? LOGO_ASSETS.white : LOGO_ASSETS.default;
  return (
    <div
      aria-label="11번가"
      role="img"
      className={className}
      style={{
        position: 'relative',
        width: 56,
        height: 24,
        flexShrink: 0,
        ...style,
      }}
    >
      {/* opacity-0 area overlay (Figma White 변형과 동일한 구조) */}
      {color === 'White' && (
        <div style={{ position: 'absolute', inset: 0, opacity: 0 }} />
      )}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '0.14%',
        bottom: 0,
        left: 0,
      }}>
        <img
          alt="11번가"
          src={src}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'block',
            width: '100%',
            height: '100%',
            maxWidth: 'none',
          }}
        />
      </div>
    </div>
  );
}

// ============================================================
// Dropdown chevron (로고 옆 펼침 화살표)
// ============================================================
export function IconDropdown({ color = 'var(--color-gray-02)' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M5 7L9 11L13 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ============================================================
// Cart (장바구니) — GNB 우측 아이콘
// Figma: gnb/ic_gnb_cart / node 578:1321
// Union inset: top 17.36% / right 18.24% / bottom 17.36% / left 11.81%
// ============================================================
export function IconCart({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: 36,
        height: 36,
        flexShrink: 0,
        overflow: 'hidden',
        ...style,
      }}
    >
      <div style={{
        position: 'absolute',
        top:    '17.36%',
        right:  '18.24%',
        bottom: '17.36%',
        left:   '11.81%',
      }}>
        <img
          alt=""
          src="../../assets/ic-cart.svg"
          style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
        />
      </div>
    </div>
  );
}

// ============================================================
// Search Button (검색창 내 빨간 원형 버튼)
// ============================================================
export function IconSearchButton() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect width="30" height="30" rx="15" fill="var(--color-primary-red)" />
      <circle cx="13.5" cy="13.5" r="5" stroke="white" strokeWidth="1.5" />
      <path d="M17.5 17.5L21 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ============================================================
// Close (X) — 플로팅 배너 닫기
// ============================================================
export function IconClose({ color = 'white' }: { color?: string }) {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <path d="M1 1L7 7M7 1L1 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
