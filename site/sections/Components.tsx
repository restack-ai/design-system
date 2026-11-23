import { useState } from 'react';
import type { ComponentType } from 'react';
import {
  Alert,
  Badge,
  BrandHeader,
  BrandLogo,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  CodeBlock,
  DescriptionList,
  Divider,
  Dialog,
  Dot,
  EmptyState,
  Field,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  Kbd,
  Link,
  List,
  NavGroup,
  NavItem,
  NotePanel,
  Pagination,
  ProgressBar,
  Radio,
  SectionLabel,
  Select,
  Sidebar,
  Skeleton,
  Slider,
  Spinner,
  Stack,
  StatCard,
  Stepper,
  Surface,
  Switch,
  Table,
  Tabs,
  Tag,
  Text,
  Textarea,
  ThemeProvider,
  Tooltip,
  Wordmark,
} from '@/index';
import type { IconName } from '@/index';
import { Row, Section, Specimen } from '../parts';

const RUNS = [
  { run: 'run-0412', strategy: 'FSDP', ranks: '8', step: '19.40 ms', state: 'Passed' },
  { run: 'run-0411', strategy: 'TP', ranks: '4', step: '23.12 ms', state: 'Degraded' },
  { run: 'run-0409', strategy: 'PP', ranks: '4', step: '—', state: 'Failed' },
];

const ICON_SAMPLE: readonly IconName[] = [
  'activity', 'network', 'waypoints', 'layers', 'cpu', 'server', 'database', 'gauge', 'terminal', 'git-branch',
  'play', 'pause', 'skip-back', 'skip-forward', 'rotate-ccw', 'download', 'upload', 'share-2', 'search',
  'sliders-horizontal', 'settings', 'book-open', 'external-link', 'circle-check', 'triangle-alert', 'zap',
];

const STATE_TONE: Record<string, 'success' | 'warning' | 'danger'> = {
  Passed: 'success',
  Degraded: 'warning',
  Failed: 'danger',
};

function BrandGroup() {
  return (
    <Stack gap="lg">
      <Grid columns={2} gap="md" responsive>
        <Specimen name="BrandLogo" api='variant="lockup | mark" · tone="default | primary | signature | mono"'>
          <Stack gap="lg">
            <BrandLogo size="lg" />
            <Row>
              <BrandLogo size="md" tone="signature" />
              <BrandLogo variant="mark" size="lg" tone="primary" />
              <BrandLogo variant="mark" size="md" />
              <BrandLogo variant="mark" size="sm" tone="mono" style={{ color: 'var(--restack-color-text-muted)' }} />
            </Row>
            <Text size="caption" tone="muted">
              The restack ai signature ships with the library. It is a single-colour mask over{' '}
              <code>currentColor</code>, so every tone in both faces comes from one asset.
            </Text>
          </Stack>
        </Specimen>

        <Specimen name="Wordmark" api="children · accent · dot · size">
          <Stack gap="md">
            <Wordmark size="xl" accent="Lab">
              NCCL
            </Wordmark>
            <Wordmark size="lg" accent="Lab">
              RDMA Fabric
            </Wordmark>
            <Wordmark size="md" accent="Console">
              Serving
            </Wordmark>
            <Text size="caption" tone="muted">
              A product name written the way the labs write theirs: the last word in lime, the
              signal dot raised after it.
            </Text>
          </Stack>
        </Specimen>
      </Grid>

      <Specimen name="Dot" api='tone · size · live · children'>
        <Stack gap="md">
          <Row>
            <Dot live>Interactive simulation</Dot>
            <Dot tone="accent">Gather phase</Dot>
            <Dot tone="warning">Rank 3 is slow</Dot>
            <Dot tone="danger">Link down</Dot>
            <Dot tone="neutral">Idle</Dot>
          </Row>
          <Text size="caption" tone="muted">
            The signal dot — the system&rsquo;s one geometric device. It marks what is live,
            selected or ready; the words beside it say which. A bare dot is decorative and hidden
            from assistive tech.
          </Text>
        </Stack>
      </Specimen>

      <Specimen name="Icon" api="name · size · label — a curated slice of Lucide, 1.75px">
        <Stack gap="md">
          <Row>
            {ICON_SAMPLE.map((name) => (
              <Tooltip key={name} content={name}>
                <span style={{ display: 'inline-flex', fontSize: 'var(--restack-font-size-subheading)', color: 'var(--restack-color-text-secondary)' }}>
                  <Icon name={name} />
                </span>
              </Tooltip>
            ))}
          </Row>
          <Text size="caption" tone="muted">
            Lucide is what the labs use. The glyphs are copied in at author time, so the library still
            has no runtime dependency; <code>npm run icons</code> regenerates the set.
          </Text>
        </Stack>
      </Specimen>

      <Specimen name="BrandHeader" api="logo · title · actions · sunken · sticky" tight>
        <Stack gap="none">
          <BrandHeader
            logo={<BrandLogo size="sm" />}
            title="Workspace"
            actions={
              <Row>
                <Dot>Educational simulation</Dot>
                <Button variant="secondary" size="sm" iconLeft={<Icon name="share-2" />}>
                  Share
                </Button>
              </Row>
            }
          />
          <BrandHeader
            sunken
            logo={<Wordmark size="sm" accent="Lab">Parallel</Wordmark>}
            title="Training simulator"
            actions={
              <Link href="#components" external tone="muted">
                NCCL docs
              </Link>
            }
          />
        </Stack>
      </Specimen>
    </Stack>
  );
}

