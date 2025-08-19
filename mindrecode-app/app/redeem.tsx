import { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function RedeemScreen() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Redeem Code</ThemedText>
      <TextInput
        value={code}
        onChangeText={setCode}
        placeholder="Enter code"
        style={styles.input}
        autoCapitalize="characters"
      />
      <Pressable
        style={styles.cta}
        onPress={() => setStatus('success')}
        disabled={!code || status === 'submitting'}
      >
        <ThemedText type="defaultSemiBold">Redeem</ThemedText>
      </Pressable>
      {status === 'success' && <ThemedText>Code accepted. Entitlement granted (placeholder).</ThemedText>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    padding: 12,
  },
  cta: {
    padding: 16,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  }
});

