/**
 * TabBar (Bottom Tab Bar) Component
 *
 * Figma source: HG8UU5nWhUY8q96Ld3RTHO / node 24086:3759
 * 디자인 토큰: tokens/theme.css 의 CSS 변수 사용 (헥스 코드 직접 사용 금지)
 *
 * Variants (type):
 *   Home          — 기본 홈 탭바 (5탭: sidebar, search, home, mypage, 11talk)
 *   Sub           — 서브 탭바   (7탭: back, sidebar, search, home, mypage, 11talk+뱃지, recentgoods)
 *   Mw            — MW 탭바    (5탭: sidebar, search, home, mypage, recentgoods_no)
 *   customHomebar — 홈 + 플로팅 브랜드 배너 (iOS 커스텀 홈바)
 *   customHomebarMw — MW + 플로팅 브랜드 배너
 */

'use client';

import React from 'react';
import {
  IconBack,
  IconSearch,
  IconHome,
  IconMyPage,
  IconSideMenu,
  Icon11Talk,
  IconRecentGoods,
  IconRecentGoodsNo,
} from '../GNB/icons';

// Figma 에셋 — 중앙 관리 출처: components/GNB/icons.tsx ASSETS

// iOS_Tabbar/customHomeButton (node 24086:3811)
const CUSTOM_HOME_ASSETS = {
  /** logo layer: top:18px / w:26px / h:27.178px / left:50% translateX(-50%) */
  logo: '../../assets/ic-custom-home-logo.svg',
} as const;

// floating_btn_brand (node 24086:1306)
const FLOATING_BANNER_ASSETS = {
  mask:        '../../assets/floating-banner-mask.svg',
  fill:        '../../assets/floating-banner-fill.svg',
  ellipse:     '../../assets/floating-banner-ellipse.svg',
  closeX:      '../../assets/ic-close-x.svg',
  /** 브랜드별 교체 대상 — 기본값: 드리미 */
  brandProduct:'../../assets/floating-brand-product-dreame.png',
  brandLogo:   '../../assets/floating-brand-logo-dreame.png',
} as const;

// ============================================================
// Types
// ============================================================

export type TabBarType = 'Home' | 'Sub' | 'Mw' | 'customHomebar' | 'customHomebarMw';

export type TabKey =
  | 'sidebar'
  | 'search'
  | 'home'
  | 'mypage'
  | 'talk'
  | 'recentgoods';

export interface TabBarProps {
  /** 탭바 타입 */
  type?: TabBarType;
  /** 현재 활성 탭 */
  activeTab?: TabKey;
  /** 11talk 알림 수 (0이면 뱃지 숨김) */
  talkCount?: number;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 탭 변경 핸들러 */
  onTabChange?: (tab: TabKey) => void;
  /** 추가 className */
  className?: string;
}

// ============================================================
// Sub-components
// ============================================================

/** iOS 홈 인디케이터 (홈 버튼 없는 기기) */
function HomeIndicator() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 21,
        paddingBottom: 8,
        backgroundColor: 'var(--color-gray-14)',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: 134,
          height: 5,
          backgroundColor: 'var(--color-gray-01)',
          borderRadius: 100,
        }}
      />
    </div>
  );
}

/** 알림 뱃지 */
function TalkBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span
      style={{
        position: 'absolute',
        top: 10,
        left: '50%',
        transform: 'translateX(12px)',
        minWidth: 16,
        height: 16,
        backgroundColor: 'var(--color-primary-red)',
        color: 'var(--color-gray-14)',
        fontFamily: 'var(--font-family-pretendard)',
        fontSize: 'var(--font-size-caption-5)',
        lineHeight: 'var(--line-height-caption-5)',
        fontWeight: 'var(--font-weight-regular)',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px 4.5px',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {count > 99 ? '99+' : count}
    </span>
  );
}

