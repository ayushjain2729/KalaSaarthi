module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep wisdom, trust-building
        primary: {
          50: "#EEF2FF", // indigo-50
          100: "#E0E7FF", // indigo-100
          500: "#6366F1", // indigo-500
          600: "#4F46E5", // indigo-600
          700: "#4338CA", // indigo-700
          900: "#312E81", // indigo-900
          DEFAULT: "#4F46E5" // indigo-600
        },
        // Secondary Colors - Growth prosperity
        secondary: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          DEFAULT: "#10B981" // emerald-500
        },
        // Accent Colors - Cultural warmth
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          DEFAULT: "#F59E0B" // amber-500
        },
        // Background Colors
        background: "#FEFEFE", // neutral-50 - Clean canvas
        surface: {
          DEFAULT: "#F8FAFC", // slate-50 - Subtle elevation
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0" // slate-200
        },
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800 - Extended reading clarity
          secondary: "#6B7280", // gray-500 - Information hierarchy
          muted: "#9CA3AF" // gray-400
        },
        // Status Colors
        success: "#059669", // emerald-600 - Achievement recognition
        warning: "#D97706", // amber-600 - Helpful alerts
        error: "#DC2626", // red-600 - Supportive correction
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200 - Warm grays
          light: "#F3F4F6" // gray-100
        }
      },
      fontFamily: {
        // Headlines - Modern clarity across scripts
        headlines: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        // Body - Exceptional mobile readability
        body: ['Source Sans Pro', 'sans-serif'],
        // Accents - Elegant serif for cultural content
        accents: ['Crimson Text', 'serif'],
        serif: ['Crimson Text', 'serif']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }]
      },
      boxShadow: {
        'warm': '0 4px 12px rgba(251, 146, 60, 0.1)',
        'cultural': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'artisan': '0 8px 25px rgba(251, 146, 60, 0.15)'
      },
      borderRadius: {
        'cultural': '0.75rem',
        'heritage': '1rem'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'celebration': 'celebration 600ms ease-out',
        'gentle-bounce': 'gentleBounce 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        celebration: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        gentleBounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' }
        }
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms'
      },
      transitionTimingFunction: {
        'cultural': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'celebration': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-cultural': {
          transition: 'all 300ms ease-out'
        },
        '.transition-celebration': {
          transition: 'all 600ms ease-out'
        },
        '.text-balance': {
          'text-wrap': 'balance'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}