# React Router + Fumadocs: Pulse

Original Mira / Base UI design. Dense violet workspace with rendering code and compact destination rows.

Customer-editable frontend template using React Router Framework Mode, Vite Plus, Tailwind CSS, and Fumadocs.

## Local development

```bash
bun install
bun run dev
```

Application checks and production build:

```bash
bun run typegen
bun run typecheck
bun run lint
bun run build
```

## Deployment

Deployment and hosted previews are managed by the platform.

## Design customization

Read [DESIGN.md](DESIGN.md) for palette, typography, layout, and responsive rules. Theme tokens and page classes live in `apps/web/src/index.css`; homepage composition lives in `apps/web/src/routes/home.tsx`. Keep generic branding in `apps/web/src/lib/shared.ts`.

Light, dark, and system modes use the existing theme control. Generated shadcn components define controls and panels; semantic tokens bridge Fumadocs. See DESIGN-PRESET.json for reproducible settings.

## Template rendering

Platform generation renders `package.json.hbs` and `bun.lock.hbs` using `projectName`. For standalone local use, copy them to `package.json` and `bun.lock`, replacing every `{{projectName}}` with your project name before running the commands above.
