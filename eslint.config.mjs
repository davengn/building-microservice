import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "build/**",
      "coverage/**",
      "dist/**",
      "next-env.d.ts",
      "node_modules/**",
      "output/**",
      "playwright-report/**",
      "public/generated/**",
      "public/pagefind/**",
      "references/**",
      "test-results/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
