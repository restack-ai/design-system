import { Badge, Dot, Grid, NotePanel, SectionLabel, Stack, Text } from '@/index';
import { Section, Specimen } from '../parts';
import { useTokens } from '../tokens';

const ramp = (family: string, steps: readonly string[]) =>
  steps.map((step) => `--restack-color-${family}-${step}`);

const GRAY_DARK = ramp('gray', ['900', '850', '800', '750', '700', '650', '600', '550', '500', '450']);
const GRAY_LIGHT = ramp('gray', ['400', '350', '300', '250', '200', '175', '150', '125', '100', '075', '050', '025', '000']);
const LIME = ramp('lime', ['950', '925', '900', '850', '800', '700', '600', '500', '350', '300', '200', '100', '050']);
const INDIGO = ramp('indigo', ['900', '700', '500', '300', '050']);
const PASTELS: ReadonlyArray<{ family: string; steps: readonly string[]; job: string }> = [
  { family: 'cyan', steps: ['900', '700', '600', '300', '200', '050'], job: 'accent · info · gather & broadcast' },
  { family: 'amber', steps: ['900', '700', '600', '300', '050'], job: 'warning' },
  { family: 'orange', steps: ['900', '700', '600', '300', '200', '050'], job: 'data — gradients' },
  { family: 'red', steps: ['900', '700', '600', '300', '200', '050'], job: 'danger' },
  { family: 'purple', steps: ['900', '600', '300', '050'], job: 'data — optimizer state' },
];

const ROLES: ReadonlyArray<{ group: string; items: ReadonlyArray<[string, string]> }> = [
  {
    group: 'Brand',
    items: [
      ['primary', 'The lime fill — one per view'],
      ['primary-strong', 'Lime that must be read: links, focus, icons'],
      ['primary-surface', 'The selected fill'],
      ['primary-subtle', 'The selected edge'],
      ['on-primary', 'Ink on a lime fill'],
      ['accent-strong', 'Cyan — the second voice'],
      ['signature', 'Indigo — atmosphere, never action'],
      ['signature-strong', 'Indigo that must be read'],
    ],
  },
  {
    group: 'Surface',
    items: [
      ['canvas', 'The page — the ground every panel steps from'],
      ['surface-sunken', 'Sidebars, top bars, field wells'],
      ['surface', 'Panels and cards'],
      ['surface-raised', 'Nested panels, secondary buttons'],
      ['surface-hover', 'Pointer state'],
      ['surface-inverse', 'The opposite face'],
    ],
  },
  {
    group: 'Text',
    items: [
      ['text-strong', 'Headings, figures'],
      ['text', 'Body copy'],
      ['text-secondary', 'Supporting copy, descriptions'],
      ['text-muted', 'Labels, hints, captions'],
      ['text-subtle', 'Placeholders, separators'],
      ['text-link', 'Inline links'],
    ],
  },
  {
    group: 'Border',
    items: [
      ['border', 'Container chrome — panels, rules, tables'],
      ['border-subtle', 'The faintest hairline'],
      ['border-strong', 'The edge of an interactive control'],
      ['border-focus', 'The focus outline'],
    ],
  },
];

const STATUS = ['info', 'success', 'warning', 'danger'] as const;
const STATUS_TOKENS = STATUS.flatMap((s) => [
  `--restack-color-${s}`,
  `--restack-color-${s}-strong`,
  `--restack-color-${s}-surface`,
]);
const VIZ = [1, 2, 3, 4, 5, 6, 7].map((n) => `--restack-color-viz-${n}`);
const ROLE_TOKENS = ROLES.flatMap((r) => r.items.map(([name]) => `--restack-color-${name}`));
const PASTEL_TOKENS = PASTELS.flatMap((a) => ramp(a.family, a.steps));

const ALL = [...GRAY_DARK, ...GRAY_LIGHT, ...LIME, ...INDIGO, ...PASTEL_TOKENS, ...ROLE_TOKENS, ...STATUS_TOKENS, ...VIZ];

