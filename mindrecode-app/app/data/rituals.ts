export type RitualStep = {
  kind: 'breath' | 'audio' | 'affirmation' | 'visual';
  durationSec: number;
  title?: string;
  params?: Record<string, unknown>;
};

export type Ritual = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  level: 'kids' | 'beginner' | 'intermediate' | 'advanced';
  steps: RitualStep[];
  recommendedDurations: number[];
  version: number;
  requiresEntitlement?: string;
};

export const rituals: Ritual[] = [
  {
    id: 'rapid-reset-vagus-01',
    slug: 'rapid-reset',
    title: 'Rapid Reset: Vagus',
    description: '3–7 minute parasympathetic reset using resonance breathing + gentle mantra.',
    tags: ['reset', 'anxiety', 'vagus', 'kids-ok'],
    level: 'beginner',
    steps: [
      { kind: 'breath', durationSec: 60, title: 'Resonance Breath', params: { bpm: 6 } },
      { kind: 'audio', durationSec: 120, title: 'Calm Soundscape', params: { trackId: 'bg-forest-432hz' } },
      { kind: 'affirmation', durationSec: 30, title: 'Affirm', params: { text: 'I am safe. I am here.' } },
    ],
    recommendedDurations: [180, 420],
    version: 1,
    requiresEntitlement: undefined,
  },
  {
    id: 'deep-sleep-01',
    slug: 'deep-sleep',
    title: 'Deep Sleep',
    description: 'Slow wave wind-down with soft cues.',
    tags: ['sleep'],
    level: 'beginner',
    steps: [
      { kind: 'audio', durationSec: 600, title: 'Sleep Tones', params: { trackId: 'sleep-tones' } },
    ],
    recommendedDurations: [600],
    version: 1,
  },
  {
    id: 'focus-gamma-01',
    slug: 'focus-gamma',
    title: 'Focus Gamma',
    description: 'Flow + clarity booster.',
    tags: ['focus'],
    level: 'intermediate',
    steps: [
      { kind: 'breath', durationSec: 30, title: 'Priming Breath', params: { pattern: 'box', inhale: 4, hold: 4, exhale: 4, hold2: 4 } },
      { kind: 'audio', durationSec: 270, title: 'Gamma Flow', params: { trackId: 'gamma-focus' } },
    ],
    recommendedDurations: [300],
    version: 1,
  },
  {
    id: 'kids-detox-01',
    slug: 'kids-detox',
    title: 'Screen Detox (Kids)',
    description: 'Eyes + breath reset.',
    tags: ['kids'],
    level: 'kids',
    steps: [
      { kind: 'visual', durationSec: 60, title: 'Eye Spiral' },
      { kind: 'breath', durationSec: 120, title: 'Nose Breath' },
    ],
    recommendedDurations: [180],
    version: 1,
  },
];

export function getRitualBySlug(slug?: string) {
  if (!slug) return undefined;
  return rituals.find((r) => r.slug === slug);
}

