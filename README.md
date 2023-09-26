# vue-ts-base

A Vue 3 base for cloning to start a new website development. Vite + Vue 3 composition API is used.

## Table of Contents
* [Setup](#setup)
* [Feature included](#feature-included)
  - [Vue](#vue)
  - [Unplugin](#unplugin)
  - [CSS](#css)
  - [JavaScript / TypeScript](#javascript--typescript)
  - [Git](#git)
  - [Vite](#vite)
* [Multi-language Support with Vue-i18n](#multi-language-support-with-vue-i18n)
  - [Switch Language](#switch-language)
* [Project Setup](#project-setup)

## Setup
### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Feature included

### Vue
* [Vue router](https://router.vuejs.org/)
* [Pinia](https://pinia.vuejs.org/) (Global State Management)
* [Iconify](https://iconify.design/) (Icon Library)
* [VueUse](https://vueuse.org/) (Useful utility library)
* [vue-i18n](https://vue-i18n.intlify.dev/) (Multi-languages support)
* [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag/) [Optional] (Connect Google Analytics)

### Unplugin
* [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import), allow to use below keywords without importing:
  - Vue (`ref`, `reactive`, `computed` etc.)
  - Vue Router (`useRoute`, `useRouter` etc.)
  - Vue i18n ([Check the below for details](#multi-language-support-with-vue-i18n))
    - `usei18n()`
    - `$t`, `$d`, `$n`, `$local`
    - `_changeLang`
  - VueUse (Functions in `@vueuse/core`)
* [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components), Allow to use components without importing
  - All components under `/src/components`
  - [VueUse](https://vueuse.org/) (Both components and directives)
  - Types:
    - `vue-router`
    - `@iconify/vue`

### CSS
* [normalize.css](https://necolas.github.io/normalize.css/) (CSS Reset)
* [SASS](https://sass-lang.com/)

### JavaScript / TypeScript
* [ESLint](https://eslint.org/) with kind of strict rules, check out `.eslintrc/cjs`
* [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) (Provide hints on a11y things on the HTML code)

### Git
Eslint is set to be run before git commit with use of below:
* [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)
* [lint-staged](https://github.com/okonet/lint-staged)

### Vite
The below will be dropped upon production build:
- `debugger`
- `console.log`
- `console.debug` 

## Multi-language Support with Vue-i18n

`vue-i18n` is used for handling multi-language. The below functions are auto imported with the help of `unplugin-auto-import`, so that you can directly use them:
- [usei18n()](https://vue-i18n.intlify.dev/guide/advanced/composition.html#basic-usage)
- [$t](https://vue-i18n.intlify.dev/guide/advanced/composition.html#message-translation)
- [$d](https://vue-i18n.intlify.dev/guide/advanced/composition.html#datetime-formatting)
- [$n](https://vue-i18n.intlify.dev/guide/advanced/composition.html#number-formatting)
- `_changeLang`

### Switch Language
When you want to switch language, please use `_changeLang(targetLocale)`
```ts
function _changeLang(targetLocale:string) {
  i18n.global.locale.value = targetLocale;
  localStorage.site_lang = targetLocale;
  document.documentElement.setAttribute("lang", targetLocale);
}
```
This function helps change:
- The `locale` value in vue-i18n
- `site_lang` value in LocalStorage
- `lang` attribute of `<html>` tag

### Add More Language
With the help of vite's `import.meta.glob`, you just need to create new `<locale>.json` under `/src/i18n` and the file will be loaded automatically.

## Project Setup

PNPM with node 18.17.1 is used.

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
