# Building with restack

`@restack-ai/design-system` — 49 React components carrying the restack console language: cool
charcoal surfaces, hairline rules, one lime accent, DM Sans for the interface and IBM Plex Mono for
technical truth. Dark is the default face; a light face is opt-in.

## Setup

**No provider is required.** Every component styles itself from `styles.css`. Link that one file,
load the bundle, and render components directly — dark, with nothing wrapped.

`ThemeProvider` is optional and does four things: `theme="light|dark"` scopes a face to a subtree;
`density="compact"` sets a console region at the labs' density (14px type, 3.5px grid — type, spacing
and control heights together); `fontSize` rebases only the type scale; `tokens={{ … }}`
overrides tokens for one subtree (keys with or without the `--restack-` prefix). To switch the whole
document, set `data-restack-theme="light"` on `<html>`.

## The idiom: components and props first, tokens for your own glue

**Never write `.restack-*` class names.** They are internal BEM implementation, not an API. Style
through the enumerated props; for your own layout and one-off surfaces use `var(--restack-*)` in
inline styles or your own CSS. Never hardcode a hex, a px gap or a font size — a literal hex is wrong
in one of the two faces.

Layout is components, not utility classes:

- `<Container width="narrow|default|wide|full" flush>` — page gutter and max width
- `<Stack direction="vertical|horizontal" gap="none|xs|sm|md|lg|xl" align="start|center|end|stretch|baseline" justify="start|center|end|between|around" wrap>`
- `<Grid columns={1|2|3|4|5|6|12} gap="none|xs|sm|md|lg|xl" responsive>` — stacks below 720px
- `<Surface tone="default|sunken|muted|brand|brand-subtle|inverse" padding="none|sm|md|lg" bordered elevation="none|sm|md|lg">`
  — `brand` and `inverse` re-point the text colours for their children
- `<Divider />`

Type is components: `<Heading level={1|2|3|4|5} tone="default|brand|accent|inverse|muted" marker suffix>`,
`<Text size="lead|body|small|caption|micro" tone="default|secondary|muted|brand|inverse|success|warning|danger" bold inline numeric mono>`,
`<SectionLabel face="sans|mono" marker="dot|none" tone meta>` — sentence case by default; `mono` is the
uppercase eyebrow, once per page section.

**Mono is for technical truth.** Set figures, units, identifiers, commands and addresses with
`<Text mono>`; `StatCard` figures, numeric `Table` columns, `Tag`, input affixes and `Pagination` are
already mono. Prose never is.

## The brand pieces

- `<BrandLogo />` — the restack ai signature, shipped with the library. Never source a logo file.
  `variant="lockup"` (default, ~5:1) or `variant="mark"` (the sprouting face, for square slots).
  **In a bar, use `size="sm"`.** `tone="default"` (text-strong) normally; `primary` (lime) only where
  nothing else is lime; `mono` inherits.
- `<Wordmark accent="Lab">NCCL</Wordmark>` — a product or lab name: last word lime, signal dot after.
  The company is `BrandLogo`; a tool is a `Wordmark`.
- `<Icon name="…" />` — Lucide glyphs, the only icon set. Never paste an SVG path or use an emoji. It
  follows the text size; give it `label` only when it stands alone without text.
- `<Dot>` — the signal dot. `<Dot live>Interactive simulation</Dot>` is a status line; a bare `<Dot />`
  is decorative. Tones: `primary|accent|success|warning|danger|neutral|muted`.
- `<BrandHeader logo title actions sunken sticky>{nav}</BrandHeader>` — the top bar over one hairline.
  In a console, put a `Breadcrumb` in `logo` and a `Dot` status plus a docs `Link` in `actions`.

## Building a console

Use the shell the labs use, from components: `<Sidebar header footer>` holding `<NavGroup label meta>`
and `<NavItem icon description active>`; a `<BrandHeader>` with a `Breadcrumb` and a status `Dot`; a
config strip of `Field`s; `Card`s for the workspace and inspector; `StatCard`s for figures; and a
playback row of `IconButton`s, one primary `Button` and a `Slider`. Wrap it in
`<ThemeProvider density="compact">`. Keyboard hints are `<Kbd>`; recorded output is `<CodeBlock>`;
hints on icon-only controls are `<Tooltip>`; anything modal is `<Dialog>`.

## Colour, in four sentences

