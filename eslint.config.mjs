import nextConfig from 'eslint-config-next';
import tailwindConfig from 'eslint-plugin-tailwindcss';

const eslintConfig = [
  ...nextConfig,
  {
    plugins: {
      tailwindcss: tailwindConfig,
    },
    rules: {
      ...tailwindConfig.configs.recommended.rules,
    },
    settings: {
      tailwindcss: {
        config: {},
        callees: ["classnames", "clsx", "ctl"],
      },
    },
  },
];

export default eslintConfig;