function LayoutGroup() {
  return (
    <Stack gap="lg">
      <Specimen name="Surface" api="tone · padding · bordered · elevation">
        <Grid columns={3} gap="md" responsive>
          <Surface bordered padding="md">
            <Text size="small">default</Text>
          </Surface>
          <Surface tone="sunken" bordered padding="md">
            <Text size="small">sunken</Text>
          </Surface>
          <Surface tone="muted" padding="md">
            <Text size="small">muted</Text>
          </Surface>
          <Surface tone="brand-subtle" bordered padding="md">
            <Text size="small">brand-subtle — the selected ground</Text>
          </Surface>
          <Surface tone="brand" padding="md">
            <Text size="small">brand — children re-pointed to ink</Text>
          </Surface>
          <Surface tone="inverse" padding="md">
            <Text size="small">inverse — the opposite face</Text>
          </Surface>
        </Grid>
        <Surface tone="signature" bordered padding="lg" style={{ marginTop: 'var(--restack-space-3)' }}>
          <Stack gap="xs">
            <Text size="small" bold>
              signature — the banner&rsquo;s indigo glow
            </Text>
            <Text size="caption" tone="secondary">
              For a brand moment: a hero, a splash, an empty first run. Never behind a form or a table.
            </Text>
          </Stack>
        </Surface>
      </Specimen>

      <Grid columns={2} gap="lg" responsive>
        <Specimen name="Stack" api="direction · gap · align · justify · wrap">
          <Stack gap="sm">
            <Stack direction="horizontal" gap="sm">
              {['one', 'two', 'three'].map((n) => (
                <Surface key={n} tone="sunken" bordered padding="sm">
                  <Text size="caption" mono>
                    {n}
                  </Text>
                </Surface>
              ))}
            </Stack>
            <Stack direction="horizontal" justify="between" align="center">
              <Text size="small">justify=&quot;between&quot;</Text>
              <Badge tone="brand">right edge</Badge>
            </Stack>
          </Stack>
        </Specimen>

        <Specimen name="Divider" api="orientation · tone · spacing">
          <Stack gap="none">
            <Text size="small">Above</Text>
            <Divider spacing="sm" />
            <Text size="small">Between</Text>
            <Divider spacing="sm" tone="brand" />
            <Text size="small">Below</Text>
            <Divider spacing="sm">labelled rule</Divider>
          </Stack>
        </Specimen>
      </Grid>
    </Stack>
  );
}

