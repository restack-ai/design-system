---
version: alpha
name: restack-design-system
description: "A calm, dark-first console language for restack ai, that began with the three restack labs — nccl-lab, parallel-training-lab and rdma-fabric-lab — was tuned toward the restack ai banner, and is shipped as a 49-component React library. The page is a deep charcoal carrying a trace of the banner's indigo (#0c0d12) and every container steps up from it by tone, drawn with one-pixel slate lines rather than shadows. One pale lime (#b2e879) marks every primary action, selection, focus outline and ready state; cyan is the second voice for information; muted pastels say what kind of thing something is. Indigo (#485cf9), sampled from the restack ai banner, is the signature colour — atmosphere for brand moments, never an action. DM Sans sets the interface, IBM Plex Mono sets technical truth — figures, units, identifiers, eyebrows. Corners are compact and step up with the size of the thing (2/3/5/7/9px). The signal dot — a small lime circle beside a title, a status, a selected item — is the one geometric device. A light face re-points the same semantic names onto paper; dark is the default."

colors:
  # dark face (default, on :root)
  primary: "#b2e879"
  primary-hover: "#c6f59b"
  primary-active: "#9dd969"
  primary-strong: "#b2e879"
  primary-subtle: "#4f7a2e"
  primary-surface: "#1f3316"
  on-primary: "#1b2a0d"
  primary-edge: "#b2e879"
  signature: "#485cf9"
  signature-strong: "#8595fa"
  signature-surface: "#1c1f3a"
  accent: "#70c5d0"
  accent-strong: "#70c5d0"
  accent-surface: "#14282d"
  canvas: "#0c0d12"
  surface: "#15171f"
  surface-sunken: "#101218"
  surface-raised: "#1c1f29"
  surface-hover: "#252935"
  surface-inverse: "#e6e8ef"
  text-strong: "#f3f4f8"
  text: "#e6e8ef"
  text-secondary: "#b5bbca"
  text-muted: "#9fa6b8"
  text-subtle: "#8d94a8"
  text-inverse: "#0c0d12"
  text-link: "#b2e879"
  border: "#303545"
  border-subtle: "#252935"
  border-strong: "#626a80"
  border-focus: "#b2e879"
  info: "#70c5d0"
  info-surface: "#14282d"
  success: "#b2e879"
  success-surface: "#18260f"
  warning: "#ecc35f"
  warning-surface: "#2b2412"
  danger: "#f2867a"
  danger-surface: "#2e1c1e"
  on-status: "#0c0d12"
  viz-1: "#b2e879"
  viz-2: "#70c5d0"
  viz-3: "#e1ad7d"
  viz-4: "#cf9be0"
  viz-5: "#d8cf89"
  viz-6: "#d89dbd"
  viz-7: "#94aaa8"

colorsLight:
  # light face (data-restack-theme="light")
  primary: "#b2e879"
  primary-hover: "#9dd969"
  primary-strong: "#257a0c"
  primary-subtle: "#46a01f"
  primary-edge: "#257a0c"
  primary-surface: "#ecfadc"
  signature: "#485cf9"
  signature-strong: "#3449a6"
  signature-surface: "#eef0ff"
  on-primary: "#1b2a0d"
  on-primary-strong: "#ffffff"
  accent: "#2b7f8a"
  accent-strong: "#1d5960"
  canvas: "#fafafc"
  surface: "#ffffff"
  surface-sunken: "#f6f7fa"
  surface-raised: "#f3f4f8"
  surface-hover: "#eaecf2"
  surface-inverse: "#15171f"
  text-strong: "#0c0d12"
  text: "#15171f"
  text-secondary: "#3a4052"
  text-muted: "#5a6175"
  text-link: "#1f6b12"
  border: "#d9dce5"
  border-subtle: "#e3e5ec"
  border-strong: "#7b8296"
  border-focus: "#257a0c"
  info-strong: "#1d5960"
  success-strong: "#185510"
  warning-strong: "#6f4a00"
  danger-strong: "#8a3128"
  on-status: "#ffffff"

