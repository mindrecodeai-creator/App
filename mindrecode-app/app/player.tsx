import { useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const SAMPLE_RITUALS: Record<string, { title: string; steps: Array<{ kind: string; durationSec: number }> }> = {
  'rapid-reset': { title: 'Rapid Reset: Vagus', steps: [ { kind: 'breath', durationSec: 60 }, { kind: 'audio', durationSec: 120 }, { kind: 'affirmation', durationSec: 30 } ] },
  'deep-sleep': { title: 'Deep Sleep', steps: [ { kind: 'audio', durationSec: 600 } ] },
  'focus-gamma': { title: 'Focus Gamma', steps: [ { kind: 'breath', durationSec: 30 }, { kind: 'audio', durationSec: 270 } ] },
  'kids-detox': { title: 'Screen Detox (Kids)', steps: [ { kind: 'visual', durationSec: 60 }, { kind: 'breath', durationSec: 120 } ] },
};

export default function PlayerScreen() {
  const params = useLocalSearchParams<{ ritual?: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const ritual = useMemo(() => SAMPLE_RITUALS[params.ritual ?? 'rapid-reset'], [params.ritual]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{ritual?.title ?? 'Ritual Player'}</ThemedText>
      <ThemedText>{ritual ? `${ritual.steps.length} steps` : 'Sample player view'}</ThemedText>
      <Pressable style={styles.cta} onPress={() => setIsPlaying((v) => !v)}>
        <ThemedText type="defaultSemiBold">{isPlaying ? 'Pause' : 'Play'}</ThemedText>
      </Pressable>
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
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  }
});