function ActionsGroup() {
  return (
    <Stack gap="lg">
      <Specimen name="Button" api='variant="primary | secondary | tertiary | ghost | danger"'>
        <Stack gap="md">
          <Row>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </Row>
          <Row>
            <Button size="lg">Large</Button>
            <Button size="md">Medium</Button>
            <Button size="sm">Small</Button>
          </Row>
          <Row>
            <Button iconLeft={<Icon name="play" />}>Play</Button>
            <Button variant="secondary" iconLeft={<Icon name="download" />}>
              Export trace
            </Button>
            <Button loading>Working</Button>
            <Button disabled>Disabled</Button>
          </Row>
          <Text size="caption" tone="muted">
            One lime fill per view. Secondary is neutral on purpose — the labs&rsquo; utility button —
            and tertiary is the selected-item look. Heights are 28 / 36 / 44px.
          </Text>
        </Stack>
      </Specimen>

      <Grid columns={2} gap="lg" responsive>
        <Specimen name="IconButton" api="label (required) · icon · variant · size">
          <Row>
            <IconButton label="Reset" icon={<Icon name="rotate-ccw" />} variant="ghost" />
            <IconButton label="Previous event" icon={<Icon name="skip-back" />} variant="secondary" />
            <IconButton label="Next event" icon={<Icon name="skip-forward" />} variant="secondary" />
            <IconButton label="Filter" icon={<Icon name="list-filter" />} variant="tertiary" />
            <IconButton label="Play" icon={<Icon name="play" />} variant="primary" />
          </Row>
        </Specimen>

        <Specimen name="Link" api="tone · underline · external">
          <Stack gap="xs">
            <Text size="small">
              Every figure comes from a recorded run, kept in the{' '}
              <Link href="#components" underline="always">
                verification record
              </Link>
              .
            </Text>
            <Link href="#components" tone="muted">
              Muted, for chrome
            </Link>
            <Link href="https://github.com/restack-ai/design-system" external>
              External, with the safe rel attributes
            </Link>
          </Stack>
        </Specimen>
      </Grid>
    </Stack>
  );
}

function FormsGroup() {
  const [mode, setMode] = useState('ring');
  const [trace, setTrace] = useState(true);
  const [live, setLive] = useState(false);
  const [speed, setSpeed] = useState(2);

  return (
    <Stack gap="lg">
      <Grid columns={2} gap="lg" responsive>
        <Specimen name="Field + Input" api="label · hint · error · required · prefix · suffix">
          <Stack gap="md">
            <Field label="GPU count" htmlFor="f-gpus" hint="2–16 GPUs · one rank each" required>
              <Input id="f-gpus" defaultValue="8" inputMode="numeric" />
            </Field>
            <Field label="Tensor size" htmlFor="f-size" hint="4 B to 1 TiB · logical buffer">
              <Input id="f-size" suffix="MiB" defaultValue="32" />
            </Field>
            <Field label="Peer address" htmlFor="f-peer" error="Not a GID — expected fe80::/64.">
              <Input id="f-peer" invalid placeholder="fe80::5054:ff:fe12:3456" />
            </Field>
            <Field label="Disabled" htmlFor="f-disabled">
              <Input id="f-disabled" disabled defaultValue="Locked by the scenario" />
            </Field>
          </Stack>
        </Specimen>

        <Stack gap="lg">
          <Specimen name="Select & Textarea" api="options · placeholder · invalid · rows">
            <Stack gap="md">
              <Field label="Interconnect model" htmlFor="f-link">
                <Select
                  id="f-link"
                  defaultValue="nvlink"
                  options={[
                    { value: 'nvlink', label: 'NVLink-like · 50 GB/s' },
                    { value: 'pcie', label: 'PCIe Gen4 · 25 GB/s' },
                    { value: 'roce', label: 'RoCEv2 · 12.5 GB/s' },
                  ]}
                />
              </Field>
              <Field label="Run note" htmlFor="f-note" hint="Stored with the trace.">
                <Textarea id="f-note" rows={3} defaultValue="Rank 3 throttled to 60% to show the straggler." />
              </Field>
            </Stack>
          </Specimen>

          <Specimen name="Checkbox · Radio · Switch · Slider" api="label · description · indeterminate · valueText">
            <Stack gap="md">
              <Checkbox
                label="Record a trace"
                description="Exported as Chrome trace JSON."
                checked={trace}
                onChange={(e) => setTrace(e.currentTarget.checked)}
              />
              <Checkbox label="Some ranks selected" indeterminate readOnly checked={false} />
              <Field label="Algorithm">
                <Stack gap="xs">
                  <Radio name="alg" label="Ring" checked={mode === 'ring'} onChange={() => setMode('ring')} />
                  <Radio
                    name="alg"
                    label="Tree"
                    description="Lower latency at small sizes."
                    checked={mode === 'tree'}
                    onChange={() => setMode('tree')}
                  />
                </Stack>
              </Field>
              <Switch label="Live replay" checked={live} onChange={(e) => setLive(e.currentTarget.checked)} />
              <Slider
                label="Playback speed"
                min={1}
                max={8}
                value={speed}
                onChange={(e) => setSpeed(Number(e.currentTarget.value))}
                valueText={`${speed}×`}
              />
            </Stack>
          </Specimen>
        </Stack>
      </Grid>

      <NotePanel title="Every control edge takes border-strong.">
        A field, select, checkbox, radio, secondary button and pagination button all draw their
        boundary in the control stroke — 3.32:1 on a panel, 3.60:1 on the page, and
        3.84:1 on paper — the 3:1 WCAG 1.4.11 asks of a control. Focus turns that edge lime and
        thickens it. Disabled controls fade to 45% and keep their place.
      </NotePanel>
    </Stack>
  );
}

