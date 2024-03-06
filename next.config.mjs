// @ts-check
import path from 'path';
const __dirname = path.resolve();
 
export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }
  return nextConfig
}