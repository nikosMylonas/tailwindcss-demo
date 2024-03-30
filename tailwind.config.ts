import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontSize: {
                xs: '12px',
                sm: '15px',
                base: '18px',
            },
            colors: {
                vuejs: '#49e659',
                seaGreen: '#2e8b57',
                lightGreen: '#90ee90',
                bgSecondary: '#483d8b',
                menuItemsHover: '#242d52',
                menuBgSecondary: '#ff4500', //'#f6866a',
                menuHoverSecondary: '#f6866a', //'#fdece7',
                textSecondary: '#475569',
            },
        },
    },
    plugins: [],
};
export default config;
