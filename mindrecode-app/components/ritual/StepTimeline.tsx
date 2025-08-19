import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import type { RitualStep } from '@/app/data/rituals';

type Props = { steps: RitualStep[]; currentIndex: number };

function StepTimelineComponent({ steps, currentIndex }: Props) {
  return (
    <View style={styles.container}>
      {steps.map((step, idx) => (
        <View key={idx} style={[styles.step, idx === currentIndex && styles.stepActive]}>
          <View style={[styles.dot, idx === currentIndex && styles.dotActive]} />
          <ThemedText>{step.title ?? step.kind}</ThemedText>
          <ThemedText style={styles.duration}>{Math.round(step.durationSec / 60)}m</ThemedText>
        </View>
      ))}
    </View>
  );
}

export const StepTimeline = memo(StepTimelineComponent);

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)'
  },
  stepActive: {
    borderColor: 'rgba(0,0,0,0.2)'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  dot: {},
  dotActive: {
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  duration: { opacity: 0.7 }
});

