import { Link } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Settings</ThemedText>
      <Link href="/paywall" asChild>
        <Pressable style={styles.row}><ThemedText>Upgrade to Pro</ThemedText></Pressable>
      </Link>
      <Link href="/redeem" asChild>
        <Pressable style={styles.row}><ThemedText>Redeem Code</ThemedText></Pressable>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  row: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  }
});