typography:
  display:
    fontFamily: "'DM Sans', 'Pretendard Variable', Pretendard, ui-sans-serif, system-ui, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  title:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  heading:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  subheading:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  lead:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
  micro:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.3
  eyebrow:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: 11px
    fontWeight: 500
    letterSpacing: 0.1em
    textTransform: uppercase
  group-label:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 11px
    fontWeight: 600
    letterSpacing: 0.1em
    textTransform: uppercase
  stat-value:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.01em
    fontVariantNumeric: tabular-nums
  button:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
  mono:
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontWeight: 400

rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 5px
  lg: 7px
  xl: 9px
  pill: 999px

spacing:
  0: 0px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px

sizes:
  control-sm: 28px
  control-md: 36px
  control-lg: 44px
  border-width: 1px
  border-width-thick: 2px
  rule-width: 2px
  container-narrow: 768px
  container-default: 1200px
  container-wide: 1920px

elevation:
  none: none
  sm: "0 1px 2px rgba(0, 0, 0, 0.35)"
  md: "0 5px 12px rgba(18, 20, 22, 0.5)"
  lg: "0 20px 60px rgba(0, 0, 0, 0.6)"
  focus: "2px solid primary-strong, offset 2px"

motion:
  duration-fast: 120ms
  duration-normal: 200ms
  duration-slow: 320ms
  duration-ambient: 2.4s
  easing-standard: "cubic-bezier(0.2, 0, 0.2, 1)"
  easing-enter: "cubic-bezier(0.16, 1, 0.3, 1)"

density:
  comfortable: "16px type, 4px unit, 28/36/44px controls (default)"
  compact: "14px type, 3.5px unit, 24.5/31.5/38.5px controls (the labs)"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    height: "{sizes.control-md}"
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    border: "1px solid {colors.border-strong}"
    rounded: "{rounded.md}"
  button-tertiary:
    backgroundColor: "{colors.primary-surface}"
    textColor: "{colors.primary-strong}"
    border: "1px solid {colors.primary-subtle}"
  field:
    backgroundColor: "{colors.surface-sunken}"
    border: "1px solid {colors.border-strong}"
    rounded: "{rounded.md}"
    height: "{sizes.control-md}"
  card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
  card-selected:
    backgroundColor: "{colors.primary-surface}"
    border: "1px solid {colors.primary-subtle}"
  nav-item-active:
    backgroundColor: "{colors.primary-surface}"
    border: "1px solid {colors.primary-subtle}"
    textColor: "{colors.primary-strong}"
  run-tag:
    border: "1px solid {colors.border-strong}"
    textColor: "{colors.text-secondary}"
    textTransform: uppercase
    rounded: "{rounded.sm}"
  signal-dot:
    backgroundColor: "{colors.primary-strong}"
    size: "0.45em"
---

# restack design system

## Overview

**North star: the instrument console that has been running for years.**