/** 단일 탭 아이템 */
function TabItem({
  tabKey,
  label,
  icon,
  isActive,
  badge,
  disabled,
  flex,
  paddingX = 8,
  onClick,
}: {
  tabKey: TabKey;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  badge?: number;
  disabled?: boolean;
  flex?: string | number;
  /** 좌우 패딩(px). Figma 스펙: sidebar/search = 20, 나머지 = 8 */
  paddingX?: number;
  onClick?: () => void;
}) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      style={{
        position: 'relative',
        flex: flex ?? '1 0 0',
        minWidth: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `10px ${paddingX}px`,
        background: 'none',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {icon}
      {typeof badge === 'number' && badge > 0 && <TalkBadge count={badge} />}
    </button>
  );
}

// ============================================================
// Variant: Home (5탭)
// ============================================================

function VariantHome({
  activeTab,
  talkCount,
  disabled,
  onTabChange,
}: TabBarProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-gray-14)',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
        display: 'flex',
        height: 56,
        alignItems: 'flex-end',
        width: '100%',
      }}
      role="tablist"
      aria-label="메인 탭바"
    >
      <TabItem tabKey="sidebar"    label="사이드메뉴"    icon={<IconSideMenu />}                    isActive={activeTab === 'sidebar'}    disabled={disabled} onClick={() => onTabChange?.('sidebar')} />
      <TabItem tabKey="search"     label="검색"          icon={<IconSearch />}                      isActive={activeTab === 'search'}     disabled={disabled} onClick={() => onTabChange?.('search')} />
      <TabItem tabKey="home"       label="홈"            icon={<IconHome active={activeTab === 'home'} />}  isActive={activeTab === 'home'}       disabled={disabled} flex="0 0 auto" onClick={() => onTabChange?.('home')} />
      <TabItem tabKey="mypage"     label="마이페이지"    icon={<IconMyPage />}                      isActive={activeTab === 'mypage'}     disabled={disabled} onClick={() => onTabChange?.('mypage')} />
      <TabItem tabKey="talk"       label="11talk"        icon={<Icon11Talk />}                      isActive={activeTab === 'talk'}       disabled={disabled} badge={talkCount} onClick={() => onTabChange?.('talk')} />
    </div>
  );
}

// ============================================================
// Variant: Sub (7탭 — 뒤로, 사이드, 검색, 홈, 마이, talk+뱃지, 최근)
// ============================================================

function VariantSub({
  activeTab,
  talkCount,
  disabled,
  onTabChange,
}: TabBarProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-gray-14)',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
        display: 'flex',
        height: 56,
        alignItems: 'flex-end',
        width: '100%',
      }}
      role="tablist"
      aria-label="서브 탭바"
    >
      <TabItem tabKey="sidebar"     label="뒤로가기"      icon={<IconBack />}                         isActive={false}                      disabled={disabled} onClick={() => onTabChange?.('sidebar')} />
      <TabItem tabKey="sidebar"     label="사이드메뉴"    icon={<IconSideMenu />}                     isActive={activeTab === 'sidebar'}    disabled={disabled} onClick={() => onTabChange?.('sidebar')} />
      <TabItem tabKey="search"      label="검색"          icon={<IconSearch />}                       isActive={activeTab === 'search'}     disabled={disabled} onClick={() => onTabChange?.('search')} />
      <TabItem tabKey="home"        label="홈"            icon={<IconHome active={activeTab === 'home'} />} isActive={activeTab === 'home'}  disabled={disabled} flex="0 0 auto" onClick={() => onTabChange?.('home')} />
      <TabItem tabKey="mypage"      label="마이페이지"    icon={<IconMyPage />}                       isActive={activeTab === 'mypage'}     disabled={disabled} onClick={() => onTabChange?.('mypage')} />
      <TabItem tabKey="talk"        label="11talk"        icon={<Icon11Talk />}                       isActive={activeTab === 'talk'}       disabled={disabled} badge={talkCount} onClick={() => onTabChange?.('talk')} />
      <TabItem tabKey="recentgoods" label="최근 본 상품"  icon={<IconRecentGoods />}                  isActive={activeTab === 'recentgoods'} disabled={disabled} onClick={() => onTabChange?.('recentgoods')} />
    </div>
  );
}

