# restack design system

React component library for the restack console language — the charcoal-and-lime visual world that
[nccl-lab](https://github.com/ziwon/nccl-lab), [parallel-training-lab](https://github.com/ziwon/parallel-training-lab)
and [rdma-fabric-lab](https://github.com/ziwon/rdma-fabric-lab) already share. Cool charcoal surfaces,
hairline rules, one lime accent, DM Sans for the interface and IBM Plex Mono for technical truth.

49 components, TypeScript types, one stylesheet, two faces (dark by default, light on request), and two
densities.
No runtime dependencies beyond React.

```jsx
import { Stack, Wordmark, Dot, Button } from '@restack-ai/design-system';
import '@restack-ai/design-system/styles.css';
```

| Document | Answers |
| --- | --- |
| **README** (this file) | How do I install it and render something? |
| [`DESIGN.md`](DESIGN.md) | Why is it this dark, this lime, this quiet? Read before changing a token. Machine-readable token frontmatter, so an AI agent can build on-brand from it. |
| [`.design-sync/conventions.md`](.design-sync/conventions.md) | How do I compose a real screen with it? |

## Browse it in a page

**[restack-ai.github.io/design-system](https://restack-ai.github.io/design-system/)** — the
tokens in both faces, the type scale, all 49 components and an assembled lab console, on one page.

The site is a real React app in [`site/`](site) that imports the library from `src`, so a specimen
cannot drift from the component it documents. `npm run site:dev` serves it; every push to `main`
builds it and force-pushes the output to the `gh-pages` branch, which is where Pages serves from.

## Sources

Visual source: the three lab sites' stylesheets and `DESIGN.md` files as the starting point, then the
restack ai org banner — its indigo, its depth, its motifs. The palette has since moved past the labs'
exact values (deeper indigo-tinted neutrals, a clearer lime selection, amber warnings, fresh green on
paper); the labs are meant to adopt this system, not the other way round. Brand artwork: the banner. Voice and temperament:
[QuietFabric](https://github.com/restack-ai/quite-fabric-design-system).

---

## Install

The package is published to the **GitHub Packages npm registry** under the `@restack-ai` scope.
GitHub Packages requires authentication for every read, so the consuming project needs an `.npmrc`
that routes the scope and supplies a token:

```ini
# .npmrc — commit this file; it carries no secret
@restack-ai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

npm expands `${GITHUB_TOKEN}` from the environment. Locally, export a classic personal access token
with the `read:packages` scope. In GitHub Actions, grant `permissions: packages: read`:

```yaml
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://npm.pkg.github.com
          scope: '@restack-ai'
      - run: npm ci
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

```sh
npm install @restack-ai/design-system
```

### Requirements

React 18 or newer is a peer dependency. The package is **ESM only**, so it needs a bundler (Vite,
Next, webpack) or Node ESM. Types ship as a single rolled-up `dist/index.d.ts` that resolves under any
`moduleResolution`.

### Consuming an unpublished change

```sh
cd design-system
npm install
npm run build      # emits dist/index.es.js, dist/index.d.ts, dist/style.css
```

```jsonc
// package.json
"dependencies": {
  "@restack-ai/design-system": "file:../design-system"
}
```

## Releasing

```sh
npm version patch        # or minor / major — writes package.json and tags
git push --follow-tags
```

[`.github/workflows/publish.yml`](.github/workflows/publish.yml) verifies the tag matches
`package.json`, typechecks, builds and publishes.

## Usage

**No provider is required.** Import `styles.css` once at your app root and render components directly.
Dark is the default face.

```jsx
import '@restack-ai/design-system/styles.css';
import {
  BrandHeader, Breadcrumb, Button, Container, Dot, Grid, Heading, Stack, StatCard, Text,
} from '@restack-ai/design-system';

export function Playground() {
  return (
    <>
      <BrandHeader
        logo={<Breadcrumb items={[{ label: 'Workspace', href: '/' }, { label: 'Simulator' }]} />}
        actions={<Dot live>Interactive simulation</Dot>}
      />
      <Container width="wide">
        <Stack gap="lg">
          <Stack gap="xs">
            <Heading level={2}>Collective playground</Heading>
            <Text size="small" tone="secondary">See how data moves. Understand what makes it fast.</Text>
          </Stack>

          <Grid columns={4} gap="md" responsive>
            <StatCard label="Bus bandwidth" value="186.3" unit="GB/s" caption="ring · 8 ranks" />
          </Grid>

          {/* your own glue: tokens, never literals */}
          <div style={{
            paddingTop: 'var(--restack-space-4)',
            borderTop: '1px solid var(--restack-color-border)',
          }}>
            <Button>Play</Button>
          </div>
        </Stack>
      </Container>
    </>
  );
}
```

### Faces

```jsx
// Whole document — including the page ground behind your root:
document.documentElement.dataset.restackTheme = 'light';   // or 'dark'

// One region:
<ThemeProvider theme="light">…</ThemeProvider>

// Console density for a region — 14px type on a 3.5px grid, where the labs sit:
<ThemeProvider density="compact">…</ThemeProvider>
```

Every semantic token is declared once per face, so a component never knows which face it is in.

## Components

| Group | Components |
| --- | --- |
| **Brand** | `BrandLogo` `Wordmark` `Dot` `Icon` `BrandHeader` |
| **Layout** | `Container` `Stack` `Grid` `Surface` `Divider` |
| **Typography** | `Heading` `Text` `SectionLabel` |
| **Actions** | `Button` `IconButton` `Link` |
| **Forms** | `Field` `Input` `Textarea` `Select` `Checkbox` `Radio` `Switch` `Slider` |
| **Data display** | `Card` `StatCard` `Badge` `Tag` `Table` `DescriptionList` `List` `NotePanel` `ProgressBar` `Kbd` `CodeBlock` |
| **Feedback** | `Alert` `Spinner` `Skeleton` `EmptyState` `Tooltip` `Dialog` |
| **Navigation** | `Sidebar` `NavGroup` `NavItem` `Tabs` `Breadcrumb` `Pagination` `Stepper` |
| **System** | `ThemeProvider` |

### Brand

- `<BrandLogo />` ships the restack ai signature — no `src` needed. `variant="lockup"` (default) is the
  full wordmark at ~5:1; `variant="mark"` is the sprouting face alone, for square slots. In a bar, use
  `size="sm"`. `tone="default|primary|mono"` recolours it — the artwork is a mask over `currentColor`.
- `<Wordmark accent="Lab">NCCL</Wordmark>` writes a product name the way the labs do: the last word in
  lime, the signal dot raised after it.
- `<Icon name="activity" />` is a Lucide glyph from the curated set in `src/icons/paths.ts`. To add one,
  put its name in `scripts/build-icons.mjs` and run `npm run icons`.
- `<Dot>` is the signal dot. With children it is a status line (`<Dot live>Runs in your browser</Dot>`);
  bare, it is decorative.

## Tokens

All tokens are CSS custom properties prefixed `--restack-`, defined in `styles.css`.

| Family | Names |
| --- | --- |
| **Space** | `space-0\|1\|2\|3\|4\|5\|6\|8\|10\|12\|16` — a 4px grid |
| **Colour** | `color-primary` (+`-hover\|-active\|-strong\|-subtle\|-surface`), `color-primary-edge`, `color-on-primary`, `color-signature` (+`-strong\|-surface`), `color-accent` (+`-strong\|-surface`), `color-canvas`, `color-surface` (+`-sunken\|-raised\|-hover\|-inverse`), `color-text` (+`-strong\|-secondary\|-muted\|-subtle\|-inverse\|-link`), `color-border` (+`-subtle\|-strong\|-focus`), `color-info\|success\|warning\|danger` each with `-strong` and `-surface`, `color-on-status`, `color-viz-1…7` |
| **Type** | `font-size-display\|title\|heading\|subheading\|lead\|body\|small\|caption\|micro`, `font-family-sans\|mono`, `font-weight-regular\|medium\|semibold\|bold`, `line-height-tight\|snug\|normal\|relaxed`, `letter-spacing-tight\|snug\|normal\|wide\|caps` |
| **Other** | `radius-xs\|sm\|md\|lg\|xl\|pill`, `shadow-sm\|md\|lg\|selected`, `gradient-signature`, `space-unit`, `duration-fast\|normal\|slow\|ambient`, `easing-standard\|enter`, `border-width`, `rule-width`, `focus-outline`, `focus-offset` |

Four rules that are easy to get wrong:

- **`primary` is the lime fill; `primary-strong` is lime that must be read.** They are one hex on the dark
  face and split on the light one, where lime text would be 1.43:1. A lime border, icon or link takes
  `primary-strong`.
- **`border` is decorative chrome** (panels, rules, tables) and deliberately faint. The edge of an
  **interactive control** takes `border-strong` (3:1 or better in both faces).
- **Success is lime, so it is never boxed.** A selection is a tinted ground with an edge; a passing state is
  a dot and the word. The label beside it says which.
- **Lime acts; indigo is atmosphere.** `signature` is for a hero, a splash, the logo — never a control,
  a selection or a status.

## Conventions

**Never write `.restack-*` class names.** They are internal BEM implementation, not an API. Style
through the enumerated props, and use `var(--restack-*)` for your own glue.

- `<Container width="narrow|default|wide|full" flush>`
- `<Stack direction="vertical|horizontal" gap="none|xs|sm|md|lg|xl" align justify wrap>`
- `<Grid columns={1|2|3|4|5|6|12} gap responsive>`
- `<Surface tone="default|sunken|muted|brand|brand-subtle|inverse" padding bordered elevation>`

Tone sets differ per component — check the types. `Badge` takes `neutral|brand|info|success|warning|danger`,
`Heading` takes `default|brand|accent|inverse|muted`, `Dot` and `SectionLabel` take
`primary|accent|success|warning|danger|neutral|muted`. `Button` uses
`variant="primary|secondary|tertiary|ghost|danger"`; every control takes `size="sm|md|lg"`.

Use `mono` on any text that is a figure, unit or identifier, and `numeric` on any column of figures.

## Repository layout

```
DESIGN.md       the design language and the reasoning behind the numbers
src/
  components/   49 components
  icons/        Lucide paths generated by scripts/build-icons.mjs (ISC)
  tokens/       color.css (primitives + two faces), typography.css, space.css
  css/          per-group stylesheets
  fonts/        DM Sans (variable) + IBM Plex Mono, base64-inlined into dist/style.css
  assets/       restack ai lockup and mark (alpha masks)
  styles.css    the @import closure that composes the whole stylesheet
.design-sync/
  conventions.md   how to build with the system
site/
  App.tsx       the showcase site, a React app that imports the library from src
  sections/     one file per section of the page
```

## Scripts

| Command | Does |
| --- | --- |
| `npm run build` | Vite library build → `dist/index.es.js`, `dist/index.d.ts`, `dist/style.css` |
| `npm run typecheck` | `tsc --noEmit`, over `src` and `site` |
| `npm run icons` | Regenerates `src/icons/paths.ts` from `lucide-static` |
| `npm run site:dev` | Serves the showcase site from `site/` against the live `src` |
| `npm run site:build` | Builds the site → `site-dist/`, the tree published to `gh-pages` |
| `npm run site:preview` | Serves the built `site-dist/` at the deployed base path |

## Fonts

DM Sans (variable, Latin + Latin Extended) and IBM Plex Mono (400, 500, Latin) are base64-inlined into
`dist/style.css`, so one self-contained stylesheet carries the brand type in any renderer. The family
names are the canonical ones, so a host that already loads either from Google Fonts matches the same
stack. The sans stack falls through to Pretendard / Apple SD Gothic Neo / Noto Sans KR for Hangul.

## Licence

UNLICENSED — internal to restack ai. DM Sans and IBM Plex Mono are SIL OFL 1.1
([`src/fonts/LICENSE-DMSans.txt`](src/fonts/LICENSE-DMSans.txt),
[`src/fonts/LICENSE-IBMPlexMono.txt`](src/fonts/LICENSE-IBMPlexMono.txt)). Icons are Lucide, ISC
([`src/icons/LICENSE-Lucide.txt`](src/icons/LICENSE-Lucide.txt)). The restack ai artwork is
restack ai's property.