function DataGroup() {
  return (
    <Stack gap="lg">
      <Grid columns={4} gap="md" responsive>
        <StatCard label="Required scenarios" value="15" unit="/ 15 passed" caption="make report STRICT=1" />
        <StatCard label="Full rerun" value="100.5" unit="min" caption="from wiped guests" />
        <StatCard label="Bus bandwidth" value="186.3" unit="GB/s" delta="+4.2%" trend="up" caption="vs. tree" />
        <StatCard tone="brand" label="Hardware needed" value="0" caption="no HCA, switch or GPU" />
      </Grid>

      <Grid columns={2} gap="lg" responsive>
        <Card
          title="Communication topology"
          subtitle="8 ranks · full duplex"
          actions={<Badge tone="brand" variant="outline" size="sm">Ring</Badge>}
          footer={
            <Row>
              <Button size="sm">Open</Button>
              <Button size="sm" variant="ghost">
                Dismiss
              </Button>
            </Row>
          }
        >
          <Text size="small" tone="secondary">
            The workspace panel: one tone up from the page, a fine stroke, 7px corners. Depth is the
            tone step — there is no resting shadow.
          </Text>
        </Card>

        <Card tone="brand" title="Selected rank" subtitle="tone=&quot;brand&quot; — the selection look">
          <List
            marker="arrow"
            size="small"
            items={['Local compute', 'AllReduce AVERAGE', 'Matching replicas']}
          />
        </Card>
      </Grid>

      <Specimen name="Table" api="columns · rows · density · striped · hoverable · stickyHeader">
        <div className="site-scroll-x">
          <Table
            hoverable
            columns={[
              { key: 'run', header: 'Run', width: '8rem', render: (row) => <Tag size="sm">{row.run as string}</Tag> },
              { key: 'strategy', header: 'Strategy' },
              { key: 'ranks', header: 'Ranks', align: 'right', numeric: true },
              { key: 'step', header: 'Step time', align: 'right', numeric: true },
              {
                key: 'state',
                header: 'State',
                align: 'right',
                render: (row) => (
                  <Badge tone={STATE_TONE[row.state as string]} dot>
                    {row.state as string}
                  </Badge>
                ),
              },
            ]}
            rows={RUNS}
            rowKey={(row) => row.run}
          />
        </div>
      </Specimen>

      <Grid columns={2} gap="lg" responsive>
        <Specimen name="DescriptionList" api="items · layout · dividers · termWidth">
          <DescriptionList
            termWidth="9rem"
            items={[
              { term: 'Transfers this step', description: <Text size="small" mono inline>0 parallel</Text> },
              { term: 'Payload / transfer', description: <Text size="small" mono inline>4.00 MiB</Text> },
              { term: 'Model elapsed', description: <Text size="small" mono inline>0.0 µs</Text> },
              { term: 'Phase', description: <Dot>Ready to communicate</Dot> },
            ]}
          />
        </Specimen>

        <Specimen name="Badge · Tag · ProgressBar" api="tone · variant · size · dot">
          <Stack gap="md">
            <Row>
              <Badge tone="brand" variant="solid">
                Solid
              </Badge>
              <Badge tone="brand">Subtle</Badge>
              <Badge tone="neutral" variant="outline">
                Reduce + replicate
              </Badge>
              <Badge tone="info" dot size="sm">
                Gather
              </Badge>
            </Row>
            <Row>
              <Tag>rank:0</Tag>
              <Tag tone="brand">L1 full</Tag>
              <Tag onRemove={() => undefined}>ibv_reg_mr</Tag>
            </Row>
            <ProgressBar label="Partitions populated" value={100} showValue />
            <ProgressBar label="Memory headroom" value={88} tone="warning" showValue size="sm" />
          </Stack>
        </Specimen>
      </Grid>

      <Grid columns={3} gap="lg" responsive>
        <NotePanel title="Lime rule.">The default — a 2px lime rule down the leading edge.</NotePanel>
        <NotePanel tone="neutral" title="Neutral.">
          For an aside that should not pull the eye.
        </NotePanel>
        <NotePanel tone="muted" rule="top" title="Muted, ruled on top.">
          The quietest, for a note under a figure.
        </NotePanel>
      </Grid>

      <Grid columns={2} gap="lg" responsive>
        <CodeBlock title="acceptance-all.sh · run 20261116T190004Z" actions={<Badge size="sm" variant="outline">excerpt</Badge>}>
          <b>make</b> report STRICT=1{'\n'}
          <i># 15 required, 4 optional</i>{'\n'}
          a-baseline-checks   PASS   12.4s{'\n'}
          b01-ibnetdiscover   PASS    3.1s{'\n'}
          c03-incast-simul    PASS   41.8s
        </CodeBlock>
        <Specimen name="Kbd" api="children">
          <Stack gap="sm">
            <Text size="small" tone="secondary">
              <Kbd>Space</Kbd> to play · <Kbd>←</Kbd> <Kbd>→</Kbd> to step · <Kbd>R</Kbd> to reset ·{' '}
              <Kbd>Ctrl K</Kbd> to search
            </Text>
            <Text size="caption" tone="muted">
              <code>CodeBlock</code> is for recorded excerpts and commands: <code>{'<b>'}</code> is the
              lime emphasis, <code>{'<i>'}</code> the muted comment. No syntax highlighter.
            </Text>
          </Stack>
        </Specimen>
      </Grid>
    </Stack>
  );
}

