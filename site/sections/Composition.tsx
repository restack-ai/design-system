import { useState } from 'react';
import {
  Badge,
  BrandHeader,
  Breadcrumb,
  Button,
  Card,
  DescriptionList,
  Divider,
  Dot,
  Field,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  Kbd,
  Link,
  NavGroup,
  NavItem,
  ProgressBar,
  Select,
  Sidebar,
  Slider,
  Stack,
  StatCard,
  Tabs,
  Text,
  ThemeProvider,
  Tooltip,
  Wordmark,
} from '@/index';
import type { IconName } from '@/index';
import { Section } from '../parts';

const NAV_TOP: ReadonlyArray<{ id: string; label: string; icon: IconName }> = [
  { id: 'sim', label: 'Simulator', icon: 'activity' },
  { id: 'compare', label: 'Compare runs', icon: 'sliders-horizontal' },
  { id: 'model', label: 'Model & assumptions', icon: 'book-open' },
];

const SCENARIOS = [
  { id: 'prefill', label: 'Prefill', sub: 'Long prompts, one pass' },
  { id: 'decode', label: 'Decode', sub: 'One token at a time' },
  { id: 'batch', label: 'Continuous batch', sub: 'Join between steps' },
  { id: 'spec', label: 'Speculative', sub: 'Draft, then verify' },
] as const;

/* Lanes of the request timeline: [start %, width %, kind, label]. */
const LANES: ReadonlyArray<{ name: string; events: ReadonlyArray<[number, number, 'compute' | 'comm' | 'wait', string]> }> = [
  { name: 'gpu 0', events: [[0, 30, 'compute', 'prefill'], [31, 14, 'comm', 'allgather'], [46, 22, 'compute', 'decode'], [69, 12, 'comm', 'allgather']] },
  { name: 'gpu 1', events: [[0, 30, 'compute', 'prefill'], [31, 14, 'comm', 'allgather'], [46, 22, 'compute', 'decode'], [69, 12, 'comm', 'allgather']] },
  { name: 'gpu 2', events: [[0, 36, 'compute', 'prefill'], [37, 8, 'wait', 'wait'], [46, 22, 'compute', 'decode'], [69, 12, 'comm', 'allgather']] },
  { name: 'gpu 3', events: [[0, 30, 'compute', 'prefill'], [31, 14, 'comm', 'allgather'], [46, 22, 'compute', 'decode'], [69, 12, 'comm', 'allgather']] },
];

