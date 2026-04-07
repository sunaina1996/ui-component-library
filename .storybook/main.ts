import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/postcss";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: { name: "@storybook/react-vite", options: {} },
  docs: { autodocs: "tag" },
  viteFinal: (config) => {
    return {
      ...config,
      css: {
        ...config.css,
        postcss: {
          plugins: [tailwindcss()],
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        exclude: [
          ...(config.optimizeDeps?.exclude ?? []),
          "@tailwindcss/postcss",
        ],
      },
    };
  },
};

export default config;
