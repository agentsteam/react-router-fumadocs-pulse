# Application constraints

- Do not add React Router runtime SSR, `react-router-serve`, Cloudflare Pages, or a Node production server.
- Keep Fumadocs static search at `/_search`.
- This template contains no backend. Do not introduce Hono or frontend routes under `/api`.
- Deployment and hosted previews are managed externally by the platform. Do not add deployment configuration, Worker wrappers, Wrangler files, Cloudflare credentials, or infrastructure-management scripts to this repository.
- Do not revert unrelated changes made by concurrent agents.