function FeedbackGroup() {
  const [open, setOpen] = useState(false);
  return (
    <Stack gap="lg">
      <Stack gap="sm">
        <Alert tone="info" title="A logical ring is an ordering of ranks">
          Not a physical cabling diagram. The interconnect model sets the per-link bandwidth.
        </Alert>
        <Alert tone="success" title="15 of 15 scenarios passed">
          Recorded as run 20261116T190004Z.
        </Alert>
        <Alert
          tone="warning"
          title="Rank 3 is a straggler"
          actions={
            <Row>
              <Button size="sm" variant="secondary">
                Inspect rank 3
              </Button>
            </Row>
          }
        >
          Every collective in this step waits 4.1 ms for it.
        </Alert>
        <Alert tone="danger" title="Two checks failed" onDismiss={() => undefined}>
          The deliberate break removed rxe0; the checks caught it.
        </Alert>
        <Alert tone="brand">Estimates identify the model and its assumptions.</Alert>
      </Stack>

      <Grid columns={3} gap="lg" responsive>
        <Specimen name="Spinner" api="size · tone · showLabel">
          <Row>
            <Spinner size="lg" />
            <Spinner size="md" />
            <Spinner size="sm" tone="neutral" />
            <Spinner size="sm" showLabel label="Loading" />
          </Row>
        </Specimen>

        <Specimen name="Skeleton" api="shape · width · height · lines">
          <Stack gap="sm">
            <Skeleton shape="text" lines={3} />
            <Row>
              <Skeleton shape="circle" width="2.5rem" height="2.5rem" />
              <Skeleton shape="block" width="60%" height="2.5rem" />
            </Row>
          </Stack>
        </Specimen>

        <Specimen name="EmptyState" api="title · description · icon · actions · bordered">
          <EmptyState
            bordered
            size="sm"
            icon={<BrandLogo variant="mark" size="md" tone="signature" />}
            title="No trace loaded"
            description="Import an nccl-tests log to compare it with the model."
            actions={<Button size="sm" variant="secondary">Import log</Button>}
          />
        </Specimen>
      </Grid>

      <Specimen name="Tooltip · Dialog" api="content · side — open · onClose · title · actions · size">
        <Row>
          <Tooltip content="Export the trace as Chrome JSON">
            <IconButton label="Export trace" icon={<Icon name="download" />} variant="secondary" />
          </Tooltip>
          <Tooltip content="Shown on hover and on keyboard focus" side="bottom">
            <Button variant="ghost">Hover or focus me</Button>
          </Tooltip>
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Open dialog
          </Button>
        </Row>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Configure the run"
          description="Changes apply to the next playback."
          actions={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Apply</Button>
            </>
          }
        >
          <Stack gap="md">
            <Field label="Accumulation steps" htmlFor="d-acc" hint="1–16 · global batch stays fixed">
              <Input id="d-acc" defaultValue="1" />
            </Field>
            <Checkbox label="Overlap prefetch with compute" defaultChecked />
          </Stack>
        </Dialog>
      </Specimen>
    </Stack>
  );
}