Lime means go: one `primary` button per view, the selected item, the focus outline, a ready or
passing state — and the label beside it always says which. Cyan (`accent`, `info`) is the second
voice: information, gather/broadcast, parameters. Everything else is charcoal and slate. Indigo (`signature`) is the brand's atmosphere — `Surface
tone="signature"` for a hero or an empty first run, `BrandLogo tone="signature"` — and is never a control,
a selection or a status.

Three rules that are easy to get wrong:

- **`primary` is the fill; `primary-strong` is lime that must be read.** On the light face lime text is
  1.43:1, so a lime link, icon, edge or dot uses `--restack-color-primary-strong`.
- **Selection is boxed, success is not.** Both are lime. A selected thing gets a tinted ground and an edge;
  a passing state is a dot and the word (`<Badge tone="success">` renders that by default).
- **`--restack-color-border` is decorative chrome** — panel edges, table rules, dividers. The edge of an
  **interactive control** takes `--restack-color-border-strong`.

Token families, real names, all prefixed `--restack-`:

- **space** — `space-0|1|2|3|4|5|6|8|10|12|16` (4px grid)
- **colour** — `color-primary` (+`-hover|-active|-strong|-subtle|-surface`), `color-on-primary`,
  `color-accent` (+`-strong|-surface`), `color-canvas`, `color-surface` (+`-sunken|-raised|-hover|-inverse`),
  `color-text` (+`-strong|-secondary|-muted|-subtle|-inverse|-link`), `color-border` (+`-subtle|-strong|-focus`),
  `color-info|success|warning|danger` (+`-strong|-surface`), `color-on-status`, `color-viz-1…7`
- **type** — `font-size-display|title|heading|subheading|lead|body|small|caption|micro`,
  `font-family-sans|mono`, `font-weight-regular|medium|semibold|bold`, `line-height-*`, `letter-spacing-*`
- **other** — `radius-xs|sm|md|lg|xl|pill` (2/3/5/7/9px), `shadow-sm|md|lg|selected`, `focus-outline`, `rule-width`

## Selection vocabulary

The labs mark a selected thing the same way everywhere, and so should you: `primary-surface` fill,
`primary-subtle` edge, `primary-strong` text, optionally a trailing `<Dot />`. `Card tone="brand"`,
`Button variant="tertiary"`, the active `Tabs variant="segmented"` segment and the active `Pagination`
page all use it. For a custom list row (a sidebar nav item), write exactly those three tokens.

## Where the truth lives

- `styles.css` and its `@import` closure — every class and every token, compiled.
- `src/tokens/color.css` — primitives, both faces, and the contrast figures in comments.
- `DESIGN.md` — the reasoning, with token frontmatter.

## A representative screen

```jsx
const { ThemeProvider, BrandHeader, Breadcrumb, Dot, Container, Stack, Grid, Heading, Text, StatCard, Button, Field, Input, Select } = window.Restack;

<ThemeProvider density="compact">
  <BrandHeader
    logo={<Breadcrumb items={[{ label: 'Workspace', href: '#' }, { label: 'Simulator' }]} />}
    actions={<Dot live>Interactive simulation</Dot>}
  />
  <Container width="wide">
    <Stack gap="lg">
      <Stack direction="horizontal" justify="between" align="start" wrap>
        <Stack gap="xs">
          <Heading level={2}>Collective playground</Heading>
          <Text size="small" tone="secondary">See how data moves. Understand what makes it fast.</Text>
        </Stack>
        <Button variant="secondary" size="sm">Export trace</Button>
      </Stack>

      <Grid columns={4} gap="md" responsive>
        <Field label="GPU count" htmlFor="gpus" hint="2–16 GPUs · one rank each">
          <Input id="gpus" size="sm" defaultValue="8" />
        </Field>
        <Field label="Tensor size" htmlFor="size">
          <Input id="size" size="sm" defaultValue="32" suffix="MiB" />
        </Field>
      </Grid>

      <Grid columns={4} gap="md" responsive>
        <StatCard label="Bus bandwidth" value="186.3" unit="GB/s" caption="ring · modeled" />
        <StatCard tone="brand" label="Scenarios" value="15" unit="/ 15 passed" caption="make report STRICT=1" />
      </Grid>

      {/* your own glue: tokens, never literals */}
      <div style={{ paddingTop: 'var(--restack-space-4)', borderTop: '1px solid var(--restack-color-border)' }}>
        <Button>Play</Button>
      </div>
    </Stack>
  </Container>
</ThemeProvider>
```
