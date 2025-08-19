import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function DownloadsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Downloads</ThemedText>
      <ThemedText>Manage offline rituals and audio files.</ThemedText>
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

