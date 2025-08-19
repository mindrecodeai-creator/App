import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { rituals } from '@/app/data/rituals';

export default function LibraryScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Library</ThemedText>
      <FlatList
        data={rituals}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/player', params: { ritual: item.slug } }} asChild>
            <Pressable style={styles.card}>
              <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
              <ThemedText>{item.description}</ThemedText>
              <ThemedText style={styles.duration}>{item.recommendedDurations.map((d)=>`${Math.round(d/60)}m`).join(' / ')}</ThemedText>
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

