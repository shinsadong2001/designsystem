/**
 * GNB (Global Navigation Bar) Component
 *
 * Figma source: HG8UU5nWhUY8q96Ld3RTHO / node 24086:3086
 * 디자인 토큰: tokens/theme.css 의 CSS 변수 사용 (헥스 코드 직접 사용 금지)
 *
 * Variants (type × subType):
 *   Home      — None | DownScroll | Logoday
 *   PDP       — None | 공식브랜드
 *   Sub       — None | 공식로고
 *   Search    — 검색어 입력전 | 검색어 입력중
 *   VerticalSearch — 검색어 입력전 | 검색어 입력중
 *   TabSearch — 검색어 입력전 | 검색어 입력중
 *   SRP | VerticalSub | Side | CartOrder | Popup | MwSub | Setting | Store — None
 */

'use client';

import React from 'react';
import {
  IconBack,
  IconCart,
  IconSearch,
  IconDropdown,
  Logo11st,
  IconSearchButton,
} from './icons';

// ============================================================
// Types
// ============================================================

export type GNBType =
  | 'Home'
  | 'PDP'
  | 'Sub'
  | 'Search'
  | 'VerticalSearch'
  | 'TabSearch'
  | 'SRP'
  | 'VerticalSub'
  | 'Side'
  | 'CartOrder'
  | 'Popup'
  | 'MwSub'
  | 'Setting'
  | 'Store';

export type GNBSubType =
  | 'None'
  | 'DownScroll'
  | 'Logoday'
  | '공식브랜드'
  | '공식로고'
  | '검색어 입력전'
  | '검색어 입력중';

export interface GNBProps {
  /** GNB 페이지 타입 */
  type?: GNBType;
  /** GNB 세부 타입 (subType) */
  subType?: GNBSubType;
  /** Sub / PDP 타입에서 표시할 페이지 타이틀 */
  title?: string;
  /** 장바구니 아이템 수 (0이면 뱃지 숨김) */
  cartCount?: number;
  /** 알림 / 메시지 수 (0이면 뱃지 숨김) */
  alarmCount?: number;
  /** iOS 상태바 노출 여부 */
  showStatusBar?: boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 검색어 입력 현재 값 */
  searchValue?: string;
  /** 검색창 placeholder 텍스트 */
  searchPlaceholder?: string;
  /** 뒤로가기 버튼 클릭 핸들러 */
  onBack?: () => void;
  /** 장바구니 아이콘 클릭 핸들러 */
  onCart?: () => void;
  /** 검색 버튼 클릭 핸들러 */
  onSearch?: () => void;
  /** 사이드메뉴 클릭 핸들러 */
  onMenu?: () => void;
  /** 검색어 변경 핸들러 */
  onSearchChange?: (value: string) => void;
  /** 추가 className */
  className?: string;
}

// ============================================================
// Sub-components
// ============================================================

/** iOS 상태바 (디자인 문서용 — 실제 앱에선 네이티브 처리) */
function StatusBar() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 44,
        padding: '0 16px',
        backgroundColor: 'var(--color-gray-14)',
      }}
      aria-hidden="true"
    >
      <span
        style={{
          fontFamily: 'var(--font-family-sf-pro)',
          fontSize: 17,
          fontWeight: 600,
          color: 'var(--color-gray-01)',
        }}
      >
        11:11
      </span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {/* 셀룰러 / 와이파이 / 배터리 (심볼) */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="4" width="3" height="8" rx="1" fill="var(--color-gray-01)" />
          <rect x="4" y="2" width="3" height="10" rx="1" fill="var(--color-gray-01)" />
          <rect x="8" y="0" width="3" height="12" rx="1" fill="var(--color-gray-01)" />
          <rect x="12" y="0" width="3" height="12" rx="1" fill="var(--color-gray-01)" opacity="0.3" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 2C4.686 2 1.716 3.343 0 5.5L2 7.5C3.254 6.015 5.52 5 8 5C10.48 5 12.746 6.015 14 7.5L16 5.5C14.284 3.343 11.314 2 8 2Z" fill="var(--color-gray-01)" opacity="0.4" />
          <path d="M8 5C5.52 5 3.254 6.015 2 7.5L4 9.5C4.877 8.578 6.35 8 8 8C9.65 8 11.123 8.578 12 9.5L14 7.5C12.746 6.015 10.48 5 8 5Z" fill="var(--color-gray-01)" opacity="0.7" />
          <circle cx="8" cy="11" r="1.5" fill="var(--color-gray-01)" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0" y="1" width="22" height="10" rx="2" stroke="var(--color-gray-01)" strokeWidth="1" />
          <rect x="1.5" y="2.5" width="17" height="7" rx="1" fill="var(--color-gray-01)" />
          <path d="M23 4.5V7.5C23.83 7.167 24.5 6.617 24.5 6C24.5 5.383 23.83 4.833 23 4.5Z" fill="var(--color-gray-01)" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

/** 배지 뱃지 (카트, 알림 수) */
function Badge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span
      style={{
        position: 'absolute',
        top: -2,
        left: 23,
        minWidth: 16,
        height: 16,
        backgroundColor: 'var(--color-primary-red)',
        color: 'var(--color-gray-14)',
        fontSize: 'var(--font-size-caption-5)',
        lineHeight: 'var(--line-height-caption-5)',
        fontFamily: 'var(--font-family-pretendard)',
        fontWeight: 'var(--font-weight-regular)',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px 4.5px',
        whiteSpace: 'nowrap',
      }}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
}

