import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type RitualItem = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  duration: string;
};

const SAMPLE_RITUALS: RitualItem[] = [
  { id: 'rapid-reset', title: 'Rapid Reset', subtitle: 'Vagus nerve resonance', slug: 'rapid-reset', duration: '3–7 min' },
  { id: 'deep-sleep', title: 'Deep Sleep', subtitle: 'Slow waves + breath', slug: 'deep-sleep', duration: '10 min' },
  { id: 'focus-gamma', title: 'Focus Gamma', subtitle: 'Flow + clarity', slug: 'focus-gamma', duration: '5 min' },
  { id: 'kids-detox', title: 'Screen Detox (Kids)', subtitle: 'Eyes + breath reset', slug: 'kids-detox', duration: '4 min' },
];

export default function LibraryScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Library</ThemedText>
      <FlatList
        data={SAMPLE_RITUALS}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/player', params: { ritual: item.slug } }} asChild>
            <Pressable style={styles.card}>
              <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
              <ThemedText>{item.subtitle}</ThemedText>
              <ThemedText style={styles.duration}>{item.duration}</ThemedText>
            </Pressable>
          </Link>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  separator: {
    height: 8,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  duration: {
    marginTop: 4,
    opacity: 0.7,
  },
});

