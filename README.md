# native-template

iOS-and-Android-only [Expo](https://expo.dev) starter for [Platform Blocks](https://platform-blocks.com) — no web configuration, for teams shipping mobile apps exclusively. Expo Router tabs, a persisted light/dark/auto theme switcher, Jest, and ESLint.

## Use this template

Click **Use this template** on GitHub to create your own repository from it, or scaffold directly:

```bash
npx create-expo-app@latest my-app --template https://github.com/platform-blocks/native-template
```

## Get started

```bash
npm install
npx expo start
```

Press `i` for iOS simulator or `a` for Android emulator.

## What's inside

- [`@platform-blocks/ui`](https://www.npmjs.com/package/@platform-blocks/ui) with all required peer dependencies installed
- **Expo Router** file-based navigation with a two-tab layout ([`app/(tabs)`](<./app/(tabs)>))
- **Persisted dark mode** — a light/dark/auto switcher on the Settings tab, saved with AsyncStorage and restored on launch
- **Jest** via `jest-expo` with an example component test in [`__tests__/`](./__tests__)
- **ESLint** (`eslint-config-expo`) and **TypeScript** in strict mode
- **EAS build profiles** stubbed in [`eas.json`](./eas.json)

## Scripts

| Script | What it does |
| --- | --- |
| `npm start` | Start the Expo dev server |
| `npm test` | Run the Jest test suite |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

## Learn more

- [Getting started](https://platform-blocks.com/getting-started) — installation, provider, first component
- [Components](https://platform-blocks.com/components) — every component with live demos
- [expo-template](https://github.com/platform-blocks/expo-template) — the same starter with web support included

## License

MIT
