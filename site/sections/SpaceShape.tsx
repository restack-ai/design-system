import { useCallback, useState } from 'react';
import { Grid, NotePanel, SectionLabel, Stack, Table, Text } from '@/index';
import { Section, Specimen } from '../parts';

function useRenderedWidth() {
  const [width, setWidth] = useState('');
  const ref = useCallback((el: HTMLElement | null) => {
    if (el) setWidth(`${Math.round(el.getBoundingClientRect().width)}px`);
  }, []);
  return [width, ref] as const;
}

const SPACE_STEPS = ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'];

function SpaceRow({ step }: { step: string }) {
  const [width, ref] = useRenderedWidth();
  return (
    <div className="site-scale-row">
      <span className="site-scale-row__token">space-{step}</span>
      <span className="site-scale-row__px">{width}</span>
      <div ref={ref} className="site-scale-row__bar" style={{ width: `var(--restack-space-${step})` }} />
    </div>
  );
}

const GAPS = [
  { name: 'none', token: 'space-0', px: '0' },
  { name: 'xs', token: 'space-1', px: '4' },
  { name: 'sm', token: 'space-2', px: '8' },
  { name: 'md (Stack)', token: 'space-4', px: '16' },
  { name: 'md (Grid)', token: 'space-3', px: '12' },
  { name: 'lg', token: 'space-6', px: '24' },
  { name: 'xl', token: 'space-10', px: '40' },
];

const RADII = [
  { token: 'xs', px: '2px', use: 'Timeline events, focus corners' },
  { token: 'sm', px: '3px', use: 'Cells, tags, badges' },
  { token: 'md', px: '5px', use: 'Controls — buttons, fields, tabs' },
  { token: 'lg', px: '7px', use: 'Panels, cards, tables' },
  { token: 'xl', px: '9px', use: 'Dialogs, app frames' },
  { token: 'pill', px: '999px', use: 'Dots, switches, progress' },
];

const ELEVATION = [
  { token: 'none', use: 'Every resting panel' },
  { token: 'sm', use: 'A knob, a chip lifting off its track' },
  { token: 'md', use: 'The sticky playback bar' },
  { token: 'lg', use: 'Dialogs, the topmost layer' },
];

const CONTAINERS = [
  { width: 'narrow', max: '48rem', use: 'Reading measure — docs' },
  { width: 'default', max: '75rem', use: 'The standard page' },
  { width: 'wide', max: '120rem', use: 'A full console workspace' },
  { width: 'full', max: 'none', use: 'Full-bleed bands' },
];

const TONES = [
  { token: 'canvas', note: 'the page' },
  { token: 'surface-sunken', note: 'inset' },
  { token: 'surface', note: 'panel' },
  { token: 'surface-raised', note: 'raised' },
  { token: 'surface-hover', note: 'hover' },
];

export function SpaceShapeSection() {
  return (
    <Section
      id="space"
      num="03"
      eyebrow="Space & shape"
      title="Tone, not shadow"
      desc="A 4px grid, compact rounded rectangles that step up with the size of the thing, and depth drawn with adjacent charcoal tones and one-pixel lines. Most containers stay flat; the sticky bar and the dialog are the only things that float."
    >
      <Stack gap="xl">
        <Stack gap="md">
          <SectionLabel meta="--restack-color-canvas → surface-hover">Depth by tone</SectionLabel>
          <div className="site-tones">
            {TONES.map((t) => (
              <div key={t.token} style={{ background: `var(--restack-color-${t.token})` }}>
                <Text size="caption" mono>
                  {t.token}
                </Text>
                <Text size="micro" tone="muted">
                  {t.note}
                </Text>
              </div>
            ))}
          </div>
        </Stack>

        <Grid columns={2} gap="lg" responsive>
          <Specimen name="Spacing scale" api="--restack-space-*">
            <Stack gap="none">
              {SPACE_STEPS.map((step) => (
                <SpaceRow key={step} step={step} />
              ))}
            </Stack>
          </Specimen>

          <Stack gap="lg">
            <Specimen name="Gap scale" api="<Stack gap /> · <Grid gap />">
              <Table
                density="compact"
                columns={[
                  { key: 'name', header: 'Prop value' },
                  { key: 'token', header: 'Token' },
                  { key: 'px', header: 'px', align: 'right', numeric: true, width: '4rem' },
                ]}
                rows={GAPS}
                rowKey={(row) => row.name}
              />
            </Specimen>

            <Specimen name="Container" api="<Container width />">
              <Table
                density="compact"
                columns={[
                  { key: 'width', header: 'Width' },
                  { key: 'max', header: 'Max', numeric: true },
                  { key: 'use', header: 'Use' },
                ]}
                rows={CONTAINERS}
                rowKey={(row) => row.width}
              />
            </Specimen>
          </Stack>
        </Grid>

        <Stack gap="md">
          <SectionLabel meta="--restack-radius-*">Shape</SectionLabel>
          <Specimen name="Radii" api="xs 2 · sm 3 · md 5 · lg 7 · xl 9 · pill">
            <div className="site-shape-grid">
              {RADII.map((radius) => (
                <Stack gap="xs" key={radius.token}>
                  <div className="site-shape" style={{ borderRadius: `var(--restack-radius-${radius.token})` }} />
                  <Text size="caption" mono>
                    radius-{radius.token} · {radius.px}
                  </Text>
                  <Text size="caption" tone="muted">
                    {radius.use}
                  </Text>
                </Stack>
              ))}
            </div>
          </Specimen>
          <NotePanel title="The radius follows the size of the thing.">
            A 2px timeline event, a 3px cell, a 5px control, a 7px panel, a 9px dialog — the labs
            step their corners up with their containers, so nothing small looks inflated and nothing
            large looks sharp. Rounding a card to 16px reads as a different, softer product.
          </NotePanel>
        </Stack>

        <Stack gap="md">
          <SectionLabel meta="--restack-shadow-* · face-dependent">Elevation</SectionLabel>
          <div className="site-shape-grid">
            {ELEVATION.map((level) => (
              <Stack gap="xs" key={level.token}>
                <div className="site-elevation" style={{ boxShadow: `var(--restack-shadow-${level.token})` }} />
                <Text size="caption" mono>
                  shadow-{level.token}
                </Text>
                <Text size="caption" tone="muted">
                  {level.use}
                </Text>
              </Stack>
            ))}
          </div>
          <NotePanel tone="neutral" title="Shadows live with the face.">
            A shadow that reads on charcoal is a smudge on paper, so the ramp is declared per face in{' '}
            <code>color.css</code> rather than once in <code>space.css</code>. Focus is not a glow
            at all: a 2px outline in the legible lime, held 2px off the control.
          </NotePanel>
        </Stack>
      </Stack>
    </Section>
  );
}
