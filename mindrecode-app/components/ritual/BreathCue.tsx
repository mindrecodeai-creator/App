import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

type Props = { pattern?: string; inhale?: number; hold?: number; exhale?: number; hold2?: number; bpm?: number };

function BreathCueComponent(props: Props) {
  const { pattern, inhale, hold, exhale, hold2, bpm } = props;
  return (
    <View style={styles.container}>
      <ThemedText type="defaultSemiBold">Breath</ThemedText>
      <ThemedText>{pattern ? `Pattern: ${pattern}` : bpm ? `Resonance: ${bpm} bpm` : 'Gentle breathing'}</ThemedText>
      {inhale && exhale ? (
        <ThemedText>{`Inhale ${inhale}s • Hold ${hold ?? 0}s • Exhale ${exhale}s • Hold ${hold2 ?? 0}s`}</ThemedText>
      ) : null}
    </View>
  );
}

export const BreathCue = memo(BreathCueComponent);

const styles = StyleSheet.create({
  container: { gap: 6, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(0,0,0,0.1)' },
});

