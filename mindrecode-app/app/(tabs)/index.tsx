import { Link } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Mind Recode™</ThemedText>
      <ThemedText>3–10 minute ritual resets: Calm, Sleep, Focus, Kids.</ThemedText>
      <Link href={{ pathname: '/player', params: { ritual: 'rapid-reset' } }} asChild>
        <Pressable style={styles.cta}><ThemedText type="defaultSemiBold">Start Rapid Reset</ThemedText></Pressable>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    justifyContent: 'center',
  },
  cta: {
    padding: 16,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  }
});
