import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider as NavigationThemeProvider,
} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  PlocksProvider,
  useTheme,
  useThemeMode,
  type ColorSchemeMode,
} from '@plocks/ui';

const THEME_STORAGE_KEY = 'plocks-theme-mode';

/**
 * Restores the saved light/dark/auto choice on launch and persists changes.
 * AsyncStorage is asynchronous, so the app starts in 'auto' (following the OS
 * theme) and applies a saved explicit choice as soon as the first read lands.
 */
function ThemeModePersistence() {
  const { mode, setMode } = useThemeMode();
  const hydratedRef = useRef(false);
  const latestModeRef = useRef(mode);

  useEffect(() => {
    latestModeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    let cancelled = false;

    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then(stored => {
        if (cancelled) return;
        hydratedRef.current = true;
        const saved =
          stored === 'light' || stored === 'dark' || stored === 'auto'
            ? (stored as ColorSchemeMode)
            : null;
        if (saved && saved !== latestModeRef.current) {
          setMode(saved);
        }
      })
      .catch(() => {
        if (!cancelled) hydratedRef.current = true;
      });

    return () => {
      cancelled = true;
    };
  }, [setMode]);

  useEffect(() => {
    if (!hydratedRef.current) return;
    AsyncStorage.setItem(THEME_STORAGE_KEY, mode).catch(() => {
      // Ignore write errors — worst case the choice doesn't stick.
    });
  }, [mode]);

  return null;
}

/**
 * Feeds the plocks theme into the router's navigation theming so
 * navigator-owned surfaces (scene background, headers, tab bar defaults)
 * follow the same light/dark scheme as the components.
 */
function NavigationThemeBridge({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const { actualColorScheme } = useThemeMode();

  const navigationTheme = useMemo(() => {
    const base = actualColorScheme === 'dark' ? DarkTheme : DefaultTheme;
    return {
      ...base,
      colors: {
        ...base.colors,
        primary: theme.colors.primary[6] ?? base.colors.primary,
        background: theme.backgrounds.base,
        card: theme.backgrounds.surface,
        text: theme.text.primary,
        border: theme.backgrounds.border,
      },
    };
  }, [theme, actualColorScheme]);

  return <NavigationThemeProvider value={navigationTheme}>{children}</NavigationThemeProvider>;
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PlocksProvider themeModeConfig={{ initialMode: 'auto' }}>
        <ThemeModePersistence />
        <StatusBar style="auto" />
        <NavigationThemeBridge>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </NavigationThemeBridge>
      </PlocksProvider>
    </GestureHandlerRootView>
  );
}
