/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-phone-number-input', 'libphonenumber-js'],
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   transpilePackages: ['react-phone-number-input', 'libphonenumber-js'],
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         fs: false,
//         net: false,
//         tls: false,
//       };
//     }
//     return config;
//   },
// };

// module.exports = {
//   ...nextConfig,
//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },
// };
