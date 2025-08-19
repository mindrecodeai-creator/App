import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function PaywallScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Mind Recode™ Pro</ThemedText>
      <ThemedText>Unlock all rituals, downloads, and kids packs.</ThemedText>
      <ThemedText>Placeholder UI — wire RevenueCat later.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
});

