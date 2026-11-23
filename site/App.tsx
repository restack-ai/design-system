import { useEffect, useState } from 'react';
import {
  BrandHeader,
  BrandLogo,
  Button,
  Card,
  CodeBlock,
  Icon,
  Surface,
  Container,
  Grid,
  Heading,
  IconButton,
  Link,
  NotePanel,
  SectionLabel,
  Select,
  Stack,
  Text,
} from '@/index';
import type { ThemeFace } from '@/index';
import { GithubIcon, Section } from './parts';
import { ColorSection } from './sections/Color';
import { TypographySection } from './sections/Typography';
import { SpaceShapeSection } from './sections/SpaceShape';
import { ComponentsSection } from './sections/Components';
import { CompositionSection } from './sections/Composition';

const REPO = 'https://github.com/restack-ai/design-system';
const BLOB = `${REPO}/blob/main`;
const THEME_KEY = 'restack-ds-theme';

const NAV = [
  ['#color', 'Colour'],
  ['#type', 'Type'],
  ['#space', 'Space'],
  ['#components', 'Components'],
  ['#composition', 'Composition'],
  ['#build', 'Build'],
] as const;

const FACTS = [
  { label: 'Components', figure: '49', unit: '', note: 'one entry, typed' },
  { label: 'Faces', figure: '2', unit: 'dark · light', note: 'data-restack-theme' },
  { label: 'Stylesheets', figure: '1', unit: '', note: 'fonts + logo inlined' },
  { label: 'Runtime deps', figure: '0', unit: '', note: 'react is a peer' },
] as const;

/* The face lives on <html>, so the page ground switches with the components.
 * index.html applies the stored choice before first paint; this keeps it. */
function useFace(): [ThemeFace, (face: ThemeFace) => void] {
  const [face, setFace] = useState<ThemeFace>(() =>
    document.documentElement.dataset.restackTheme === 'light' ? 'light' : 'dark',
  );
  useEffect(() => {
    document.documentElement.dataset.restackTheme = face;
    try {
      localStorage.setItem(THEME_KEY, face);
    } catch {
      /* storage can be unavailable; the face still applies for this visit */
    }
  }, [face]);
  return [face, setFace];
}

