import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = { progress: number };

function ProgressBarComponent({ progress }: Props) {
  const clamped = Math.max(0, Math.min(1, progress));
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${clamped * 100}%` }]} />
    </View>
  );
}

export const ProgressBar = memo(ProgressBarComponent);

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    borderRadius: 999,
    overflow: 'hidden',
  },
  fill: {
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
});