export function CompositionSection() {
  const [scenario, setScenario] = useState('batch');
  const [nav, setNav] = useState('sim');
  const [boundary, setBoundary] = useState(14);

  return (
    <Section
      id="composition"
      num="05"
      eyebrow="Composition"
      title="A console, assembled"
      desc={'The labs\' shell — persistent rail, context bar, configuration strip, workspace and inspector, sticky playback — built from the components above at density="compact". The rail is Sidebar and NavItem; the scrubber is Slider. The only raw CSS is the grid that places the regions and the timeline lanes, written in tokens.'}
    >
      <ThemeProvider density="compact">
        <div className="site-console">
          <Sidebar
            label="Lab navigation"
            header={
              <>
                <Wordmark size="md" accent="Lab">
                  Serving
                </Wordmark>
                <div className="site-console__workspace">
                  <span className="site-console__avatar">S</span>
                  <Stack gap="none">
                    <Text size="caption" bold>
                      Inference workspace
                    </Text>
                    <Text size="micro" tone="muted">
                      Interactive learning environment
                    </Text>
                  </Stack>
                </div>
              </>
            }
            footer={
              <>
                <Dot>Runs in your browser</Dot>
                <Text size="micro" tone="muted">
                  No GPUs required. Just curiosity.
                </Text>
              </>
            }
          >
            <NavGroup>
              {NAV_TOP.map((item) => (
                <NavItem
                  key={item.id}
                  icon={<Icon name={item.icon} />}
                  active={nav === item.id}
                  onClick={() => setNav(item.id)}
                >
                  {item.label}
                </NavItem>
              ))}
            </NavGroup>
            <NavGroup label="Scenarios" meta={SCENARIOS.length}>
              {SCENARIOS.map((sc) => (
                <NavItem
                  key={sc.id}
                  icon={<Icon name="layers" />}
                  description={sc.sub}
                  active={scenario === sc.id}
                  onClick={() => setScenario(sc.id)}
                >
                  {sc.label}
                </NavItem>
              ))}
            </NavGroup>
          </Sidebar>

          <div className="site-console__main">
            <BrandHeader
              logo={
                <Breadcrumb
                  items={[
                    { label: 'Workspace', href: '#composition' },
                    { label: 'Simulator' },
                  ]}
                />
              }
              actions={
                <>
                  <Dot live>Interactive simulation</Dot>
                  <Link href="#composition" external tone="muted">
                    vLLM docs
                  </Link>
                </>
              }
            />

            <div className="site-console__body">
              <Stack direction="horizontal" justify="between" align="start" gap="md" wrap>
                <Stack gap="xs">
                  <Heading level={2}>Batch scheduler playground</Heading>
                  <Text size="small" tone="secondary">
                    See how requests share a GPU. Understand what makes the first token slow.
                  </Text>
                </Stack>
                <Stack direction="horizontal" gap="sm" wrap>
                  <Button variant="secondary" size="sm" iconLeft={<Icon name="download" />}>
                    Export trace
                  </Button>
                  <Button variant="secondary" size="sm" iconLeft={<Icon name="share-2" />}>
                    Share configuration
                  </Button>
                </Stack>
              </Stack>

              <Stack gap="md">
                <Stack direction="horizontal" gap="sm" align="center" wrap>
                  <Heading level={4}>Continuous batching</Heading>
                  <Badge variant="outline" size="sm">
                    Join + evict
                  </Badge>
                </Stack>
                <div className="site-config">
                  <Field label="Scheduler" htmlFor="c-sched">
                    <Select
                      id="c-sched"
                      size="sm"
                      defaultValue="cont"
                      options={[
                        { value: 'static', label: 'Static batch' },
                        { value: 'cont', label: 'Continuous' },
                        { value: 'chunk', label: 'Chunked prefill' },
                      ]}
                    />
                  </Field>
                  <Field label="GPU count" htmlFor="c-gpus" hint="1–8 GPUs · tensor parallel">
                    <Input id="c-gpus" size="sm" defaultValue="4" />
                  </Field>
                  <Field label="Prompt length" htmlFor="c-prompt" hint="16 to 32k tokens">
                    <Input id="c-prompt" size="sm" defaultValue="2048" suffix="tok" />
                  </Field>
                  <Field label="Interconnect" htmlFor="c-link">
                    <Select
                      id="c-link"
                      size="sm"
                      defaultValue="nvlink"
                      options={[
                        { value: 'nvlink', label: 'NVLink-like · 50 GB/s' },
                        { value: 'pcie', label: 'PCIe Gen4 · 25 GB/s' },
                      ]}
                    />
                  </Field>
                </div>
                <Tabs
                  variant="segmented"
                  size="sm"
                  items={[
                    { id: 'fcfs', label: 'FCFS' },
                    { id: 'sjf', label: 'Shortest first' },
                    { id: 'prio', label: 'Priority' },
                  ]}
                />
              </Stack>

              <Grid columns={4} gap="md" responsive>
                <StatCard label="Time to first token" value="38" unit="ms" delta="−12%" caption="p50 · modeled" />
                <StatCard label="Throughput" value="126" unit="tok/s" delta="+9%" trend="up" caption="per request" />
                <StatCard label="GPU utilisation" value="71" unit="%" caption="decode-bound" />
                <StatCard label="Queue" value="4" unit="/ 32" caption="waiting requests" />
              </Grid>

              <div className="site-workspace">
                <Card
                  title="Request timeline"
                  subtitle="4 ranks · one shared communication lane"
                  actions={<Text size="micro" tone="muted" mono>modeled ms</Text>}
                >
                  <div className="site-lanes">
                    {LANES.map((lane, li) => (
                      <div className="site-lane" key={lane.name}>
                        <span className="site-lane__name">{lane.name}</span>
                        <div className="site-lane__track">
                          {lane.events.map(([start, width, kind, label], i) => (
                            <span
                              key={i}
                              className={`site-event site-event--${kind}${li === 2 && i === 1 ? ' site-event--selected' : ''}`}
                              style={{ left: `${start}%`, width: `${width}%` }}
                            >
                              {label}
                            </span>
                          ))}
                          {li === 0 ? <span className="site-cursor" style={{ left: '52%' }} /> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card title="Event inspector" actions={<Badge tone="warning" size="sm" dot>Waiting</Badge>}>
                  <Stack gap="md">
                    <Stack gap="xs">
                      <Text size="small" bold>
                        gpu 2 · wait
                      </Text>
                      <Text size="caption" tone="secondary">
                        Prefill ran 6 ms long on a 3k-token prompt; the all-gather cannot start until
                        every rank arrives.
                      </Text>
                    </Stack>
                    <DescriptionList
                      termWidth="7rem"
                      items={[
                        { term: 'Starts', description: <Text size="caption" mono inline>11.42 ms</Text> },
                        { term: 'Duration', description: <Text size="caption" mono inline>2.61 ms</Text> },
                        { term: 'Blocks', description: <Text size="caption" mono inline>allgather #2</Text> },
                      ]}
                    />
                    <Divider spacing="none" />
                    <Stack gap="xs">
                      <Text size="micro" tone="muted">
                        KV cache blocks
                      </Text>
                      <div className="site-cells">
                        {Array.from({ length: 8 }, (_, i) => (
                          <span key={i} className={i < 6 ? 'site-cell' : 'site-cell site-cell--empty'}>
                            {i + 10}
                          </span>
                        ))}
                      </div>
                      <ProgressBar value={75} size="sm" label="Occupancy" showValue />
                    </Stack>
                  </Stack>
                </Card>
              </div>

              <div className="site-playback">
                <Tooltip content="Reset · R">
                  <IconButton label="Reset" icon={<Icon name="rotate-ccw" />} variant="ghost" size="sm" />
                </Tooltip>
                <IconButton label="Previous event" icon={<Icon name="skip-back" />} variant="ghost" size="sm" />
                <Button size="sm" iconLeft={<Icon name="play" fill="currentColor" />}>
                  Play
                </Button>
                <IconButton label="Next event" icon={<Icon name="skip-forward" />} variant="ghost" size="sm" />
                <div className="site-playback__scrub">
                  <Slider
                    size="sm"
                    min={0}
                    max={27}
                    value={boundary}
                    onChange={(e) => setBoundary(Number(e.currentTarget.value))}
                    label={`Event boundary ${boundary} / 27`}
                    valueText={`${((boundary / 27) * 19.4).toFixed(2)} / 19.40 ms`}
                  />
                </div>
                <span className="site-keys site-hide-sm">
                  <Kbd>Space</Kbd> play <Kbd>←</Kbd>
                  <Kbd>→</Kbd> step
                </span>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Section>
  );
}
