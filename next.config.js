/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
dotenv.config({ path: './.env.local' });

const nextConfig = {
  env: {
    SMTP_PASS: process.env.SMTP_PASS,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    CARDS_API_URL: process.env.CARDS_API_URL 
  },
};

module.exports = nextConfig;
