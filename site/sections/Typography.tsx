import { useCallback, useState } from 'react';
import { Grid, Heading, NotePanel, SectionLabel, Stack, Table, Text } from '@/index';
import { Section, Specimen } from '../parts';

/* Each row measures the size it actually rendered at rather than printing a
 * figure typed in beside it: the scale is calc() off one base property, so
 * the px number only exists once the browser has resolved it. */
function useRenderedSize() {
  const [size, setSize] = useState('');
  const ref = useCallback((el: HTMLElement | null) => {
    if (el) setSize(`${+parseFloat(getComputedStyle(el).fontSize).toFixed(2)}px`);
  }, []);
  return [size, ref] as const;
}

interface Step {
  token: string;
  weight: 400 | 500 | 600;
  mono?: boolean;
  use: string;
  sample: string;
}

const STEPS: readonly Step[] = [
  { token: 'display', weight: 600, use: 'Page title · Heading level={1}', sample: 'Collective playground' },
  { token: 'title', weight: 600, use: 'Section title · level={2} · stat figures', sample: 'Split the data' },
  { token: 'heading', weight: 600, use: 'level={3}', sample: 'Communication topology' },
  { token: 'subheading', weight: 600, use: 'level={4} · run titles', sample: 'Ring AllReduce, 8 ranks' },
  { token: 'lead', weight: 400, use: 'Intro copy · level={5}', sample: 'See how data moves. Understand what makes it fast.' },
  { token: 'body', weight: 400, use: 'Prose, large controls', sample: 'Each rank keeps a full model and processes different samples.' },
  { token: 'small', weight: 400, use: 'Controls, nav, table cells', sample: 'Gradient all-reduce makes the replicas agree.' },
  { token: 'caption', weight: 400, mono: true, use: 'Hints, captions, units', sample: '2–16 GPUs · one rank each' },
  { token: 'micro', weight: 500, mono: true, use: 'Eyebrows, labels, tags', sample: 'REDUCE + REPLICATE' },
];

function TypeRow({ step }: { step: Step }) {
  const [size, ref] = useRenderedSize();
  const display = step.token === 'display' || step.token === 'title';
  return (
    <div className="site-type-row">
      <div className="site-type-key">
        <b>{step.token}</b>
        {size} · {step.weight}
        {step.mono ? ' · mono' : ''}
        <br />
        {step.use}
      </div>
      <div
        ref={ref}
        className="site-type-sample"
        style={{
          fontFamily: step.mono ? 'var(--restack-font-family-mono)' : undefined,
          fontSize: `var(--restack-font-size-${step.token})`,
          fontWeight: step.weight,
          letterSpacing: display
            ? 'var(--restack-letter-spacing-tight)'
            : step.token === 'micro'
              ? 'var(--restack-letter-spacing-caps)'
              : 'var(--restack-letter-spacing-normal)',
          lineHeight: step.weight === 600 ? 'var(--restack-line-height-tight)' : 'var(--restack-line-height-normal)',
        }}
      >
        {step.sample}
      </div>
    </div>
  );
}

const FIGURES = [
  { measure: 'Transfers this step', value: '0 parallel' },
  { measure: 'Payload / transfer', value: '4.00 MiB' },
  { measure: 'Model elapsed', value: '19.40 ms' },
  { measure: 'Bus bandwidth', value: '186.3 GB/s' },
];

