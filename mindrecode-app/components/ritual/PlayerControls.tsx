import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

type Props = {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function PlayerControlsComponent({ isPlaying, onTogglePlay, onPrev, onNext }: Props) {
  return (
    <View style={styles.row}>
      <Pressable style={styles.btn} onPress={onPrev}><ThemedText>Prev</ThemedText></Pressable>
      <Pressable style={[styles.btn, styles.btnPrimary]} onPress={onTogglePlay}>
        <ThemedText type="defaultSemiBold">{isPlaying ? 'Pause' : 'Play'}</ThemedText>
      </Pressable>
      <Pressable style={styles.btn} onPress={onNext}><ThemedText>Next</ThemedText></Pressable>
    </View>
  );
}

export const PlayerControls = memo(PlayerControlsComponent);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  btn: { flex: 1, alignItems: 'center', padding: 14, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(0,0,0,0.1)' },
  btnPrimary: { borderColor: 'rgba(0,0,0,0.3)' },
});

