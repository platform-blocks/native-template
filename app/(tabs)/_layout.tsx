import { Tabs } from 'expo-router';
import { Icon, useTheme } from '@platform-blocks/ui';

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary[6] ?? theme.text.primary,
        tabBarInactiveTintColor: theme.text.secondary,
        tabBarStyle: {
          backgroundColor: theme.backgrounds.surface,
          borderTopColor: theme.backgrounds.border,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color as string} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Icon name="settings" size={size} color={color as string} />,
        }}
      />
    </Tabs>
  );
}
