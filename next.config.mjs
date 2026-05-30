import createMDX from "@next/mdx";
import path from "node:path";
import { fileURLToPath } from "node:url";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: dirname,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  poweredByHeader: false,
  reactStrictMode: true,
  typedRoutes: true,
};

export default withMDX(nextConfig);
