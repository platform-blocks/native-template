import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Card, Column, SegmentedControl, Text, Title, useThemeMode } from '@platform-blocks/ui';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const { mode, setMode } = useThemeMode();

  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingTop: insets.top + 20, gap: 16 }}>
      <Title order={1}>Settings</Title>

      <Card variant="elevated" p="lg">
        <Column gap="md">
          <Title order={3}>Appearance</Title>
          <Text colorVariant="secondary">
            Auto follows the OS setting. Your choice is saved and applied before the app renders
            on the next launch.
          </Text>
          <SegmentedControl
            value={mode}
            onChange={value => setMode(value as typeof mode)}
            data={[
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'auto', label: 'Auto' },
            ]}
          />
        </Column>
      </Card>
    </ScrollView>
  );
}
