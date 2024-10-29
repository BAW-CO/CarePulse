import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
},
eslint: {
  ignoreDuringBuilds: true,
},
  transpilePackages: ['react-phone-number-input', 'libphonenumber-js'],
};

export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

org: "student-nut",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,


widenClientFileUpload: true,

// Automatically annotate React components to show their full name in breadcrumbs and session replay
reactComponentAnnotation: {
enabled: true,
},

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

automaticVercelMonitors: true,
});

