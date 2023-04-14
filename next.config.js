/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs')

const nextConfig = {
  reactStrictMode: true,
  sentry: {
    hideSourceMaps: true,
    widenClientFileUpload: true,
  },
}

module.exports = withSentryConfig(nextConfig, {
  silent: true,
})