// ============================================================
// Variant: Mw (5탭 — MW 버전, 홈인디케이터 없음)
// ============================================================

function VariantMw({
  activeTab,
  disabled,
  onTabChange,
}: TabBarProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-gray-14)',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
        display: 'flex',
        height: 56,
        alignItems: 'flex-end',
        width: '100%',
        paddingTop: 8,
      }}
      role="tablist"
      aria-label="MW 탭바"
    >
      <TabItem tabKey="sidebar"     label="사이드메뉴"   icon={<IconSideMenu />}                         isActive={activeTab === 'sidebar'}    disabled={disabled} onClick={() => onTabChange?.('sidebar')} />
      <TabItem tabKey="search"      label="검색"         icon={<IconSearch />}                           isActive={activeTab === 'search'}     disabled={disabled} onClick={() => onTabChange?.('search')} />
      <TabItem tabKey="home"        label="홈"           icon={<IconHome active={activeTab === 'home'} />} isActive={activeTab === 'home'}       disabled={disabled} onClick={() => onTabChange?.('home')} />
      <TabItem tabKey="mypage"      label="마이페이지"   icon={<IconMyPage />}                           isActive={activeTab === 'mypage'}     disabled={disabled} onClick={() => onTabChange?.('mypage')} />
      <TabItem tabKey="recentgoods" label="최근 본 상품" icon={<IconRecentGoodsNo />}                   isActive={activeTab === 'recentgoods'} disabled={disabled} onClick={() => onTabChange?.('recentgoods')} />
    </div>
  );
}

// ============================================================
// Variant: customHomebar (플로팅 브랜드 배너 + 홈탭)
// ============================================================

/**
 * 플로팅 브랜드 배너
 * Figma: floating_btn_brand (node 24086:1306)
 *
 * 구조 (Figma 원본 그대로):
 *   162×56 relative 컨테이너
 *   ├── ic/ic_close   (18×18, left:144px, top:0)
 *   │   ├── bg        (inset:0, bg:#111, radius:10px)
 *   │   └── x icon   (inset:33.33%, img inset:-5.89%)
 *   └── floating_brand (144×56, overflow:clip, radius:100px, shadow)
 *       └── BN/MW/홈탭플로팅배너 (mask: imgBnMw, 144×56)
 *           ├── @ 컬러 변경   그라디언트 배경 fill
 *           ├── Ellipse1325   장식선 (h:1.776px, left:14.58px, top:47.14px)
 *           ├── 화이트1       브랜드 상품 이미지 (50.4×50.4, left:50%-44px, top:50%+1px)
 *           └── 문구          left:56px, top:50%+0.15px
 *               ├── 브랜드 로고 이미지 (73.065×9.297px)
 *               └── 브랜드명 텍스트 (Noto Sans KR Medium, 12px, white, tracking:-0.12px)
 *
 * Props:
 *   brandProduct — 브랜드 상품 이미지 URL (기본: 드리미)
 *   brandLogo    — 브랜드 로고 이미지 URL (기본: 드리미)
 *   brandName    — 브랜드명 텍스트 (기본: "드리미")
 *   onClose      — X 버튼 핸들러
 */
