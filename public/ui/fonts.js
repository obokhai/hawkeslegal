    import localFont from 'next/font/local';

    export const SofiaPro = localFont({
      src: '/fonts/sofia-pro/"Sofia Pro Regular AZ.otf"', // Adjust path as needed
      weight: '400',
      style: 'normal',
      display: 'swap', // Recommended for font loading
    });

    export const Europa = localFont({
      src: '../../public/fonts/MyCustomFont-Bold.woff2', // Adjust path as needed
      weight: '700',
      style: 'normal',
      display: 'swap',
    });