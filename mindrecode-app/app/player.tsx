import { useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getRitualBySlug } from '@/app/data/rituals';
import { StepTimeline } from '@/components/ritual/StepTimeline';
import { ProgressBar } from '@/components/ritual/ProgressBar';
import { PlayerControls } from '@/components/ritual/PlayerControls';
import { BreathCue } from '@/components/ritual/BreathCue';

export default function PlayerScreen() {
  const params = useLocalSearchParams<{ ritual?: string }>();
  const ritual = useMemo(() => getRitualBySlug(params.ritual ?? 'rapid-reset'), [params.ritual]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!ritual) {
    return (
      <ThemedView style={styles.container}> 
        <ThemedText>Ritual not found.</ThemedText>
      </ThemedView>
    );
  }

  const currentStep = ritual.steps[currentIndex];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{ritual.title}</ThemedText>
      <ThemedText>{ritual.description}</ThemedText>
      <ProgressBar progress={(currentIndex + 1) / ritual.steps.length} />

      <View style={styles.section}>
        <StepTimeline steps={ritual.steps} currentIndex={currentIndex} />
      </View>

      <View style={styles.section}>
        {currentStep?.kind === 'breath' && (
          <BreathCue {...(currentStep.params as any)} />
        )}
        {currentStep?.kind === 'audio' && (
          <ThemedText>Audio: {(currentStep.params as any)?.trackId ?? 'TBD'}</ThemedText>
        )}
        {currentStep?.kind === 'affirmation' && (
          <ThemedText>Affirm: {(currentStep.params as any)?.text ?? 'I am safe. I am here.'}</ThemedText>
        )}
        {currentStep?.kind === 'visual' && (
          <ThemedText>Visual cue placeholder</ThemedText>
        )}
      </View>

      <PlayerControls
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying((v) => !v)}
        onPrev={() => setCurrentIndex((i) => Math.max(0, i - 1))}
        onNext={() => setCurrentIndex((i) => Math.min(ritual.steps.length - 1, i + 1))}
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
  section: {
    gap: 12,
  }
});