function FloatingBrandBanner({
  brandProduct = FLOATING_BANNER_ASSETS.brandProduct,
  brandLogo    = FLOATING_BANNER_ASSETS.brandLogo,
  brandName    = '드리미',
  onClose,
}: {
  brandProduct?: string;
  brandLogo?: string;
  brandName?: string;
  onClose?: () => void;
} = {}) {
  const mask = `url('${FLOATING_BANNER_ASSETS.mask}')`;

  return (
    /* floating_btn_brand: 162×56, relative */
    <div
      style={{ position: 'relative', width: 162, height: 56, flexShrink: 0 }}
      aria-label={`${brandName} 브랜드 배너`}
    >
      {/* ic/ic_close — left:144px top:0 18×18 */}
      <div style={{ position: 'absolute', left: 144, top: 0, width: 18, height: 18 }}>
        {/* bg: inset:0, #111, radius:10px */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#111111', borderRadius: 10 }} />
        {/* x icon: inset:33.33%, img inset:-5.89% */}
        <button
          onClick={onClose}
          aria-label="배너 닫기"
          style={{
            position: 'absolute',
            inset: '33.33%',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <div style={{ position: 'absolute', inset: '-5.89%' }}>
            <img
              alt=""
              src={FLOATING_BANNER_ASSETS.closeX}
              style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
            />
          </div>
        </button>
      </div>

      {/* floating_brand: 144×56, overflow:clip, radius:100px, shadow */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 144,
          height: 56,
          borderRadius: 100,
          overflow: 'clip',
          boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.2)',
        }}
      >
        {/* BN/MW/홈탭플로팅배너 — mask shape, 144×56 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 144,
            height: 56,
            overflow: 'clip',
            WebkitMaskImage: mask,
            maskImage: mask,
            maskMode: 'alpha',
            maskComposite: 'intersect',
            maskRepeat: 'no-repeat',
            maskPosition: '0px 0px',
            maskSize: '144px 56px',
          }}
        >
          {/* @ 컬러 변경: 그라디언트 배경 fill */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              WebkitMaskImage: mask,
              maskImage: mask,
              maskMode: 'alpha',
              maskComposite: 'intersect',
              maskRepeat: 'no-repeat',
              maskPosition: '0px 0px',
              maskSize: '144px 56px',
            }}
          >
            <img
              alt=""
              src={FLOATING_BANNER_ASSETS.fill}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
            />
          </div>

          {/* Ellipse1325: 장식선 h:1.776px, left:14.58px, top:47.14px, w:26.857px */}
          <div
            style={{
              position: 'absolute',
              height: 1.776,
              left: 14.58,
              top: 47.14,
              width: 26.857,
              WebkitMaskImage: mask,
              maskImage: mask,
              maskMode: 'alpha',
              maskComposite: 'intersect',
              maskRepeat: 'no-repeat',
              maskPosition: '-14.578px -47.137px',
              maskSize: '144px 56px',
            }}
          >
            <div style={{ position: 'absolute', top: '-50.67%', right: '-3.35%', bottom: '-50.67%', left: '-3.35%' }}>
              <img
                alt=""
                src={FLOATING_BANNER_ASSETS.ellipse}
                style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
              />
            </div>
          </div>

          {/* 화이트1: 브랜드 상품 이미지 50.4×50.4 */}
          <div
            style={{
              position: 'absolute',
              left: 'calc(50% - 44px)',
              top: 'calc(50% + 1px)',
              transform: 'translate(-50%, -50%)',
              width: 50.4,
              height: 50.4,
              WebkitMaskImage: mask,
              maskImage: mask,
              maskMode: 'alpha',
              maskComposite: 'intersect',
              maskRepeat: 'no-repeat',
              maskPosition: '-2.8px -3.8px',
              maskSize: '144px 56px',
            }}
          >
            <img
              alt={brandName}
              src={brandProduct}
              style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none', objectFit: 'cover', pointerEvents: 'none' }}
            />
          </div>

          {/* 문구: left:56px, top:50%+0.15px, w:72px, gap:4px */}
          <div
            style={{
              position: 'absolute',
              left: 56,
              top: 'calc(50% + 0.15px)',
              transform: 'translateY(-50%)',
              width: 72,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              alignItems: 'flex-start',
              justifyContent: 'center',
              WebkitMaskImage: mask,
              maskImage: mask,
              maskMode: 'alpha',
              maskComposite: 'intersect',
              maskRepeat: 'no-repeat',
              maskPosition: '-56px -15px',
              maskSize: '144px 56px',
            }}
          >
            {/* 브랜드 로고 이미지: 73.065×9.297px */}
            <div style={{ position: 'relative', flexShrink: 0, width: 73.065, height: 9.297 }}>
              <img
                alt={brandName}
                src={brandLogo}
                style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', maxWidth: 'none', objectFit: 'cover', pointerEvents: 'none' }}
              />
            </div>
            {/* 브랜드명 텍스트 */}
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: 1, flexShrink: 0 }}>
              <p
                style={{
                  fontFamily: 'var(--font-family-noto-sans-kr, "Noto Sans KR", sans-serif)',
                  fontSize: 12,
                  fontWeight: 500,
                  fontStyle: 'normal',
                  lineHeight: '12px',
                  color: 'white',
                  letterSpacing: -0.12,
                  whiteSpace: 'nowrap',
                  margin: 0,
                }}
              >
                {brandName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 홈 커스텀 버튼 (center floating)
 * Figma: iOS_Tabbar/customHomeButton (node 24086:3811)
 *
 * 구조 (Figma 원본 그대로):
 *   72×72 컨테이너 (overflow:clip, border-radius:8px)  ← 부모가 absolute 위치 지정
 *   ├── @@그림자배경  top:17.95% right:16.67% bottom:16.67% left:16.67%
 *   │               bg:#BBBBBB blur:4.077px opacity:0.8 radius:24px
 *   └── icon        left:10px top:8px 52×52 overflow:clip radius:100px gradient
 *       └── img     left:0 top:0 52×52 radius:100px (absolute wrapper)
 *           └── logo  left:50% translateX(-50%) top:18px w:26px h:27.178px
 *               └── <img src={logo}>
 *
 * ※ arrow(삭제금지) (node 24086:3812)는 Tabbar 내부 별도 형제 요소로, 이 컴포넌트 밖에 위치
 */
function CustomHomeButton({ onClick }: { onClick?: () => void }) {
  return (
    /* 72×72 컨테이너 — 부모 VariantCustomHomebar 에서 absolute 배치 */
    <div
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: -8,
        width: 72,
        height: 72,
        borderRadius: 8,
        overflow: 'clip',
        zIndex: 1,
      }}
    >
      {/* @@그림자배경 (node I24086:3811;23894:12101) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top:    '17.95%',
          right:  '16.67%',
          bottom: '16.67%',
          left:   '16.67%',
          backgroundColor: '#BBBBBB',
          filter: 'blur(4.077px)',
          opacity: 0.8,
          borderRadius: 24,
        }}
      />

      {/* icon (node I24086:3811;23894:12100): 52×52 그라디언트 원 */}
      <button
        onClick={onClick}
        aria-label="홈"
        style={{
          position: 'absolute',
          left: 10,
          top: 8,
          width: 52,
          height: 52,
          borderRadius: '100px',
          background: 'linear-gradient(135deg, rgb(255,90,46) 0%, rgb(255,0,56) 51.96%, rgb(255,0,239) 100%)',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          overflow: 'clip',
        }}
      >
        {/* img (node I24086:3811;23894:12742): 52×52 rounded wrapper */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 52,
            height: 52,
            borderRadius: '100px',
          }}
        >
          {/* logo (node I24086:3811;23894:12153): top:18px / w:26px / h:27.178px / center-x */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: 18,
              width: 26,
              height: 27.178,
            }}
          >
            <img
              alt="11번가 홈"
              src={CUSTOM_HOME_ASSETS.logo}
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
      </button>
    </div>
  );
}