function Masthead({ face, onFace }: { face: ThemeFace; onFace: (face: ThemeFace) => void }) {
  return (
    <BrandHeader
      sticky
      logo={
        <a href="#top" aria-label="restack ai design system, back to top" style={{ display: 'flex' }}>
          <BrandLogo size="sm" />
        </a>
      }
      title={<span className="site-hide-sm">design system</span>}
      actions={
        <>
          <Select
            className="site-theme"
            size="sm"
            fullWidth={false}
            aria-label="Colour face"
            value={face}
            onChange={(e) => onFace(e.currentTarget.value as ThemeFace)}
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'light', label: 'Light' },
            ]}
          />
          <IconButton
            label="GitHub repository"
            variant="ghost"
            size="sm"
            icon={<GithubIcon />}
            onClick={() => window.open(REPO, '_blank', 'noopener')}
          />
        </>
      }
    >
      <div className="site-nav">
        {NAV.map(([href, label]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </div>
    </BrandHeader>
  );
}

/* A small fabric: seven node panels on thin links, the selected one in lime,
 * two links carrying traffic. Decorative — aria-hidden. */
const NODES: ReadonlyArray<{ x: number; y: number; w: number; sel?: boolean; bars: number }> = [
  { x: 210, y: 30, w: 62, bars: 3 },
  { x: 330, y: 62, w: 62, bars: 3 },
  { x: 404, y: 150, w: 62, bars: 3 },
  { x: 120, y: 132, w: 100, sel: true, bars: 5 },
  { x: 270, y: 214, w: 62, bars: 3 },
  { x: 384, y: 262, w: 62, bars: 3 },
  { x: 74, y: 268, w: 62, bars: 3 },
];
const LINKS: ReadonlyArray<[number, number, ('hot' | 'cool')?]> = [
  [0, 1],
  [1, 2],
  [3, 0, 'hot'],
  [3, 1],
  [3, 4, 'cool'],
  [4, 5],
  [4, 6],
  [3, 6],
  [2, 5],
];
const centre = (n: (typeof NODES)[number]) => ({ x: n.x + n.w / 2, y: n.y + 18 });

function Topology() {
  return (
    <svg viewBox="0 0 500 330" aria-hidden="true" focusable="false">
      {[60, 140, 220, 300].map((y) => (
        <path key={y} className="site-topo__grid" d={`M0 ${y}h${y % 120 === 60 ? 40 : 18}M482 ${y}h18`} />
      ))}
      {LINKS.map(([a, b, kind], i) => {
        const p = centre(NODES[a]);
        const q = centre(NODES[b]);
        return (
          <path
            key={i}
            className={kind ? `site-topo__link site-topo__link--${kind}` : 'site-topo__link'}
            d={`M${p.x} ${p.y}L${q.x} ${q.y}`}
          />
        );
      })}
      {NODES.map((n, i) => (
        <g key={i}>
          <rect
            className={n.sel ? 'site-topo__node site-topo__node--selected' : 'site-topo__node'}
            x={n.x}
            y={n.y}
            width={n.w}
            height="36"
            rx="6"
          />
          {Array.from({ length: n.bars }, (_, j) => (
            <rect
              key={j}
              className={
                n.sel
                  ? j % 2
                    ? 'site-topo__bar site-topo__bar--cyan'
                    : 'site-topo__bar site-topo__bar--lime'
                  : 'site-topo__bar'
              }
              x={n.x + 10 + j * ((n.w - 20) / n.bars)}
              y={n.y + 22}
              width={(n.w - 20) / n.bars - 4}
              height="4"
              rx="1"
            />
          ))}
          <circle
            className={n.sel ? 'site-topo__bar site-topo__bar--lime' : 'site-topo__bar'}
            cx={n.x + n.w - 10}
            cy={n.y + 10}
            r="2.5"
          />
        </g>
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <Surface tone="signature" padding="none" className="site-hero" id="top">
      <Container>
        <div className="site-hero__grid">
          <div className="site-hero__body">
            <Stack gap="lg">
              <SectionLabel face="mono">restack ai · design system</SectionLabel>
              <Heading level={1}>Quiet surfaces. One lime signal.</Heading>
              <Text size="lead" tone="secondary">
                The console language that nccl-lab, parallel-training-lab and rdma-fabric-lab
                already share — charcoal panels, hairline rules, DM Sans for the interface and IBM
                Plex Mono for technical truth — as a React component library, one stylesheet, and
                the tokens behind every number.
              </Text>
              <Stack direction="horizontal" gap="sm" wrap>
                <Button
                  size="lg"
                  iconRight={<Icon name="arrow-right" />}
                  onClick={() => document.querySelector('#color')?.scrollIntoView()}
                >
                  Explore the tokens
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => document.querySelector('#composition')?.scrollIntoView()}
                >
                  See a console
                </Button>
              </Stack>
            </Stack>
          </div>
          <div className="site-hero__art">
            <Topology />
          </div>
        </div>

        <div className="site-facts">
          {FACTS.map((fact) => (
            <div className="site-fact" key={fact.label}>
              <span className="site-fact__label">{fact.label}</span>
              <span className="site-fact__figure">
                {fact.figure} {fact.unit ? <small>{fact.unit}</small> : null}
              </span>
              <span className="site-fact__note">{fact.note}</span>
            </div>
          ))}
        </div>
      </Container>
    </Surface>
  );
}

function BuildSection() {
  return (
    <Section
      id="build"
      num="06"
      eyebrow="Build"
      title="Build with it"
      desc="The package is published to the GitHub Packages npm registry under @restack-ai. React 18 or newer is the only peer dependency, and nothing needs wrapping to be styled."
    >
      <Stack gap="xl">
        <Grid columns={2} gap="lg" responsive>
          <Stack gap="sm">
            <Text size="small" bold>
              Install
            </Text>
            <CodeBlock title=".npmrc + shell">
              <i># routes the scope, carries no secret</i>
              {'\n'}@restack-ai:registry=https://npm.pkg.github.com{'\n'}
              //npm.pkg.github.com/:_authToken=${'{'}GITHUB_TOKEN{'}'}
              {'\n\n'}
              <b>npm</b> install @restack-ai/design-system
            </CodeBlock>
            <Text size="caption" tone="muted">
              GitHub Packages authenticates every read — export a token with{' '}
              <code>read:packages</code>.
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text size="small" bold>
              Render something
            </Text>
            <CodeBlock title="App.tsx">
              <i>{"import '@restack-ai/design-system/styles.css';"}</i>
              {'\n'}
              {'import { Stack, Wordmark, Dot, Button }'}
              {'\n  '}
              {"from '@restack-ai/design-system';"}
              {'\n\n'}
              {'<Stack gap="md">'}
              {'\n  '}
              {'<Wordmark accent="Lab">NCCL</Wordmark>'}
              {'\n  '}
              {'<Dot live>Interactive simulation</Dot>'}
              {'\n  '}
              {'<Button>Play</Button>'}
              {'\n'}
              {'</Stack>'}
            </CodeBlock>
            <Text size="caption" tone="muted">
              Dark is the default face. Set <code>data-restack-theme=&quot;light&quot;</code> on{' '}
              <code>&lt;html&gt;</code>, or wrap a region in{' '}
              <code>&lt;ThemeProvider theme=&quot;light&quot;&gt;</code>.
            </Text>
          </Stack>
        </Grid>

        <Grid columns={3} gap="md" responsive>
          <Card title="DESIGN.md" subtitle="Why is it this lime, this dark, this quiet?">
            <Stack gap="sm">
              <Text size="small" tone="secondary">
                The design language with the reasoning behind every number, plus token frontmatter
                an agent can build from.
              </Text>
              <Link href={`${BLOB}/DESIGN.md`} external>
                Read DESIGN.md
              </Link>
            </Stack>
          </Card>
          <Card title="conventions.md" subtitle="How do I compose a real screen?">
            <Stack gap="sm">
              <Text size="small" tone="secondary">
                Which component owns which job, and the patterns that keep a console on-brand.
              </Text>
              <Link href={`${BLOB}/.design-sync/conventions.md`} external>
                Read the conventions
              </Link>
            </Stack>
          </Card>
          <Card title="README" subtitle="How do I install it and render something?">
            <Stack gap="sm">
              <Text size="small" tone="secondary">
                Install, usage, the component table, the token families and the rules that are
                easiest to get wrong.
              </Text>
              <Link href={`${BLOB}/README.md`} external>
                Read the README
              </Link>
            </Stack>
          </Card>
        </Grid>

        <NotePanel tone="neutral" title="Lime acts, indigo is atmosphere.">
          The banner&rsquo;s indigo is the signature colour: the hero above, the logo in the footer, an
          empty first run. Nothing indigo is ever clickable, selected or a status — that is lime&rsquo;s
          job, and keeping the two apart is what lets a reader trust either.
        </NotePanel>

        <NotePanel title="Two faces, one set of names.">
          Every semantic token is declared once per face. Dark lives on <code>:root</code>; light
          re-points the same names under <code>data-restack-theme=&quot;light&quot;</code>, so a
          component never knows which face it is in. The one split to remember is lime: on paper,{' '}
          <code>primary</code> stays the lime fill while <code>primary-strong</code> — anything
          that must be read — becomes a clear green.
        </NotePanel>
      </Stack>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Stack gap="lg">
          <BrandLogo size="sm" tone="signature" />
          <div className="site-footer__row">
            <Text size="caption" tone="muted">
              restack ai · themed after nccl-lab, parallel-training-lab and rdma-fabric-lab · DM Sans
              and IBM Plex Mono under SIL OFL 1.1
            </Text>
            <Link href={REPO} external tone="muted">
              restack-ai/design-system
            </Link>
          </div>
        </Stack>
      </Container>
    </footer>
  );
}

export function App() {
  const [face, setFace] = useFace();
  return (
    <>
      <Masthead face={face} onFace={setFace} />
      {/* Re-mounted on a face change: the colour specimens read resolved token
        * values back out of the stylesheet, and those change with the face. */}
      <main key={face}>
        <Hero />
        <ColorSection />
        <TypographySection />
        <SpaceShapeSection />
        <ComponentsSection />
        <CompositionSection />
        <BuildSection />
      </main>
      <Footer />
    </>
  );
}
