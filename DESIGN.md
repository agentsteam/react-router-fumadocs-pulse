# Pulse: original shadcn-based design

Dense violet workspace with rendering code and compact destination rows. Component geometry, density and states come from **Mira**, using Base UI primitives. This is an independent design for the existing generic starter.

## Reproducible preset

- [Preset builder](https://ui.shadcn.com/create?base=base&style=mira&baseColor=zinc&theme=violet&iconLibrary=lucide&font=inter&rtl=true&menuAccent=subtle&menuColor=default&radius=default)
- Generator: shadcn **4.21.4**, reviewed 2026-10-12. Upstream GitHub commit at review: `30a58d4498f270af1c1e981a7d78a15cf5740841`.
- Config: `base-mira`; base color `zinc`; theme `violet`; font `inter`; Lucide; RTL enabled; menu color default; menu accent subtle; preset radius default.
- Exact preset inputs, upstream tokens, adapted tokens and component hashes: [DESIGN-PRESET.json](DESIGN-PRESET.json). Generated source is checked in; no runtime preset loader.
- Components: button, dropdown-menu, sonner, card. Generator diffs reviewed before overwrite. Existing `@/lib/utils` helper replaces generated `cn` package imports; React Router links use generated `buttonVariants` to retain native link semantics.

## Tokens, typography and spacing

- Official preset supplies semantic light/dark background, card, popover, accent, border and sidebar tokens. Colored primary lightness and muted text adjusted for AA contrast; sidebar primary follows primary. Dark actions use light accents with dark foregrounds. Ring follows primary. Exact overrides appear in preset JSON.
- Inter Variable headings and body/UI. Existing system monospace for code. No new font packages.
- Body 16px; supporting copy 14px; metadata 13px. Shadcn controls retain selected style’s size scale. Homepage heading 36px mobile, up to 44px desktop; reading headings up to 44px.
- Use generated Card `--card-spacing` for panels. Page spacing follows 4/8/12/16/24/32/48/64px; gutters 16px mobile, 24px desktop.
- Generated controls/cards own radius and shadows. `--surface-radius` bridges selected card shape to Fumadocs, skip link and toast surfaces. Do not replace generated rounded classes with generic custom CSS.

## States and responsive behavior

- Hover: generated shadcn accent/primary states. Active navigation: primary + font weight. Keyboard focus: visible 2px outline; retain Base UI menu behavior and Fumadocs search.
- Navigation, theme trigger and homepage actions have 44px minimum targets. Generated menu density remains intact. Skip navigation reaches main content; RTL uses logical spacing.
- Below 768px, navigation moves to a second row; destination columns stack. Split introductions collapse below 1024px. Code scrolls inside its own panel; no page-wide overflow.
- Preserve Light/Dark/System persistence, search results/loading/empty states, Markdown copy and errors. Reduced motion suppresses generated transitions/animations. No added entrance animations.

## Composition and editing contract

Dense violet workspace with rendering code and compact destination rows. Layout CSS only arranges components; generated shadcn classes own controls and destination surfaces. All pages use semantic tokens through `apps/web/src/index.css`, including docs/search, blog/articles, minimal dashboard, 404 and errors.

Preserve MDX, routes, loaders, static search at `/_search`, LLM/Markdown exports, public prerendering and dashboard CSR fallback. No invented product features, services or runtime design switcher.

## Attribution and licenses

- [shadcn/ui](https://github.com/shadcn-ui/ui): selected Base UI registry components and preset tokens, MIT; see [SHADCN-LICENSE.txt](SHADCN-LICENSE.txt).
- Secondary composition reference: [linear analysis](https://getdesign.md/linear/design-md), [VoltAgent source](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/linear/DESIGN.md), MIT; see [DESIGN-LICENSE.txt](DESIGN-LICENSE.txt). Brand names identify references only; colors, typography and components are not replicas.

Former folder: `react-router-fumadocs-linear`. New folder: `react-router-fumadocs-pulse`.