function VariantCustomHomebar({
  activeTab,
  talkCount,
  disabled,
  onTabChange,
}: TabBarProps) {
  return (
    <>
      {/* floating_btn_brand: 162×56, Figma에서 탭바 위 중앙 배치 */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: 4 }}>
        <FloatingBrandBanner />
      </div>
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            backgroundColor: 'var(--color-gray-14)',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
            display: 'flex',
            height: 56,
            alignItems: 'flex-end',
            width: '100%',
            position: 'relative',
          }}
          role="tablist"
          aria-label="커스텀 홈 탭바"
        >
          <CustomHomeButton onClick={() => onTabChange?.('home')} />
          {/* Figma: sidebar = ic_gnb_back (←), px=20 */}
          <TabItem tabKey="sidebar" label="뒤로"        icon={<IconBack />}      isActive={activeTab === 'sidebar'} disabled={disabled} paddingX={20} onClick={() => onTabChange?.('sidebar')} />
          {/* Figma: search px=20 */}
          <TabItem tabKey="search"  label="검색"        icon={<IconSearch />}    isActive={activeTab === 'search'}  disabled={disabled} paddingX={20} onClick={() => onTabChange?.('search')} />
          {/* 홈 버튼 자리 spacer */}
          <div style={{ flex: '0 0 52px' }} aria-hidden="true" />
          <TabItem tabKey="mypage"  label="마이페이지"  icon={<IconMyPage />}    isActive={activeTab === 'mypage'}  disabled={disabled} onClick={() => onTabChange?.('mypage')} />
          <TabItem tabKey="talk"    label="11talk"      icon={<Icon11Talk />}    isActive={activeTab === 'talk'}    disabled={disabled} badge={talkCount} onClick={() => onTabChange?.('talk')} />
        </div>
      </div>
    </>
  );
}

