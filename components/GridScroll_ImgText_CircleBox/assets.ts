/**
 * GridScroll_ImgText_CircleBox 에셋 정의
 *
 * Figma 출처: common/GridScroll_ImgText_CircleBox (node 11502:27436)
 * 실제 SVG/PNG 파일은 Figma MCP 로컬 서버(localhost:3845)에서 제공됩니다.
 * 프로덕션 배포 시 /public/icons/grid-scroll/ 로 복사하고 경로를 교체하세요.
 */

const BASE = 'http://localhost:3845/assets';

// ============================================================
// 브랜드 아이콘 에셋 (IOsGridScrollImgTextCircleBoxIconBrand)
// ============================================================
export const BRAND_ASSETS = {
  /** 슈팅배송 — 11st 그라디언트 배경 + 화살표 shape */
  shootingShape: `${BASE}/404e6bad09d121db181fa6feb7ac146780e4258b.svg`,

  /** 패션뷰티 — 검정 배경, 패션/뷰티 2개 아이콘 */
  fashionGroup:  `${BASE}/a5f60a0c9f077ac04683d7f360c210d504dd3ea9.svg`,
  beautyGroup:   `${BASE}/ed80c60688d7d9a0029eb73ca8b98a6a365c78a4.svg`,

  /** 리퍼블릭 — #5A73F6 배경, 상하 그룹 아이콘 */
  republicTop:   `${BASE}/4ca293e4e21a12128531d8764ef47dcba419d3a2.svg`,
  republicBot:   `${BASE}/a5f49c2013de170fe7c257cbde6e4f7ad01e0dfd.svg`,

  /** 우주패스 — #3617CE 배경, 올클 로고 */
  olklpassLogo:  `${BASE}/d61f5252cec46468f769486a2f4146c0b02ddb14.svg`,

  /** 우아럭스 — 비디오 루프 + 로고 */
  ooahLuxeLogo:  `${BASE}/461515c890e06e793eb027809081667ca9096cb8.svg`,

  /** 신선밥상 — #00B4A5 배경 아이콘 */
  freshtable:    `${BASE}/11f1483f6c4af6018d39a1042aac4cb9e6360b5d.svg`,
} as const;

// ============================================================
// 서비스 아이콘 에셋 (IOsGridScrollImgTextCircleBoxIconService)
// ============================================================
export const SERVICE_ASSETS = {
  /** 출석체크 */
  attendanceImg:    `${BASE}/ed4de352786fb3f4086e805483a0ced4d58d4953.png`,
  attendanceVector: `${BASE}/8c5d567b8bc4183f077d8ae84d1b78bacde163bd.svg`,

  /** 베스트랭킹 */
  bestImg:          `${BASE}/f2dd6cfab6ec26aee68660ee269f6abcfabbf9fe.png`,

  /** 메가데이 — 다크 그라디언트 */
  megaStar:         `${BASE}/a34c58cb6247b5c5054f5062033293e482b527bb.png`,
  megaLightImg:     `${BASE}/2622b1240bff7d9878bd079aa837d79f828b2712.png`,
  megaImage2:       `${BASE}/ed1fef50ea9cf6d8127ba4cef07695c881456895.png`,
  megaMask:         `${BASE}/eee077324a31cf4db8338aa2c3a0da7eb852013a.svg`,

  /** 쇼핑초월 — 라디얼 그라디언트 */
  shoppingImg:      `${BASE}/5669e6bb2393c4c36e721d48fd397bf5660d0d33.png`,
  shoppingBadge:    `${BASE}/b57d98ad2106352d1ed7375596ac2f9c833bfb37.png`,

  /** 케이크 */
  cakeImg:          `${BASE}/6065b10e7cf4bd2ba7634f1dd057f4443e6eab39.png`,

  /** 반려동물 */
  petImg:           `${BASE}/e05e1f83c1814d1bb459e44f3b6a45a36090b32d.png`,

  /** 쿠폰혜택 */
  couponGroup1:     `${BASE}/504985f165e644f616572af806aab40dea0680d4.svg`,
  couponGroup2:     `${BASE}/7b6d7b943a347fbc8018f9f724dea1df67779037.svg`,
  couponDot:        `${BASE}/b2b781891c845c5d353dd2ecf80e6ebfd1baf944.svg`,

  /** 뱃지 Dot (메가데이, 쇼핑초월에 사용) */
  dot:              `${BASE}/78cfabb536d738e40cb91f7eac5d8f395f1366d9.svg`,
} as const;