/** 검색바 (공통) */
function SearchBar({
  value,
  placeholder = '검색어를 입력해주세요',
  active = false,
  disabled = false,
  onChange,
  onSearch,
}: {
  value?: string;
  placeholder?: string;
  active?: boolean;
  disabled?: boolean;
  onChange?: (v: string) => void;
  onSearch?: () => void;
}) {
  return (
    <div
      style={{
        height: 46,
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        backgroundColor: 'var(--color-gray-14)',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: disabled ? 'var(--color-gray-12)' : 'var(--color-gray-13)',
          border: `1px solid var(--color-gray-10)`,
          borderRadius: 100,
          padding: '4px 4px 4px 16px',
          opacity: disabled ? 0.5 : 1,
        }}
      >
        <input
          type="search"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-body-3)',
            lineHeight: 'var(--line-height-body-3)',
            fontWeight: 'var(--font-weight-regular)',
            color: active && value ? 'var(--color-gray-02)' : 'var(--color-gray-05)',
            minWidth: 0,
          }}
          aria-label="검색어 입력"
        />
        <button
          onClick={onSearch}
          disabled={disabled}
          style={{ flexShrink: 0, display: 'flex', alignItems: 'center', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          aria-label="검색"
        >
          <IconSearchButton />
        </button>
      </div>
    </div>
  );
}

/** 우측 아이콘 영역 (공통) */
function RightIcons({
  cartCount = 0,
  onCart,
  onSearch,
}: {
  cartCount?: number;
  onCart?: () => void;
  onSearch?: () => void;
}) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <button
        onClick={onSearch}
        style={{ position: 'relative', display: 'flex', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        aria-label="검색"
      >
        <IconSearch />
      </button>
      <button
        onClick={onCart}
        style={{ position: 'relative', display: 'flex', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        aria-label={`장바구니 ${cartCount > 0 ? cartCount + '개' : ''}`}
      >
        <IconCart />
        <Badge count={cartCount} />
      </button>
    </div>
  );
}

// ============================================================
// Variant Renderers
// ============================================================

/** Home/None: 로고 + 우측 아이콘 + 검색바 */
function VariantHomeNone({ cartCount, disabled, searchValue, searchPlaceholder, onCart, onSearch, onSearchChange }: GNBProps) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          backgroundColor: 'var(--color-gray-14)',
          height: 56,
        }}
      >
        {/* 로고 + 펼침 */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Logo11st />
          <IconDropdown />
        </div>
        {/* 우측 아이콘 */}
        <div style={{ position: 'relative', display: 'flex' }}>
          <button
            onClick={onCart}
            disabled={disabled}
            style={{ position: 'relative', display: 'flex', background: 'none', border: 'none', padding: 0, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1 }}
            aria-label={`장바구니 ${cartCount ?? 0}개`}
          >
            <IconCart />
            <Badge count={cartCount ?? 0} />
          </button>
        </div>
      </div>
      <SearchBar value={searchValue} placeholder={searchPlaceholder} active={false} disabled={disabled} onChange={onSearchChange} onSearch={onSearch} />
    </>
  );
}

/** Home/DownScroll: 스크롤 내렸을 때 축소 형태 */
function VariantHomeDownScroll({ cartCount, disabled, onCart, onSearch, onMenu }: GNBProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 16px',
        backgroundColor: 'var(--color-gray-14)',
        height: 56,
      }}
    >
      <Logo11st />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={onSearch} disabled={disabled} style={iconBtnStyle(disabled)} aria-label="검색">
          <IconSearch />
        </button>
        <button onClick={onMenu} disabled={disabled} style={iconBtnStyle(disabled)} aria-label="메뉴">
          <IconCart />
          <Badge count={cartCount ?? 0} />
        </button>
        <button onClick={onCart} disabled={disabled} style={{ ...iconBtnStyle(disabled), position: 'relative' }} aria-label="장바구니">
          <IconCart />
          <Badge count={cartCount ?? 0} />
        </button>
      </div>
    </div>
  );
}