export function TypographySection() {
  return (
    <Section
      id="type"
      num="02"
      eyebrow="Typography"
      title="Two faces, two jobs"
      desc="DM Sans sets the interface — headings, labels, prose, controls. IBM Plex Mono sets technical truth — figures, units, identifiers, commands, eyebrows. A number a reader might compare or copy is mono; prose never is. Headings stop at semibold."
    >
      <Stack gap="xl">
        <Grid columns={2} gap="md" responsive>
          <Specimen name="DM Sans" api="--restack-font-family-sans · variable 400–700">
            <div className="site-face">
              <div className="site-face__glyphs" style={{ fontWeight: 600 }}>
                Aa Gg 0123
              </div>
              <div className="site-face__weights">
                <span style={{ fontWeight: 400 }}>Regular</span>
                <span style={{ fontWeight: 500 }}>Medium</span>
                <span style={{ fontWeight: 600 }}>Semibold</span>
                <span style={{ fontWeight: 700 }}>Bold</span>
              </div>
              <Text size="caption" tone="muted">
                Shipped as one variable file, base64-inlined. Korean falls through to Pretendard or
                the platform&rsquo;s Korean sans, glyph by glyph.
              </Text>
            </div>
          </Specimen>
          <Specimen name="IBM Plex Mono" api="--restack-font-family-mono · 400 · 500">
            <div className="site-face">
              <div className="site-face__glyphs" style={{ fontFamily: 'var(--restack-font-family-mono)', fontWeight: 500 }}>
                ibv_reg_mr 0x1f
              </div>
              <div className="site-face__weights" style={{ fontFamily: 'var(--restack-font-family-mono)' }}>
                <span style={{ fontWeight: 400 }}>186.3 GB/s</span>
                <span style={{ fontWeight: 500 }}>rank 0</span>
              </div>
              <Text size="caption" tone="muted">
                <code>{'<Text mono>'}</code>, every <code>StatCard</code> figure, every numeric
                table column, every <code>Tag</code> and every eyebrow.
              </Text>
            </div>
          </Specimen>
        </Grid>

        <Specimen name="Scale" api="--restack-font-size-* · base 16px">
          <div>
            {STEPS.map((step) => (
              <TypeRow key={step.token} step={step} />
            ))}
          </div>
        </Specimen>

        <Grid columns={2} gap="md" responsive>
          <Specimen name="Inspector rows" api="<Table numeric /> — mono, tabular">
            <Table
              density="compact"
              columns={[
                { key: 'measure', header: 'Measure' },
                { key: 'value', header: 'Value', align: 'right', numeric: true },
              ]}
              rows={FIGURES}
              rowKey={(row) => row.measure}
            />
          </Specimen>
          <Specimen name="Heading & Text" api="<Heading level tone marker /> · <Text size tone mono />">
            <Stack gap="sm">
              <Heading level={3} marker>
                Step inspector
              </Heading>
              <Heading level={4} tone="accent" suffix="rank 0">
                AllGather
              </Heading>
              <Text size="small" tone="secondary">
                Input buffers are initialised. Press play or advance one step to follow the data.
              </Text>
              <Text size="caption" tone="muted" mono>
                8 / 8 partitions populated
              </Text>
            </Stack>
          </Specimen>
        </Grid>

        <Specimen name="한글 혼용" api="DM Sans → Pretendard → Apple SD Gothic Neo → Noto Sans KR">
          <Stack gap="sm">
            <Heading level={3}>Ring AllReduce는 랭크를 고리 순서로 연결합니다</Heading>
            <Text tone="secondary">
              각 rank는 전체 모델을 가지고 서로 다른 샘플을 처리합니다. 한 스텝에 <Text mono inline>19.40 ms</Text>,
              버스 대역폭은 <Text mono inline>186.3 GB/s</Text>입니다.
            </Text>
            <Text size="caption" tone="muted">
              DM Sans에는 한글이 없어서 글리프 단위로 다음 서체로 넘어갑니다. 라틴 문자와 숫자는 DM Sans와 IBM Plex
              Mono를 유지합니다. 시스템은 한글 서체를 싣지 않으므로, 한글이 주가 되는 화면이면 Pretendard를 직접
              로드하세요.
            </Text>
          </Stack>
        </Specimen>

        <NotePanel title="The scale is calc(), not rem.">
          Every step is a multiple of one <code>--restack-font-size-base</code>. A rem resolves
          against the document root, so a rem ramp can only be retuned by restyling{' '}
          <code>&lt;html&gt;</code>. Routing it through one property is what lets{' '}
          <code>{'<ThemeProvider density="compact">'}</code> give a console view the labs&rsquo;
          density — spacing runs off one unit the same way — while the docs around it stay at 16px.
        </NotePanel>
      </Stack>
    </Section>
  );
}