function NavigationGroup() {
  const [tab, setTab] = useState('topology');
  const [page, setPage] = useState(3);
  const [side, setSide] = useState('ar');

  return (
    <Stack gap="lg">
      <Specimen name="Sidebar · NavGroup · NavItem" api="header · footer — label · meta — icon · description · active · trailing" tight>
        <div style={{ display: 'flex', minHeight: '19rem' }}>
          <Sidebar
            header={<Wordmark accent="Lab">NCCL</Wordmark>}
            footer={<Dot>Runs in your browser</Dot>}
          >
            <NavGroup>
              <NavItem icon={<Icon name="activity" />} active={side === 'sim'} onClick={() => setSide('sim')} trailing={side === 'sim' ? undefined : <Kbd>S</Kbd>}>
                Simulator
              </NavItem>
              <NavItem icon={<Icon name="sliders-horizontal" />} active={side === 'cmp'} onClick={() => setSide('cmp')}>
                Compare algorithms
              </NavItem>
            </NavGroup>
            <NavGroup label="Collective operations" meta="3">
              <NavItem icon={<Icon name="network" />} description="Reduce & replicate" active={side === 'ar'} onClick={() => setSide('ar')}>
                AllReduce
              </NavItem>
              <NavItem icon={<Icon name="layers" />} description="Gather & replicate" active={side === 'ag'} onClick={() => setSide('ag')}>
                AllGather
              </NavItem>
              <NavItem icon={<Icon name="waypoints" />} description="Personalized exchange" disabled>
                AllToAll
              </NavItem>
            </NavGroup>
          </Sidebar>
          <div style={{ padding: 'var(--restack-space-5)', flex: '1 1 auto', minWidth: 0 }}>
            <Text size="small" tone="secondary">
              The selected row is the system&rsquo;s selection vocabulary in its purest form: a
              lime-tinted ground, a lime edge, lime text and the signal dot — and{' '}
              <code>aria-current=&quot;page&quot;</code>, so the state is not colour alone.
            </Text>
          </div>
        </div>
      </Specimen>

      <Specimen name="Tabs" api='items · value · onChange · variant="underline | segmented"'>
        <Stack gap="lg">
          <Tabs
            items={[
              { id: 'topology', label: 'Topology' },
              { id: 'timeline', label: 'Timeline', badge: '14' },
              { id: 'memory', label: 'Memory' },
              { id: 'raw', label: 'Raw log', disabled: true },
            ]}
            value={tab}
            onChange={setTab}
          >
            <Text size="small" tone="secondary">
              Panel content for <b>{tab}</b>.
            </Text>
          </Tabs>
          <Tabs
            variant="segmented"
            fullWidth
            items={[
              { id: 'ddp', label: 'DDP' },
              { id: 'fsdp', label: 'FSDP' },
              { id: 'tp', label: 'TP' },
              { id: 'pp', label: 'PP' },
              { id: 'ep', label: 'EP' },
            ]}
          />
        </Stack>
      </Specimen>

      <Grid columns={2} gap="lg" responsive>
        <Specimen name="Breadcrumb" api="items · separator">
          <Breadcrumb
            items={[
              { label: 'Workspace', href: '#components' },
              { label: 'Labs', href: '#components' },
              { label: 'Simulator' },
            ]}
          />
        </Specimen>

        <Specimen name="Pagination" api="page · pageCount · siblings · showSummary">
          <div className="site-scroll-x">
            <Pagination page={page} pageCount={12} onChange={setPage} showSummary />
          </div>
        </Specimen>
      </Grid>

      <Specimen name="Stepper" api="steps · current · orientation · numbered">
        <Stack gap="lg">
          <div className="site-scroll-x">
            <Stepper
              current={1}
              steps={[
                { label: 'Explain', description: 'The idea first' },
                { label: 'Show', description: 'A recorded excerpt' },
                { label: 'Do', description: 'The commands to repeat it' },
              ]}
            />
          </div>
          <div className="site-scroll-x">
            <Stepper numbered={false} current={2} steps={[{ label: 'Forward' }, { label: 'Backward' }, { label: 'AllReduce' }, { label: 'Step' }]} />
          </div>
        </Stack>
      </Specimen>
    </Stack>
  );
}