The restack labs — [nccl-lab](https://nccl-lab.pages.dev), [parallel-training-lab](https://parallel-training-lab.pages.dev)
and [rdma-fabric-lab](https://rdma.restack.tech) — already share one visual world: a dark, compact,
inspectable console where the diagrams and the numbers are the content and everything around them
stays quiet. This system is that world written down: the tokens the three sites ship, the
components they keep rebuilding, and the rules that make a fourth lab look like a sibling rather
than a cousin.

It is a calm technical language for AI infrastructure — collectives, parallel training, fabrics,
serving — and it borrows its temperament from QuietFabric: confidence comes from clarity, not
volume. Nothing glows that is not live. Nothing is lime that is not actionable, selected or ready.

**Key characteristics**

- Dark is the default face; a light face re-points the same names onto paper.
- Depth is tone and hairline, not shadow. The page is the darkest thing on screen.
- One accent. Lime marks interaction and readiness; everything else is charcoal and slate.
- One signature. Indigo is the brand's atmosphere — a hero, the logo — and never does lime's job.
- Two typefaces with two jobs: DM Sans for the interface, IBM Plex Mono for technical truth.
- Compact rounded rectangles whose radius steps up with the size of the thing.
- The signal dot is the one geometric device.
- Colour is never the only carrier of meaning: a label always sits beside it.

**Where the truth lives.** `src/tokens/color.css`, `typography.css` and `space.css` are canonical; their
comments record where every number came from. This document explains the reasoning; if the two ever
disagree, the stylesheet wins and this file has a bug.

**Relationship to the labs.** The system started from the labs' stylesheets and has since moved past
them: the neutrals now carry a trace of the banner's indigo (the labs' are a greener grey), the selected
ground is a clearer lime, warning is amber rather than apricot, and the light face reads in fresh green
rather than olive. The labs are expected to adopt these values — this system is the reference now.

## Colors

**The neutrals are not grey.** Every step of the `gray` ramp sits on one hue — about 230°, the banner's
indigo — at very low chroma. It reads as charcoal until it is beside a true grey, and it is why the
signature glow belongs to the page instead of lying on top of it.

Three layers, and the layer is the contract.

- **Primitives** — `--restack-color-{gray,lime,cyan,orange,red,purple,…}-{step}`. Fixed hexes, the same in
  both faces. Product code never references them directly: they do not change when the face does.
- **Faces** — the semantic roles (`primary`, `surface`, `text-muted`, `border-strong`, …), declared once
  for dark on `:root` and once for light under `[data-restack-theme='light']`.
- **Derived** — tokens built from semantic roles (focus outline, selected halo). A `var()` inside a custom
  property resolves where it is declared, so these are restated on every themed root.

### Brand: lime

`lime-300` (#b2e879) is the brand. In the labs it is the primary button, the selected strategy, the
keyboard focus outline, the "ready" dot and the reduction transfer — one colour for "go".

Lime is a **fill first**, which is why brand has two roles:

| Role | Dark | Light | Job |
| --- | --- | --- | --- |
| `primary` | #b2e879 | #b2e879 | The fill: a primary button, a checked box, a selected cell |
| `primary-strong` | #b2e879 | #257a0c | Lime that must be read: a link, a focus outline, an icon, a dot |
| `primary-surface` | #1f3316 | #ecfadc | The selected ground |
| `primary-subtle` | #4f7a2e | #46a01f | The selected edge (3.33:1 on paper) |
| `primary-edge` | #b2e879 | #257a0c | The edge of a lime fill — what gives a lime button a boundary on paper |
| `on-primary` | #1b2a0d | #1b2a0d | Ink on the lime fill (10.63:1) |

On charcoal, the fill and the legible lime are the same hex. On paper the fill survives — dark ink on
it is 10.63:1 — but lime as text or as an edge is 1.43:1 against white, so `primary-strong` drops to
a clear green on the same hue (5.43:1) — fresh, not olive. **Reach for the role whose job you are doing**:
a lime border written with `primary` vanishes on the light face.

### Signature: indigo

The restack ai banner sets the wordmark over a near-black ground with a soft indigo glow. That glow is
the brand's own colour, and the system carries it as the **signature**: `signature` (#485cf9, the core),
`signature-strong` (#8595fa on charcoal, 6.54:1; #3449a6 on paper, 7.93:1) and `signature-surface`.
`--restack-gradient-signature` is the glow itself.

It appears in exactly three kinds of place: `Surface tone="signature"` (a hero, a splash, an empty
first run), `BrandLogo tone="signature"`, and editorial marketing surfaces built from those.

**Lime acts; indigo is atmosphere.** Nothing indigo is ever clickable, selected, focused or a status.
The moment indigo marks a button, a reader can no longer trust lime to mean "this is where you act".
A signature surface holds text and at most one primary (lime) action — never a form or a table.

### Accent: cyan

`accent` (#70c5d0 dark, #2b7f8a/#1d5960 light) is the second voice: information, gather and broadcast
transfers, parameters and forward compute. It is also the `info` status colour — information and the
second voice are the same thing in the labs.

### Surfaces

| Role | Dark | Light | Job |
| --- | --- | --- | --- |
| `canvas` | #0c0d12 | #fafafc | The page — the darkest (or lightest) thing on screen |
| `surface-sunken` | #101218 | #f6f7fa | Inset: sidebars, top bars, field wells, table heads |
| `surface` | #15171f | #ffffff | Panels and cards |
| `surface-raised` | #1c1f29 | #f3f4f8 | Nested panels, secondary buttons, chips |
| `surface-hover` | #252935 | #eaecf2 | Pointer state, progress tracks |
| `surface-inverse` | #e6e8ef | #15171f | The opposite face |

`Surface tone="brand"` and `tone="inverse"` **re-point the text family** for their subtree, so a default
`Heading` or `Text` placed on lime or on the opposite face stays legible without restating a tone on
every child.

### Text

| Role | Dark | on panel | Light | on white |
| --- | --- | --- | --- | --- |
| `text-strong` | #f3f4f8 | — | #0c0d12 | — |
| `text` | #e6e8ef | 14.61:1 | #15171f | 17.16:1 |
| `text-secondary` | #b5bbca | 9.30:1 | #3a4052 | 9.90:1 |
| `text-muted` | #9fa6b8 | 7.34:1 | #5a6175 | 5.92:1 |
| `text-subtle` | #8d94a8 | 5.91:1 | #5a6175 | 5.92:1 |

Headings take `text-strong`, one step brighter than body, as the labs set them. Every text role
clears 4.5:1 on every surface in its face.

### Borders

The split between `border` and `border-strong` is a contrast rule, not a taste one, and it is the
easiest thing in the system to get wrong.

- **`border`** (#303545 / #d9dce5) — container chrome: a panel, a card, a table rule, a divider. 1.47:1.
  Decorative edges carry no contrast floor, and the look is exactly this faint line.
- **`border-strong`** (#626a80 / #7b8296) — the boundary of an **interactive control**: a field, a select,
  a checkbox, a radio, a secondary button, a pagination button. WCAG 1.4.11 puts 3:1 on a control's
  visible edge. This stroke is 3.32:1 on a panel and 3.60:1 on the page; the light-face step
  measures 3.84:1.
- **`border-subtle`** (#252935 / #e3e5ec) — the faintest hairline: a header's bottom edge, a row rule.
- **`border-focus`** — `primary-strong`.

A control's edge never takes `border`.

### Status

Three roles per status, as everywhere in the system:

- `<status>` — the fill: a progress bar, a chart series.
- `<status>-strong` — legible: text, an icon, an edge, a solid badge ground.
- `<status>-surface` — the tinted ground a `-strong` label sits on.

`on-status` is the text set on any `-strong` fill — charcoal on the dark face, white on paper.

**Warning is amber, danger is salmon.** They are held apart in hue and in lightness (amber is the
lighter), so a small warning dot and a small danger dot are told apart at a glance.

**Success is lime — so selection and success differ by shape.** In the labs a passing check, a ready
state and a primary action share one hue because all three mean "go". To keep a selected row and a
passing row apart when they sit side by side:

- **Selection is boxed**: a tinted ground and an edge (`primary-surface` + `primary-subtle`).
- **Success is never boxed**: a dot and the word, with nothing around them. `Badge tone="success"` in
  its default variant renders exactly that, and adds the dot itself.

And the labelled-colour rule still applies: the word beside the colour says which "go" it is.

### Data

`viz-1…7`: lime and cyan first — the two phase colours (reduce, gather) — then apricot, orchid, straw,
rose and sage. Orchid sits about 57° from the signature indigo, so a data series is never mistaken for
a brand surface. Take them in sequence.
The light face carries darker counterparts of each.

**The labelled-colour rule.** A hue alone never explains whether a tensor is owned, an operation is
running or a series is a category. Keep labels, legends and ownership text beside colour.

## Typography

### Two faces, two jobs

- **DM Sans** — the interface: headings, labels, prose, controls. Ships as one variable file (Latin +
  Latin Extended, weight axis 100–1000), base64-inlined into `style.css`.
- **IBM Plex Mono** — technical truth: figures, units, identifiers, commands, addresses, computed values,
  and the uppercase eyebrow. Ships at 400 and 500.

A number a reader might compare or copy is mono. Prose never is. `StatCard` figures, numeric `Table`
columns, `Tag`, field affixes, `Pagination` and `SectionLabel` are mono by construction; `<Text mono>` is
the escape hatch for everything else.

The sans stack carries Korean fallbacks after DM Sans (`Pretendard Variable`, `Pretendard`,
`Apple SD Gothic Neo`, `Noto Sans KR`). DM Sans has no Hangul, so the browser takes each glyph from the
first face that has it: Latin stays DM Sans, Hangul lands on a Korean sans instead of a serif default.
Pretendard comes straight after DM Sans, ahead of `system-ui`: on Windows and Linux `system-ui` already
resolves Hangul (Malgun Gothic, Noto Sans CJK), so a Korean face listed after it is never reached. The
system does not ship Pretendard; a Hangul-heavy host loads it, and the stack picks it up.

### Hierarchy

| Token | Size | Weight | Use |
| --- | --- | --- | --- |
| `display` | 34px | 600, −0.02em | Page title — `Heading level={1}` |
| `title` | 24px | 600, −0.02em | Section title — `level={2}`, stat figures (mono) |
| `heading` | 20px | 600 | `level={3}` |
| `subheading` | 18px | 600 | `level={4}`, run titles |
| `lead` | 17px | 400 | Intro copy — `level={5}` |
| `body` | 16px | 400 | Prose, large controls |
| `small` | 14px | 400 | Controls, nav, table cells, alerts |
| `caption` | 12px | 400 | Hints, captions, units |
| `micro` | 11px | 400–600 | Eyebrows, group labels, tags — the labs' label size |

Headings are **semibold and never heavier** — the labs title at 580–630, and weight above that turns a
calm console loud. Negative tracking only on `display` and `title`; uppercase labels open up to 0.1em.

### The scale is calc(), not rem

Every step is a multiple of one `--restack-font-size-base`. A rem resolves against the document root,
so a rem ramp can only be retuned by restyling `<html>`. Routing it through one property is what lets
`<ThemeProvider fontSize="13px">` give a console region the labs' density (13px body, 11px labels)
while the docs around it stay at 16px. Spacing is a separate axis and does not follow.

## Layout

- **One unit.** Every `space-*` step and every control height is a multiple of `--restack-space-unit`
  (4px by default), the same way the type scale runs off one base.
- **Controls** are 7 / 9 / 11 units — 28 / 36 / 44px; md is the labs' 36px field.
- **Density.** `<ThemeProvider density="compact">` sets 14px type on a 3.5px unit: where the labs sit.
  Type, spacing and control heights tighten together, so a console region is dense without a single
  overridden gap. `comfortable` (16px / 4px) is the default and suits docs and marketing.
- **Containers**: `narrow` 48rem (rdma-fabric-lab's reading measure), `default` 75rem, `wide` 120rem (the
  labs' 1920px workspace cap), `full`.
- **Grid gap md is 12px** — the labs' grid gap — while Stack gap md stays 16px.
- **720px** is the mobile break: `Grid responsive` stacks in reading order below it.

**The console shell** — the labs' composition, in order: a persistent rail (inset tone, wordmark,
workspace, nav with group labels and counts), a context bar (breadcrumb left, status dot and docs link
right, one hairline below), a page heading with its file actions, a configuration strip of labelled
fields with mono-friendly hints, the workspace (diagram panel + inspector), metric cards, and a sticky
playback bar. Below 960px the rail leaves; below 720px everything stacks.

## Elevation & Depth

Depth comes from adjacent charcoal tones and one-pixel lines. `canvas → surface-sunken → surface →
surface-raised → surface-hover` is the whole elevation model for resting UI. Most containers stay flat.

Shadows are declared **per face** in `color.css`, because a shadow that reads on charcoal is a smudge on
paper. Only two things float: the sticky playback bar (`shadow-md`) and the dialog (`shadow-lg`).

**Selection** brightens an edge and tints a ground: `primary-subtle` edge, `primary-surface` fill, and
an optional whisper of lime around it (`--restack-shadow-selected`). Unrelated content dims rather than
disappears.

### Motion

Motion explains flow, state or hierarchy, or it is removed.

| Token | Value | Use |
| --- | --- | --- |
| `duration-fast` | 120ms | Hover, press, a border changing colour, a tooltip |
| `duration-normal` | 200ms | A progress fill, a drawer, a selection moving |
| `duration-slow` | 320ms | An entrance — the dialog rising 8px into place |
| `duration-ambient` | 2.4s | The live dot's pulse; traffic along a link |

`easing-standard` for state changes; `easing-enter` (fast out, long settle) for entrances. No bounce,
no overshoot. Exits are instant or `fast` — a thing leaving should not hold the reader.

- A **live dot** pulses only while something is actually running.
- A **flow line** (dashes travelling a link) appears only on a link that is carrying data in the current
  step, and runs in the direction the data moves.
- A **playback cursor** moves linearly: it is a clock, not an object with weight.
- Under `prefers-reduced-motion`, pulses, flows and entrances stop; state changes become immediate.

**Focus** is not a glow: a 2px outline in `primary-strong`, held 2px off the control. Fields, whose
edge is already a stroke, turn that edge lime and thicken it to 2px instead.

**Disabled** fades to 45% and keeps its place. The labs fade to 35%, where a label on charcoal falls to
about 2:1 and stops being readable; 45% is still plainly off.

## Shapes

| Radius | px | Use |
| --- | --- | --- |
| `xs` | 2 | Timeline events, focus corners |
| `sm` | 3 | Cells, tags, badges |
| `md` | 5 | Controls — buttons, fields, segmented tabs |
| `lg` | 7 | Panels, cards, tables, alerts |
| `xl` | 9 | Dialogs, app frames |
| `pill` | 999 | Dots, switches, progress tracks |

The radius follows the size of the thing, so nothing small looks inflated and nothing large looks
sharp. Rounding a card to 16px reads as a softer, different product.

**Icons** are Lucide — what the labs use — drawn at 1.75px with round caps, 12–19px in working
controls. `<Icon name>` ships a curated slice, copied in at author time (`npm run icons`), so there is
still no runtime dependency. The one filled glyph is Play. No emoji, no large decorative illustration:
the diagrams and the numerical traces are the visual material.

## Diagrams & data

The labs' diagrams are the content, so they follow the same rules as the chrome around them.

- **Nodes** are panels: `surface` fill, `border-strong` edge, `radius-lg`, a mono label. The selected
  node takes the selection vocabulary (lime ground, lime edge).
- **Links** are 1px `border` lines. A link carrying data in the current step becomes a dashed flow line
  in the phase colour — lime for reduce, cyan for gather/broadcast — and nothing else animates.
- **Timeline events** are `radius-xs` cells with a tinted ground, a matching edge and a short mono
  label: cyan for compute, lime for communication, amber for waiting. The selected event gets a full
  `primary-strong` edge; unrelated events dim rather than disappear.
- **Lanes** carry a faint dotted plotting texture (`border-subtle`, 8px) so empty time reads as time.
- **Series** take `viz-1…7` in order, are always labelled directly or in a legend, and never rely on
  hue alone. Axes and gridlines are `border-subtle`; tick labels are mono `micro` in `text-muted`.
- **Figures** beside a diagram say what they are: modeled time is labelled modeled.
- A wide timeline scrolls inside a focusable region on small screens; it is not squeezed.

**The signal dot** is the one geometric device: after a product wordmark ("NCCL **Lab**•"), before an
eyebrow ("● EXPLAIN, SHOW, THEN DO"), at the head of a status line ("● Runs in your browser"), at the
trailing edge of a selected nav item. It is `primary-strong` unless it carries a status.

## Brand

**The signature** is the restack ai wordmark — rounded geometric lowercase whose "a" is a smiling,
sprouting face. `<BrandLogo />` ships it as a single-colour alpha mask over `currentColor`, so one asset
draws it off-white on charcoal, charcoal on paper, or lime anywhere. `variant="mark"` is the face alone,
for square and narrow slots. In a top bar, use `size="sm"`.

- `tone="default"` (text-strong) is the normal signature. `signature` (indigo) is for a footer or a
  splash. `primary` (lime) only where nothing else is lime. `mono` inherits.
- The shipped artwork is a 232px-high raster mask cut from the banner — sharp to about 77px tall on a
  3× display. Replace it with the vector original when one is available; nothing else changes.
- Give the lockup clear space of at least the face's width on every side.
- The face mark is the system's warmth: use it in an `EmptyState` (`icon={<BrandLogo variant="mark"
  tone="signature" />}`) rather than a generic glyph.
- Never recolour it outside the tones, never put it on a busy image, never rebuild it from text.

**Product names** use `<Wordmark>`: semibold DM Sans in `text-strong`, the last word in lime, the signal
dot raised after it — exactly how the labs set "NCCL Lab", "Parallel Lab", "RDMA Fabric Lab". The
company signature is `BrandLogo`; a tool or lab is a `Wordmark`.

## Components

Forty-nine, one entry. Every component styles itself from `styles.css`; no provider is required.

### Brand
- **BrandLogo** — the signature. `variant="lockup|mark"`, `tone="default|primary|mono"`, `size`, `wordmark`, `tagline`.
- **Wordmark** — a product name in the labs' style. `accent` is the lime trailing word; `dot` (default on).
- **Dot** — the signal dot. `tone`, `size`, `live` (slow pulse, off under reduced motion). With children it
  becomes a status line; without, it is decorative and hidden from assistive tech.
- **Icon** — a Lucide glyph by `name`; follows the text size; `label` makes it meaningful, otherwise hidden.
- **BrandHeader** — the top bar over one hairline. `logo`, `title` (after a hairline), children (nav),
  `actions`, `sunken`, `sticky`.

### Layout
Container, Stack, Grid, Surface, Divider. `Surface tone="brand|inverse"` re-points the text family for
its children; `tone="signature"` is the banner's indigo glow.

### Typography
- **Heading** — semibold, `text-strong`. `tone="default|brand|accent|inverse|muted"`, `marker` (leading dot), `suffix`.
- **Text** — `size`, `tone`, `bold` (semibold), `numeric` (tabular), `mono`.
- **SectionLabel** — the label under a heading: sentence case by default, with the signal dot and an
  optional `meta`. `face="mono"` is the uppercase eyebrow — once per page section, so the interface does
  not read like a terminal.

### Actions
- **Button** — `primary` is the one lime fill per view; `secondary` is the labs' neutral utility button
  (raised fill, control edge); `tertiary` is the selected-item look; `ghost`; `danger`. Disabled fades to 45%.
- **IconButton** — same skins, `label` required. **Link** — lime, underline offset 0.2em.

### Forms
Field, Input, Textarea, Select, Checkbox, Radio, Switch, Slider. `Slider` is the playback scrubber — a
native range with a lime fill and a mono readout. Controls sit on the sunken ground with the
control edge; hover lightens the edge, focus turns it lime. Field hints carry ranges and units in the
muted voice ("2–16 GPUs · one rank each"); input affixes are mono.

### Data display
- **Card** — the workspace panel. `tone="brand"` is the selected panel; `accent` runs the 2px lime rule
  down the leading edge.
- **StatCard** — sans label, large mono figure, mono unit and caption — rdma-fabric-lab's run figures.
- **Badge** — `solid | subtle | outline`; outline is the labs' uppercase run tag; default success is an
  unboxed dot and word.
- **Kbd** — a keycap. **CodeBlock** — a recorded excerpt or command on the sunken ground; `<b>` is the
  lime emphasis, `<i>` the muted comment; no syntax highlighter.
- **Tag** — a mono identifier chip. **Table** — quiet sunken head, hairline rows, numeric columns mono.
- **DescriptionList** — the inspector rows. **List** — `marker="dot|arrow|dash|number|none"`; arrow is
  the "→" of an operation sequence. **NotePanel** — a 2px rule, not a box. **ProgressBar**.

### Feedback
Alert (tinted ground, line glyph, 2px status edge), Spinner, Skeleton, EmptyState.
- **Tooltip** — a phrase on hover and keyboard focus, linked with `aria-describedby`; supplements a label.
- **Dialog** — native `<dialog>` modal: the largest radius, the heaviest shadow, a dimmed blurred backdrop.

### Navigation
- **Sidebar / NavGroup / NavItem** — the console rail. An active `NavItem` is the selection vocabulary in
  its purest form (lime ground, edge, text, trailing dot) and sets `aria-current`.
- **Tabs** — `underline` (2px lime selection line) or `segmented` (parallel-training-lab's strategy
  selector: one shell, hairline-divided segments, active one tinted and underlined).
- Breadcrumb (line chevron), Pagination (mono), Stepper (mono numerals; lime when done).

### System
- **ThemeProvider** — `theme="dark|light"` scopes a face; `density="compact|comfortable"` moves type and
  spacing together; `fontSize` rebases only the type scale; `tokens`
  overrides tokens for a subtree. Dark needs no provider. For the whole document, set
  `data-restack-theme="light"` on `<html>`.

## Content

The labs' voice: precise, explanatory, quietly confident.

- **Sentence case** for headings, buttons and labels ("Share configuration", "Step inspector").
- **Uppercase** only for the section eyebrow, sidebar group labels and run tags — set by the component,
  never typed in caps, and never on every panel.
- **Technical truth verbatim** — commands, identifiers, units in mono, lowercase as the tool prints them
  (`ibv_reg_mr`, `make report STRICT=1`, `186.3 GB/s`).
- **Say what a number is.** Modeled time is labelled modeled; a measured figure names its run.
- **No hype, no emoji.** "See how data moves. Understand what makes it fast." — not "Supercharge your
  clusters".

## Do's and Don'ts

**Do**
- Keep one lime fill per view; let everything else be charcoal and slate.
- Put a label beside every colour that carries meaning.
- Set figures, units and identifiers in mono, and align numeric columns right.
- Give every control edge `border-strong`, and every legible lime `primary-strong`.
- Build depth from tone steps; reserve shadows for the sticky bar and the dialog.
- Respect reduced motion: the live dot and the flow animations stop.

**Don't**
- Don't introduce a second accent hue for interaction — cyan informs, indigo sets the scene, neither acts.
- Don't box a success state or leave a selection unboxed.
- Don't use `primary` for lime text or edges; it disappears on paper.
- Don't set headings bolder than 600 or prose in mono.
- Don't round panels past 9px, or add glass, gradients or glows to resting UI.
- Don't write `.restack-*` class names or literal hexes in product code — use props and `var(--restack-*)`.