/** Home/Logoday: 상단 이벤트 로고 영역 + 내비 + 검색바 */
function VariantHomeLogoday({ cartCount, disabled, searchValue, searchPlaceholder, onCart, onSearch, onSearchChange }: GNBProps) {
  return (
    <>
      {/* 이벤트 로고 영역 */}
      <div
        style={{
          height: 26,
          backgroundColor: 'var(--color-gray-14)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo11st />
      </div>
      <VariantHomeNone
        cartCount={cartCount}
        disabled={disabled}
        searchValue={searchValue}
        searchPlaceholder={searchPlaceholder}
        onCart={onCart}
        onSearch={onSearch}
        onSearchChange={onSearchChange}
      />
    </>
  );
}

/** PDP / Sub / SRP 등 — Back + Title + 우측 아이콘 */
function VariantTitleBar({ title, cartCount, alarmCount, disabled, onBack, onCart, onSearch }: GNBProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 56,
        padding: '0 8px',
        backgroundColor: 'var(--color-gray-14)',
      }}
    >
      {/* 뒤로가기 */}
      <button onClick={onBack} disabled={disabled} style={iconBtnStyle(disabled)} aria-label="뒤로가기">
        <IconBack />
      </button>

      {/* 타이틀 */}
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 8px' }}>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-subtitle-4)',
            lineHeight: 'var(--line-height-subtitle-4)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-gray-02)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </p>
      </div>

      {/* 우측 아이콘 */}
      <RightIcons cartCount={cartCount} onCart={onCart} onSearch={onSearch} />
    </div>
  );
}

/** Search — 전체 검색창 모드 */
function VariantSearch({ searchValue, searchPlaceholder, disabled, onBack, onSearch, onSearchChange }: GNBProps) {
  const isTyping = !!searchValue;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 56,
        padding: '0 8px',
        backgroundColor: 'var(--color-gray-14)',
        gap: 4,
      }}
    >
      <button onClick={onBack} disabled={disabled} style={iconBtnStyle(disabled)} aria-label="뒤로가기">
        <IconBack />
      </button>
      <div style={{ flex: 1 }}>
        <SearchBar
          value={searchValue}
          placeholder={searchPlaceholder}
          active={isTyping}
          disabled={disabled}
          onChange={onSearchChange}
          onSearch={onSearch}
        />
      </div>
    </div>
  );
}

// ============================================================
// Helper
// ============================================================

function iconBtnStyle(disabled?: boolean): React.CSSProperties {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    flexShrink: 0,
  };
}

// ============================================================
// Main GNB Component
// ============================================================

/**
 * GNB (Global Navigation Bar)
 *
 * @example
 * // 홈 기본
 * <GNB type="Home" subType="None" cartCount={3} onCart={() => {}} />
 *
 * @example
 * // 서브 페이지 타이틀바
 * <GNB type="Sub" title="상품 상세" cartCount={1} onBack={() => router.back()} />
 *
 * @example
 * // 검색 모드
 * <GNB type="Search" subType="검색어 입력중" searchValue={query} onSearchChange={setQuery} />
 */
export function GNB({
  type = 'Home',
  subType = 'None',
  title,
  cartCount = 0,
  alarmCount = 0,
  showStatusBar = false,
  disabled = false,
  searchValue,
  searchPlaceholder,
  onBack,
  onCart,
  onSearch,
  onMenu,
  onSearchChange,
  className,
}: GNBProps) {
  const isSearch = type === 'Search' || type === 'VerticalSearch' || type === 'TabSearch';
  const isTitleBar = ['PDP', 'Sub', 'SRP', 'VerticalSub', 'Side', 'CartOrder', 'Popup', 'MwSub', 'Setting', 'Store'].includes(type);

  const renderContent = () => {
    // 검색 모드
    if (isSearch) {
      return (
        <VariantSearch
          searchValue={searchValue}
          searchPlaceholder={searchPlaceholder}
          disabled={disabled}
          onBack={onBack}
          onSearch={onSearch}
          onSearchChange={onSearchChange}
        />
      );
    }

    // 타이틀바 모드 (PDP, Sub, SRP 등)
    if (isTitleBar) {
      return (
        <VariantTitleBar
          title={title}
          cartCount={cartCount}
          alarmCount={alarmCount}
          disabled={disabled}
          onBack={onBack}
          onCart={onCart}
          onSearch={onSearch}
        />
      );
    }

    // 홈 베리언트
    if (type === 'Home') {
      if (subType === 'DownScroll') {
        return (
          <VariantHomeDownScroll
            cartCount={cartCount}
            disabled={disabled}
            onCart={onCart}
            onSearch={onSearch}
            onMenu={onMenu}
          />
        );
      }
      if (subType === 'Logoday') {
        return (
          <VariantHomeLogoday
            cartCount={cartCount}
            disabled={disabled}
            searchValue={searchValue}
            searchPlaceholder={searchPlaceholder}
            onCart={onCart}
            onSearch={onSearch}
            onSearchChange={onSearchChange}
          />
        );
      }
      // Home/None (default)
      return (
        <VariantHomeNone
          cartCount={cartCount}
          disabled={disabled}
          searchValue={searchValue}
          searchPlaceholder={searchPlaceholder}
          onCart={onCart}
          onSearch={onSearch}
          onSearchChange={onSearchChange}
        />
      );
    }

    return null;
  };

  return (
    <header
      className={className}
      style={{
        width: '100%',
        backgroundColor: 'var(--color-gray-14)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? 'none' : undefined,
      }}
      aria-label="글로벌 내비게이션 바"
    >
      {showStatusBar && <StatusBar />}
      {renderContent()}
    </header>
  );
}

export default GNB;
