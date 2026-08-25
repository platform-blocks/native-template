import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Card, Chip, Column, Flex, Text, Title } from '@platform-blocks/ui';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={{ padding: 20, paddingTop: insets.top + 20, gap: 16 }}>
      <Column gap="sm">
        <Title order={1}>Hello, Platform Blocks 👋</Title>
        <Text colorVariant="secondary">
          This screen lives in app/(tabs)/index.tsx. Edit it to start building — the provider,
          navigation, dark mode, and testing are already wired up.
        </Text>
      </Column>

      <Card variant="elevated" p="lg">
        <Column gap="md">
          <Title order={3}>What&apos;s inside</Title>
          <Flex direction="row" gap="xs" wrap="wrap">
            <Chip size="sm" variant="surface">Expo Router</Chip>
            <Chip size="sm" variant="surface">Tabs</Chip>
            <Chip size="sm" variant="surface">Dark mode</Chip>
            <Chip size="sm" variant="surface">Jest</Chip>
            <Chip size="sm" variant="surface">ESLint</Chip>
            <Chip size="sm" variant="surface">TypeScript</Chip>
          </Flex>
          <Text colorVariant="secondary">
            Every Platform Blocks component, hook, and theme token is ready to use. Try the
            Settings tab to switch between light, dark, and auto themes — the choice persists
            across launches.
          </Text>
          <Button
            title="Browse the components"
            variant="filled"
            onPress={() => {
              console.log('https://platform-blocks.com/components');
            }}
          />
        </Column>
      </Card>
    </ScrollView>
  );
}
