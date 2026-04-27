/**
 * Tailwind CSS Configuration
 * All values reference CSS custom properties defined in tokens/theme.css.
 * No hardcoded hex values — every token maps to a CSS variable.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './app/**/*.{html,js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {

      /* -----------------------------------------------------------------------
         COLORS
         ----------------------------------------------------------------------- */
      colors: {
        /* Primary */
        primary: {
          red:     'var(--color-primary-red)',
          amazon:  'var(--color-primary-amazon-bluegreen)',
          tBlue:   'var(--color-primary-t-blue)',
          ooah:    'var(--color-primary-ooah-blue)',
          mint:    'var(--color-primary-freshtable-mint)',
          purple:  'var(--color-primary-beautyclub-purple)',
          pink:    'var(--color-primary-familyplus-pink)',
          orange:  'var(--color-primary-martplus-orange)',
        },

        /* Brand */
        brand: {
          refurbly: 'var(--color-brand-refurbly-blue)',
        },

        /* Secondary */
        secondary: {
          blue:   'var(--color-secondary-blue)',
          yellow: 'var(--color-secondary-yellow)',
          green:  'var(--color-secondary-green)',
        },

        /* Grayscale — g01(black) ~ g14(white) */
        gray: {
          '01': 'var(--color-gray-01)',
          '02': 'var(--color-gray-02)',
          '03': 'var(--color-gray-03)',
          '04': 'var(--color-gray-04)',
          '05': 'var(--color-gray-05)',
          '06': 'var(--color-gray-06)',
          '07': 'var(--color-gray-07)',
          '08': 'var(--color-gray-08)',
          '09': 'var(--color-gray-09)',
          '10': 'var(--color-gray-10)',
          '11': 'var(--color-gray-11)',
          '12': 'var(--color-gray-12)',
          '13': 'var(--color-gray-13)',
          '14': 'var(--color-gray-14)',
        },

        /* Dimmed / Overlay */
        dimmed: {
          img: 'var(--color-dimmed-img)',
          all: 'var(--color-dimmed-all)',
        },
      },

      /* -----------------------------------------------------------------------
         FONT FAMILY
         ----------------------------------------------------------------------- */
      fontFamily: {
        pretendard: 'var(--font-family-pretendard)',
        roboto:     'var(--font-family-roboto)',
        notoSansKr: 'var(--font-family-noto-sans-kr)',
        iosDefault: 'var(--font-family-ios-default)',
        sfPro:      'var(--font-family-sf-pro)',
        gothic11:   'var(--font-family-11gothic)',
        inter:      'var(--font-family-inter)',
        outfit:     'var(--font-family-outfit)',
      },

      /* -----------------------------------------------------------------------
         FONT WEIGHT
         ----------------------------------------------------------------------- */
      fontWeight: {
        light:   'var(--font-weight-light)',
        regular: 'var(--font-weight-regular)',
        medium:  'var(--font-weight-medium)',
        bold:    'var(--font-weight-bold)',
      },

      /* -----------------------------------------------------------------------
         FONT SIZE  (Common / Pretendard scale)
         ----------------------------------------------------------------------- */
      fontSize: {
        /* Display */
        'ds-title-1': ['var(--font-size-ds-title-1)', { lineHeight: 'var(--line-height-ds-title-1)' }],

        /* Headline */
        'headline-1': ['var(--font-size-headline-1)', { lineHeight: 'var(--line-height-headline-1)' }],
        'headline-2': ['var(--font-size-headline-2)', { lineHeight: 'var(--line-height-headline-2)' }],
        'headline-3': ['var(--font-size-headline-3)', { lineHeight: 'var(--line-height-headline-3)' }],
        'headline-4': ['var(--font-size-headline-4)', { lineHeight: 'var(--line-height-headline-4)' }],
        'headline-5': ['var(--font-size-headline-5)', { lineHeight: 'var(--line-height-headline-5)' }],
        'headline-6': ['var(--font-size-headline-6)', { lineHeight: 'var(--line-height-headline-6)' }],
        'headline-7': ['var(--font-size-headline-7)', { lineHeight: 'var(--line-height-headline-7)' }],
        'headline-8': ['var(--font-size-headline-8)', { lineHeight: 'var(--line-height-headline-8)' }],
        'headline-9': ['var(--font-size-headline-9)', { lineHeight: 'var(--line-height-headline-9)' }],

        /* Title */
        'title-1': ['var(--font-size-title-1)', { lineHeight: 'var(--line-height-title-1)' }],
        'title-2': ['var(--font-size-title-2)', { lineHeight: 'var(--line-height-title-2)' }],
        'title-3': ['var(--font-size-title-3)', { lineHeight: 'var(--line-height-title-3)' }],
        'title-4': ['var(--font-size-title-4)', { lineHeight: 'var(--line-height-title-4)' }],

        /* Subtitle */
        'subtitle-1':         ['var(--font-size-subtitle-1)', { lineHeight: 'var(--line-height-subtitle-1)' }],
        'subtitle-1-relaxed': ['var(--font-size-subtitle-1)', { lineHeight: 'var(--line-height-subtitle-1-relaxed)' }],
        'subtitle-2':         ['var(--font-size-subtitle-2)', { lineHeight: 'var(--line-height-subtitle-2)' }],
        'subtitle-2-relaxed': ['var(--font-size-subtitle-2)', { lineHeight: 'var(--line-height-subtitle-2-relaxed)' }],
        'subtitle-3':         ['var(--font-size-subtitle-3)', { lineHeight: 'var(--line-height-subtitle-3)' }],
        'subtitle-3-relaxed': ['var(--font-size-subtitle-3)', { lineHeight: 'var(--line-height-subtitle-3-relaxed)' }],
        'subtitle-4':         ['var(--font-size-subtitle-4)', { lineHeight: 'var(--line-height-subtitle-4)' }],
        'subtitle-4-relaxed': ['var(--font-size-subtitle-4)', { lineHeight: 'var(--line-height-subtitle-4-relaxed)' }],
        'subtitle-5':         ['var(--font-size-subtitle-5)', { lineHeight: 'var(--line-height-subtitle-5)' }],
        'subtitle-6':         ['var(--font-size-subtitle-6)', { lineHeight: 'var(--line-height-subtitle-6)' }],

        /* Body */
        'body-1':         ['var(--font-size-body-1)', { lineHeight: 'var(--line-height-body-1)' }],
        'body-1-relaxed': ['var(--font-size-body-1)', { lineHeight: 'var(--line-height-body-1-relaxed)' }],
        'body-2':         ['var(--font-size-body-2)', { lineHeight: 'var(--line-height-body-2)' }],
        'body-2-relaxed': ['var(--font-size-body-2)', { lineHeight: 'var(--line-height-body-2-relaxed)' }],
        'body-3':         ['var(--font-size-body-3)', { lineHeight: 'var(--line-height-body-3)' }],
        'body-3-relaxed': ['var(--font-size-body-3)', { lineHeight: 'var(--line-height-body-3-relaxed)' }],
        'body-4':         ['var(--font-size-body-4)', { lineHeight: 'var(--line-height-body-4)' }],
        'body-4-relaxed': ['var(--font-size-body-4)', { lineHeight: 'var(--line-height-body-4-relaxed)' }],

        /* Caption */
        'caption-1':         ['var(--font-size-caption-1)', { lineHeight: 'var(--line-height-caption-1)' }],
        'caption-1-relaxed': ['var(--font-size-caption-1)', { lineHeight: 'var(--line-height-caption-1-relaxed)' }],
        'caption-2':         ['var(--font-size-caption-2)', { lineHeight: 'var(--line-height-caption-2)' }],
        'caption-2-relaxed': ['var(--font-size-caption-2)', { lineHeight: 'var(--line-height-caption-2-relaxed)' }],
        'caption-3':         ['var(--font-size-caption-3)', { lineHeight: 'var(--line-height-caption-3)' }],
        'caption-3-relaxed': ['var(--font-size-caption-3)', { lineHeight: 'var(--line-height-caption-3-relaxed)' }],
        'caption-4':         ['var(--font-size-caption-4)', { lineHeight: 'var(--line-height-caption-4)' }],
        'caption-4-relaxed': ['var(--font-size-caption-4)', { lineHeight: 'var(--line-height-caption-4-relaxed)' }],
        'caption-5':         ['var(--font-size-caption-5)', { lineHeight: 'var(--line-height-caption-5)' }],
        'caption-5-relaxed': ['var(--font-size-caption-5)', { lineHeight: 'var(--line-height-caption-5-relaxed)' }],
        'caption-5-compact': ['var(--font-size-caption-5)', { lineHeight: 'var(--line-height-caption-5-compact)' }],
        'caption-6':         ['var(--font-size-caption-6)', { lineHeight: 'var(--line-height-caption-6)' }],
        'caption-6-relaxed': ['var(--font-size-caption-6)', { lineHeight: 'var(--line-height-caption-6-relaxed)' }],
        'caption-6-compact': ['var(--font-size-caption-6)', { lineHeight: 'var(--line-height-caption-6-compact)' }],
        'caption-7':         ['var(--font-size-caption-7)', { lineHeight: 'var(--line-height-caption-7)' }],
        'caption-8':         ['var(--font-size-caption-8)', { lineHeight: 'var(--line-height-caption-8)' }],

        /* Android */
        'and-headline-0': ['var(--font-size-and-headline-0)', { lineHeight: '1' }],
        'and-headline-1': ['var(--font-size-and-headline-1)', { lineHeight: '1' }],
        'and-headline-2': ['var(--font-size-and-headline-2)', { lineHeight: '1' }],
        'and-headline-3': ['var(--font-size-and-headline-3)', { lineHeight: '1' }],
        'and-title':      ['var(--font-size-and-title-bold)',  { lineHeight: '1' }],
        'and-subtitle-1': ['var(--font-size-and-subtitle-1)', { lineHeight: '1' }],
        'and-subtitle-2': ['var(--font-size-and-subtitle-2)', { lineHeight: '1' }],
        'and-body-1':     ['var(--font-size-and-body-1)',     { lineHeight: '1' }],
        'and-body-2':     ['var(--font-size-and-body-2)',     { lineHeight: '1' }],
        'and-caption-1':  ['var(--font-size-and-caption-1)',  { lineHeight: '1' }],
        'and-caption-2':  ['var(--font-size-and-caption-2)',  { lineHeight: '1' }],

        /* iOS */
        'ios-headline-0':   ['var(--font-size-ios-headline-0)',    { lineHeight: '1' }],
        'ios-headline-1':   ['var(--font-size-ios-headline-1)',    { lineHeight: '1' }],
        'ios-headline-2':   ['var(--font-size-ios-headline-2)',    { lineHeight: '1' }],
        'ios-headline-3':   ['var(--font-size-ios-headline-3)',    { lineHeight: '1' }],
        'ios-title':        ['var(--font-size-ios-title-bold)',    { lineHeight: '1' }],
        'ios-subtitle-1':   ['var(--font-size-ios-subtitle-1)',    { lineHeight: '1' }],
        'ios-subtitle-2':   ['var(--font-size-ios-subtitle-2)',    { lineHeight: '1' }],
        'ios-body-1':       ['var(--font-size-ios-body-1)',        { lineHeight: '1' }],
        'ios-body-2':       ['var(--font-size-ios-body-2)',        { lineHeight: '1' }],
        'ios-caption-1':    ['var(--font-size-ios-caption-1)',     { lineHeight: '1' }],
        'ios-caption-2':    ['var(--font-size-ios-caption-2)',     { lineHeight: '1' }],
      },
    },
  },

  plugins: [],
};