// ============================================================
// Main TabBar Component
// ============================================================

/**
 * TabBar (하단 탭 내비게이션)
 *
 * @example
 * // 홈 탭바
 * <TabBar type="Home" activeTab="home" talkCount={88} onTabChange={setActiveTab} />
 *
 * @example
 * // 서브 탭바
 * <TabBar type="Sub" activeTab="home" onTabChange={setActiveTab} />
 *
 * @example
 * // MW 탭바 (홈인디케이터 없음)
 * <TabBar type="Mw" activeTab="home" onTabChange={setActiveTab} />
 *
 * @example
 * // 커스텀 홈바 (플로팅 브랜드 배너 포함)
 * <TabBar type="customHomebar" activeTab="home" onTabChange={setActiveTab} />
 */
export function TabBar({
  type = 'Home',
  activeTab = 'home',
  talkCount = 0,
  disabled = false,
  onTabChange,
  className,
}: TabBarProps) {
  const showHomeIndicator = type === 'Home' || type === 'Sub' || type === 'customHomebar';
  const isMw = type === 'Mw' || type === 'customHomebarMw';

  const renderTabBar = () => {
    switch (type) {
      case 'Sub':
        return <VariantSub activeTab={activeTab} talkCount={talkCount} disabled={disabled} onTabChange={onTabChange} />;
      case 'Mw':
        return <VariantMw activeTab={activeTab} disabled={disabled} onTabChange={onTabChange} />;
      case 'customHomebar':
        return <VariantCustomHomebar activeTab={activeTab} talkCount={talkCount} disabled={disabled} onTabChange={onTabChange} />;
      case 'customHomebarMw':
        return (
          <>
            <FloatingBrandBanner />
            <VariantMw activeTab={activeTab} disabled={disabled} onTabChange={onTabChange} />
          </>
        );
      case 'Home':
      default:
        return <VariantHome activeTab={activeTab} talkCount={talkCount} disabled={disabled} onTabChange={onTabChange} />;
    }
  };

  return (
    <nav
      className={className}
      style={{
        width: '100%',
        backgroundColor: 'var(--color-gray-14)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 100,
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? 'none' : undefined,
      }}
      aria-label="하단 탭 내비게이션"
    >
      {renderTabBar()}
      {showHomeIndicator && <HomeIndicator />}
    </nav>
  );
}

export default TabBar;
