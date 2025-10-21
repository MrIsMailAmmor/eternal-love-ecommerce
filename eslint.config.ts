
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import nuxtPlugin from "@nuxt/eslint-plugin";
import vueEslintParser from "vue-eslint-parser";

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    plugins: {
      nuxt: nuxtPlugin,
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  }
);
