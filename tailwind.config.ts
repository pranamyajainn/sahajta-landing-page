import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			'bg-cream': '#F5F0E8',
    			'bg-cream-dark': '#EDE7D9',
    			'bg-white': '#FDFCFA',
    			'bg-green-tint': '#EBF2EE',
    			'green-primary': '#1A4D3A',
    			'green-mid': '#2D6E54',
    			'green-light': '#4A8C6F',
    			gold: '#C9A044',
    			'gold-dark': '#A67F2E',
    			'gold-hover': '#B8902F',
    			'gold-tint': '#F5EDD6',
    			'text-dark': '#0F2D22',
    			'text-body': '#2A3D35',
    			'text-muted': '#6B7E76',
    			'text-micro': '#9AA89F',
    			border: 'hsl(var(--border))',
    			'border-strong': '#C4BDB0',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			serif: [
    				'var(--font-cormorant)',
    				'Georgia',
    				'serif'
    			],
    			sans: [
    				'var(--font-inter)',
    				'system-ui',
    				'sans-serif'
    			]
    		},
    		fontSize: {
    			'6xl': [
    				'3.75rem',
    				{
    					lineHeight: '1.05',
    					letterSpacing: '-0.03em'
    				}
    			],
    			'4xl': [
    				'2.25rem',
    				{
    					lineHeight: '1.1',
    					letterSpacing: '-0.02em'
    				}
    			],
    			'2xl': [
    				'1.5rem',
    				{
    					lineHeight: '1.1',
    					letterSpacing: '-0.015em'
    				}
    			]
    		},
    		letterSpacing: {
    			hero: '-0.03em',
    			section: '-0.02em',
    			label: '0.14em'
    		},
    		lineHeight: {
    			editorial: '1.05',
    			tight: '1.1',
    			body: '1.7'
    		},
    		borderRadius: {
    			card: '16px',
    			icon: '10px',
    			button: '6px',
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		maxWidth: {
    			content: '1100px',
    			hero: '700px',
    			sub: '560px'
    		},
    		boxShadow: {
    			card: '0 8px 32px rgba(15,45,34,0.07)',
    			'card-gold': 'inset 0 2px 0 0 #C9A044, 0 12px 40px rgba(15,45,34,0.10)',
    			cta: '0 2px 8px rgba(201,160,68,0.30)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