function FacePreview({ caption }: { caption: string }) {
  return (
    <Stack gap="sm">
      <Heading level={4}>Ring AllReduce</Heading>
      <Text size="small" tone="secondary">
        {caption}
      </Text>
      <Row>
        <Button size="sm">Play</Button>
        <Button size="sm" variant="secondary">
          Export
        </Button>
        <Badge tone="brand">Selected</Badge>
        <Dot>Ready</Dot>
      </Row>
    </Stack>
  );
}

function SystemGroup() {
  return (
    <Specimen name="ThemeProvider" api='theme="dark | light" · density="comfortable | compact" · fontSize · tokens'>
      <Grid columns={2} gap="md" responsive>
        <ThemeProvider theme="dark" style={{ padding: 'var(--restack-space-5)', borderRadius: 'var(--restack-radius-lg)' }}>
          <FacePreview caption='theme="dark" — the default face.' />
        </ThemeProvider>
        <ThemeProvider
          theme="light"
          density="compact"
          style={{ padding: 'var(--restack-space-5)', borderRadius: 'var(--restack-radius-lg)' }}
        >
          <FacePreview caption='theme="light" density="compact" — paper, with type and spacing tightened together.' />
        </ThemeProvider>
      </Grid>
    </Specimen>
  );
}

/* Each group is a component, not a call — the form specimens hold state, and
 * hooks belong to the component that owns them. */
const GROUPS: ReadonlyArray<{ label: string; meta: string; Group: ComponentType }> = [
  { label: 'Brand', meta: 'BrandLogo · Wordmark · Dot · Icon · BrandHeader', Group: BrandGroup },
  { label: 'Layout', meta: 'Container · Stack · Grid · Surface · Divider', Group: LayoutGroup },
  { label: 'Actions', meta: 'Button · IconButton · Link', Group: ActionsGroup },
  { label: 'Forms', meta: 'Field · Input · Textarea · Select · Checkbox · Radio · Switch · Slider', Group: FormsGroup },
  {
    label: 'Data display',
    meta: 'Card · StatCard · Badge · Tag · Table · DescriptionList · List · NotePanel · ProgressBar · Kbd · CodeBlock',
    Group: DataGroup,
  },
  { label: 'Feedback', meta: 'Alert · Spinner · Skeleton · EmptyState · Tooltip · Dialog', Group: FeedbackGroup },
  { label: 'Navigation', meta: 'Sidebar · NavGroup · NavItem · Tabs · Breadcrumb · Pagination · Stepper', Group: NavigationGroup },
  { label: 'System', meta: 'ThemeProvider', Group: SystemGroup },
];

export function ComponentsSection() {
  return (
    <Section
      id="components"
      num="04"
      eyebrow="Components"
      title="Forty-nine components, one entry"
      desc="No runtime dependency beyond React. Everything below is the real library rendering live — the site imports it from source, so a specimen cannot drift from the component it documents."
    >
      <Stack gap="xl">
        {GROUPS.map(({ label, meta, Group }) => (
          <Stack gap="md" key={label}>
            <SectionLabel meta={meta}>
              {label}
            </SectionLabel>
            <Group />
          </Stack>
        ))}
      </Stack>
    </Section>
  );
}
