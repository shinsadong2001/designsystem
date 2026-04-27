/**
 * Design System Tokens
 * Source: Figma variables — Color (24333:735) / Typography (24333:742)
 *
 * Raw token values. For CSS usage, import theme.css instead.
 * For Tailwind, these are referenced via CSS custom properties in tailwind.config.js.
 */

const theme = {

  /* ===========================================================================
     COLOR
     =========================================================================== */
  color: {
    primary: {
      red:              { value: '#FF0038', var: 'var(--color-primary-red)' },
      amazonBluegreen:  { value: '#49A3C7', var: 'var(--color-primary-amazon-bluegreen)' },
      tBlue:            { value: '#3617CE', var: 'var(--color-primary-t-blue)' },
      ooahBlue:         { value: '#0F0FD9', var: 'var(--color-primary-ooah-blue)' },
      freshtableMint:   { value: '#00B4A5', var: 'var(--color-primary-freshtable-mint)' },
      beautyclubPurple: { value: '#8800DC', var: 'var(--color-primary-beautyclub-purple)' },
      familyplusPink:   { value: '#FF65AE', var: 'var(--color-primary-familyplus-pink)' },
      martplusOrange:   { value: '#FF7700', var: 'var(--color-primary-martplus-orange)' },
    },
    brand: {
      refurblyBlue: { value: '#5274FF', var: 'var(--color-brand-refurbly-blue)' },
    },
    secondary: {
      blue:   { value: '#0B83E6', var: 'var(--color-secondary-blue)' },
      yellow: { value: '#FFA700', var: 'var(--color-secondary-yellow)' },
      green:  { value: '#249356', var: 'var(--color-secondary-green)' },
    },
    gray: {
      '01': { value: '#000000', var: 'var(--color-gray-01)' },
      '02': { value: '#111111', var: 'var(--color-gray-02)' },
      '03': { value: '#333333', var: 'var(--color-gray-03)' },
      '04': { value: '#666666', var: 'var(--color-gray-04)' },
      '05': { value: '#777777', var: 'var(--color-gray-05)' },
      '06': { value: '#949494', var: 'var(--color-gray-06)' },
      '07': { value: '#999999', var: 'var(--color-gray-07)' },
      '08': { value: '#BBBBBB', var: 'var(--color-gray-08)' },
      '09': { value: '#CCCCCC', var: 'var(--color-gray-09)' },
      '10': { value: '#DDDDDD', var: 'var(--color-gray-10)' },
      '11': { value: '#EEEEEE', var: 'var(--color-gray-11)' },
      '12': { value: '#F4F4F4', var: 'var(--color-gray-12)' },
      '13': { value: '#FAFAFA', var: 'var(--color-gray-13)' },
      '14': { value: '#FFFFFF', var: 'var(--color-gray-14)' },
    },
    dimmed: {
      img: { value: '#434A79', var: 'var(--color-dimmed-img)' },
      all: { value: '#000000', var: 'var(--color-dimmed-all)' },
    },
  },

  /* ===========================================================================
     FONT FAMILY
     =========================================================================== */
  fontFamily: {
    pretendard:  { value: '"Pretendard", sans-serif',           var: 'var(--font-family-pretendard)' },
    roboto:      { value: '"Roboto", sans-serif',               var: 'var(--font-family-roboto)' },
    notoSansKr:  { value: '"Noto Sans CJK KR", sans-serif',    var: 'var(--font-family-noto-sans-kr)' },
    iosDefault:  { value: '"Apple SD Gothic Neo", sans-serif',  var: 'var(--font-family-ios-default)' },
    sfPro:       { value: '"SF Pro Display", sans-serif',       var: 'var(--font-family-sf-pro)' },
    gothic11:    { value: '"11Street Gothic-Kor OTF", sans-serif', var: 'var(--font-family-11gothic)' },
    inter:       { value: '"Inter", sans-serif',                var: 'var(--font-family-inter)' },
    outfit:      { value: '"Outfit", sans-serif',               var: 'var(--font-family-outfit)' },
  },

  /* ===========================================================================
     FONT WEIGHT
     =========================================================================== */
  fontWeight: {
    light:   { value: 300, var: 'var(--font-weight-light)' },
    regular: { value: 400, var: 'var(--font-weight-regular)' },
    medium:  { value: 500, var: 'var(--font-weight-medium)' },
    bold:    { value: 700, var: 'var(--font-weight-bold)' },
  },

  /* ===========================================================================
     TYPOGRAPHY — Common (Pretendard)
     =========================================================================== */
  typography: {
    common: {
      dsTitle1: {
        fontFamily:  '"Pretendard", sans-serif',
        fontSize:    48,
        fontWeight:  700,
        lineHeight:  56,
        letterSpacing: 0,
      },

      /* --- Headline --- */
      headline1: { fontFamily: '"Pretendard", sans-serif', fontSize: 32, fontWeight: 700, lineHeight: 38,  letterSpacing: 0 },
      headline2: { fontFamily: '"Pretendard", sans-serif', fontSize: 28, fontWeight: 700, lineHeight: 33,  letterSpacing: 0 },
      headline3: { fontFamily: '"Pretendard", sans-serif', fontSize: 27, fontWeight: 700, lineHeight: 32,  letterSpacing: 0 },
      headline4: { fontFamily: '"Pretendard", sans-serif', fontSize: 26, fontWeight: 700, lineHeight: 31,  letterSpacing: 0 },
      headline5: { fontFamily: '"Pretendard", sans-serif', fontSize: 25, fontWeight: 700, lineHeight: 30,  letterSpacing: 0 },
      headline6: { fontFamily: '"Pretendard", sans-serif', fontSize: 24, fontWeight: 700, lineHeight: 29,  letterSpacing: 0 },
      headline7: { fontFamily: '"Pretendard", sans-serif', fontSize: 23, fontWeight: 700, lineHeight: 27,  letterSpacing: 0 },
      headline8: { fontFamily: '"Pretendard", sans-serif', fontSize: 22, fontWeight: 700, lineHeight: 27,  letterSpacing: 0 },
      headline9: { fontFamily: '"Pretendard", sans-serif', fontSize: 21, fontWeight: 700, lineHeight: 25,  letterSpacing: 0 },

      /* --- Title --- */
      title1: { fontFamily: '"Pretendard", sans-serif', fontSize: 20, fontWeight: 400, lineHeight: 24, letterSpacing: 0 },
      title2: { fontFamily: '"Pretendard", sans-serif', fontSize: 20, fontWeight: 700, lineHeight: 24, letterSpacing: 0 },
      title3: { fontFamily: '"Pretendard", sans-serif', fontSize: 19, fontWeight: 400, lineHeight: 24, letterSpacing: 0 },
      title4: { fontFamily: '"Pretendard", sans-serif', fontSize: 19, fontWeight: 700, lineHeight: 24, letterSpacing: 0 },

      /* --- Subtitle --- */
      subtitle1:        { fontFamily: '"Pretendard", sans-serif', fontSize: 18, fontWeight: 400, lineHeight: 21, letterSpacing: 0 },
      subtitle1Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 18, fontWeight: 400, lineHeight: 24, letterSpacing: 0 },
      subtitle2:        { fontFamily: '"Pretendard", sans-serif', fontSize: 18, fontWeight: 700, lineHeight: 21, letterSpacing: 0 },
      subtitle2Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 18, fontWeight: 700, lineHeight: 24, letterSpacing: 0 },
      subtitle3:        { fontFamily: '"Pretendard", sans-serif', fontSize: 17, fontWeight: 400, lineHeight: 20, letterSpacing: 0 },
      subtitle3Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 17, fontWeight: 400, lineHeight: 22, letterSpacing: 0 },
      subtitle4:        { fontFamily: '"Pretendard", sans-serif', fontSize: 17, fontWeight: 700, lineHeight: 20, letterSpacing: 0 },
      subtitle4Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 17, fontWeight: 700, lineHeight: 22, letterSpacing: 0 },
      subtitle5:        { fontFamily: '"Pretendard", sans-serif', fontSize: 16, fontWeight: 400, lineHeight: 20, letterSpacing: 0 },
      subtitle6:        { fontFamily: '"Pretendard", sans-serif', fontSize: 16, fontWeight: 700, lineHeight: 20, letterSpacing: 0 },

      /* --- Body --- */
      body1:        { fontFamily: '"Pretendard", sans-serif', fontSize: 15, fontWeight: 400, lineHeight: 18, letterSpacing: 0 },
      body1Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0 },
      body2:        { fontFamily: '"Pretendard", sans-serif', fontSize: 15, fontWeight: 700, lineHeight: 18, letterSpacing: 0 },
      body2Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 15, fontWeight: 700, lineHeight: 20, letterSpacing: 0 },
      body3:        { fontFamily: '"Pretendard", sans-serif', fontSize: 14, fontWeight: 400, lineHeight: 18, letterSpacing: 0 },
      body3Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 14, fontWeight: 400, lineHeight: 20, letterSpacing: 0 },
      body4:        { fontFamily: '"Pretendard", sans-serif', fontSize: 14, fontWeight: 700, lineHeight: 18, letterSpacing: 0 },
      body4Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 14, fontWeight: 700, lineHeight: 20, letterSpacing: 0 },

      /* --- Caption --- */
      caption1:        { fontFamily: '"Pretendard", sans-serif', fontSize: 13, fontWeight: 400, lineHeight: 16, letterSpacing: 0 },
      caption1Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 13, fontWeight: 400, lineHeight: 18, letterSpacing: 0 },
      caption2:        { fontFamily: '"Pretendard", sans-serif', fontSize: 13, fontWeight: 700, lineHeight: 16, letterSpacing: 0 },
      caption2Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 13, fontWeight: 700, lineHeight: 18, letterSpacing: 0 },
      caption3:        { fontFamily: '"Pretendard", sans-serif', fontSize: 12, fontWeight: 400, lineHeight: 14, letterSpacing: 0 },
      caption3Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0 },
      caption4:        { fontFamily: '"Pretendard", sans-serif', fontSize: 12, fontWeight: 700, lineHeight: 14, letterSpacing: 0 },
      caption4Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 12, fontWeight: 700, lineHeight: 16, letterSpacing: 0 },
      caption5:        { fontFamily: '"Pretendard", sans-serif', fontSize: 11, fontWeight: 400, lineHeight: 13, letterSpacing: 0 },
      caption5Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 11, fontWeight: 400, lineHeight: 16, letterSpacing: 0 },
      caption5Compact: { fontFamily: '"Pretendard", sans-serif', fontSize: 11, fontWeight: 400, lineHeight: 12, letterSpacing: 0 },
      caption6:        { fontFamily: '"Pretendard", sans-serif', fontSize: 11, fontWeight: 700, lineHeight: 13, letterSpacing: 0 },
      caption6Relaxed: { fontFamily: '"Pretendard", sans-serif', fontSize: 11, fontWeight: 700, lineHeight: 16, letterSpacing: 0 },
      caption6Compact: { fontFamily: '"Pretendard", sans-serif', fontSize: 11, fontWeight: 700, lineHeight: 12, letterSpacing: 0 },
      caption7:        { fontFamily: '"Pretendard", sans-serif', fontSize: 10, fontWeight: 500, lineHeight: 12, letterSpacing: 0 },
      caption8:        { fontFamily: '"Pretendard", sans-serif', fontSize: 10, fontWeight: 700, lineHeight: 12, letterSpacing: 0 },
    },

    /* -------------------------------------------------------------------------
       TYPOGRAPHY — Android (Roboto / Noto Sans CJK KR)
       ------------------------------------------------------------------------- */
    android: {
      headline0:    { fontFamily: '"Roboto", sans-serif',           fontSize: 28, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      headline1:    { fontFamily: '"Roboto", sans-serif',           fontSize: 24, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline1Kor: { fontFamily: '"Noto Sans CJK KR", sans-serif', fontSize: 24, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline2:    { fontFamily: '"Roboto", sans-serif',           fontSize: 22, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline2Kor: { fontFamily: '"Noto Sans CJK KR", sans-serif', fontSize: 22, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline3:    { fontFamily: '"Roboto", sans-serif',           fontSize: 20, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline3Kor: { fontFamily: '"Noto Sans CJK KR", sans-serif', fontSize: 20, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      titleBold:    { fontFamily: '"Roboto", sans-serif',           fontSize: 18, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      titleBoldKor: { fontFamily: '"Noto Sans CJK KR", sans-serif', fontSize: 18, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      titleRegular: { fontFamily: '"Roboto", sans-serif',           fontSize: 18, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      subtitle1:    { fontFamily: '"Roboto", sans-serif',           fontSize: 16, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      subtitle2:    { fontFamily: '"Roboto", sans-serif',           fontSize: 15, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      body1:        { fontFamily: '"Roboto", sans-serif',           fontSize: 14, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      body2:        { fontFamily: '"Roboto", sans-serif',           fontSize: 13, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      caption1:     { fontFamily: '"Roboto", sans-serif',           fontSize: 12, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      caption1Kor:  { fontFamily: '"Noto Sans CJK KR", sans-serif', fontSize: 12, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      caption2:     { fontFamily: '"Roboto", sans-serif',           fontSize: 11, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
    },

    /* -------------------------------------------------------------------------
       TYPOGRAPHY — iOS (SF Pro Display / Apple SD Gothic Neo)
       ------------------------------------------------------------------------- */
    ios: {
      headline0Kor: { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 29, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      headline1:    { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 25, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline1Kor: { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 25, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline2:    { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 23, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline3:    { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 21, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      headline3Kor: { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 21, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      titleBold:    { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 19, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      titleBoldKor: { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 19, fontWeight: 700, lineHeight: '100%', letterSpacing: 0.02 },
      titleRegular:    { fontFamily: '"SF Pro Display", sans-serif',   fontSize: 19, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      titleRegularKor: { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 19, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      subtitle1:    { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 17, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      subtitle1Kor: { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 17, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      subtitle2:    { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 16, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      subtitle2Kor: { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 16, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      body1:        { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 15, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      body1Kor:     { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 15, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      body2:        { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 14, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      body2Kor:     { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      caption1:     { fontFamily: '"SF Pro Display", sans-serif',      fontSize: 13, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      caption1Kor:  { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 13, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
      caption2Kor:  { fontFamily: '"Apple SD Gothic Neo", sans-serif', fontSize: 12, fontWeight: 400, lineHeight: '100%', letterSpacing: 0.02 },
    },
  },
};

module.exports = theme;
