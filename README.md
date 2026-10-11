# shatynskyj.in.ua

Static site for «Сталеве небо» — art forging in Drohobych.

- `public/` — the site (plain HTML/CSS/JS, no build step). Projects are listed in `public/index.html`; each project's photos live in `public/images/projects/<id>/0..N.jpg`, and `data-count` on its cover is N.
- `Dockerfile` + `nginx.conf` — image served by unprivileged nginx on port 8080.
- `docker-compose.yml` — what the host runs behind the platform's Traefik (`platform_edge` network).
- `.github/workflows/deploy.yml` — on push to `main`: build `ghcr.io/shatynska/shatynskyj:<sha>`, then deliver the compose file to the Hetzner host over Tailscale (see `shatynska/infrastructure`, `docs/onboard-an-application.md`).

Run locally:

```sh
docker build -t shatynskyj:local . && docker run --rm -p 8080:8080 shatynskyj:local
```