function Ramp({ tokens, values }: { tokens: readonly string[]; values: Record<string, string> }) {
  return (
    <div className="site-scroll-x">
      <div className="site-ramp">
        {tokens.map((token) => (
          <div className="site-ramp__step" key={token}>
            <div className="site-ramp__chip" style={{ background: `var(${token})` }} />
            <div className="site-ramp__meta">
              <div className="site-ramp__name">{token.replace('--restack-color-', '')}</div>
              <div className="site-ramp__hex">{values[token]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Role({ token, note, values }: { token: string; note: string; values: Record<string, string> }) {
  return (
    <div className="site-role__item">
      <div className="site-role__swatch" style={{ background: `var(${token})` }} />
      <div className="site-role__text">
        <div className="site-role__token">{token.replace('--restack-color-', '')}</div>
        <Text size="caption" tone="muted">
          {note}
        </Text>
        <Text size="micro" tone="muted" mono>
          {values[token]}
        </Text>
      </div>
    </div>
  );
}

export function ColorSection() {
  const values = useTokens(ALL);

  return (
    <Section
      id="color"
      num="01"
      eyebrow="Colour"
      title="Deep charcoal, one lime, a trace of indigo"
      desc="The neutrals carry a trace of the banner's indigo, so the page sits deep and the signature glow belongs to it. Lime marks interaction and readiness, cyan informs, the pastels say what kind of thing something is, and indigo is the brand's atmosphere. Switch the face in the masthead — the roles keep their names and change their values."
    >
      <Stack gap="xl">
        <Stack gap="md">
          <SectionLabel meta="--restack-color-gray-*">Charcoal ramp</SectionLabel>
          <Ramp tokens={GRAY_DARK} values={values} />
          <Ramp tokens={GRAY_LIGHT} values={values} />
          <Text size="small" tone="secondary">
            One hue — about 230°, the banner&rsquo;s — at very low chroma, so it reads as charcoal until
            it sits beside a true grey. The dark face is built from the <b>900–500</b> end: canvas,
            inset, panel, raised, hover, line and the control edge. The light face takes the{' '}
            <b>000–200</b> end.
          </Text>
        </Stack>

        <Stack gap="md">
          <SectionLabel meta="--restack-color-lime-*">Lime</SectionLabel>
          <Ramp tokens={LIME} values={values} />
          <Text size="small" tone="secondary">
            <b>lime-300</b> is the brand: every primary action, selection, focus outline and ready
            state resolves to it. <b>lime-900</b> and <b>lime-850</b> are the selected fill and edge
            on charcoal — tinted clearly lime, not grey-green; <b>lime-950</b> is the ink on a lime
            fill (10.63:1). <b>lime-600</b> is the clear green that can be text on paper (5.43:1).
          </Text>
        </Stack>

        <Stack gap="md">
          <SectionLabel meta="--restack-color-indigo-*">Indigo — the signature</SectionLabel>
          <Ramp tokens={INDIGO} values={values} />
          <Text size="small" tone="secondary">
            Sampled from the restack ai banner, where it is the glow behind the wordmark.{' '}
            <b>Lime acts; indigo is atmosphere</b> — a hero, a splash, an empty first run, the logo.
            Nothing indigo is ever clickable, selected or a status.
          </Text>
        </Stack>

        <Stack gap="md">
          <SectionLabel meta="dark-face 300 · paper-face 600/700 · grounds 900/050">Pastels</SectionLabel>
          <Stack gap="sm">
            {PASTELS.map((p) => (
              <Stack key={p.family} gap="xs">
                <Text size="caption" tone="muted" mono>
                  {p.family} — {p.job}
                </Text>
                <Ramp tokens={ramp(p.family, p.steps)} values={values} />
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack gap="md">
          <SectionLabel meta="resolved for the current face">Semantic roles</SectionLabel>
          <Grid columns={2} gap="md" responsive>
            {ROLES.map((role) => (
              <Specimen key={role.group} name={role.group}>
                <div className="site-role">
                  {role.items.map(([name, note]) => (
                    <Role key={name} token={`--restack-color-${name}`} note={note} values={values} />
                  ))}
                </div>
              </Specimen>
            ))}
          </Grid>
          <Grid columns={2} gap="lg" responsive>
            <NotePanel title="Lime is a fill first.">
              <code>primary</code> is the lime fill and <code>primary-strong</code> is lime that
              must be read. On charcoal they are the same hex. On paper the fill stays lime — dark
              ink on it is 10.63:1 — but lime as text or as an edge is 1.43:1, so{' '}
              <code>primary-strong</code> becomes a clear green on the same hue (5.43:1). Reach for the one whose job you
              are doing.
            </NotePanel>
            <NotePanel title="border is chrome; border-strong is a control.">
              <code>border</code> is the faint line (1.47:1) — panels, rules, table rows.
              The visible edge of an input, select, checkbox or secondary button carries a 3:1 floor
              under WCAG 1.4.11, so it always takes <code>border-strong</code>: 3.32:1 on a panel
              and 3.60:1 on the page.
            </NotePanel>
          </Grid>
        </Stack>

        <Stack gap="md">
          <SectionLabel meta="fill · strong · surface">Status</SectionLabel>
          <Specimen name="Status trio" api="--restack-color-{status}{,-strong,-surface}">
            <Stack gap="md">
              {STATUS.map((status) => (
                <div className="site-role__item" key={status}>
                  <div className="site-role__swatch" style={{ background: `var(--restack-color-${status})` }} />
                  <div className="site-role__swatch" style={{ background: `var(--restack-color-${status}-strong)` }} />
                  <div className="site-role__swatch" style={{ background: `var(--restack-color-${status}-surface)` }} />
                  <div className="site-role__text">
                    <div className="site-role__token">color-{status}</div>
                    <Text size="caption" tone="muted">
                      the fill · anything that must be legible · the tinted ground
                    </Text>
                  </div>
                </div>
              ))}
            </Stack>
          </Specimen>
          <div className="site-row">
            <Badge tone="info" dot>
              Info
            </Badge>
            <Badge tone="success" dot>
              Passed
            </Badge>
            <Badge tone="warning" dot>
              Degraded
            </Badge>
            <Badge tone="danger" dot>
              Failed
            </Badge>
            <Badge tone="brand" variant="solid">
              Selected
            </Badge>
            <Badge>Idle</Badge>
            <Dot tone="success">Lime means go — the label says which go</Dot>
          </div>
        </Stack>

        <Stack gap="md">
          <SectionLabel meta="--restack-color-viz-*">Data</SectionLabel>
          <Ramp tokens={VIZ} values={values} />
          <Text size="small" tone="secondary">
            Lime and cyan first — the two phase colours (reduce, gather) — then apricot, orchid,
            straw, rose and sage. Orchid sits well clear of the signature indigo, so a data series
            is never mistaken for a brand surface. Take them in
            sequence, and always label a series: a hue alone never explains what it is.
          </Text>
        </Stack>
      </Stack>
    </Section>
  );
}
