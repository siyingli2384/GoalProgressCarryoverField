# Spanish Learning

React + Vite vocabulary app with a small Node backend for Prolific study tracking.

## Run Locally

```bash
npm install
npm run dev
```

This starts:

- React app: `http://127.0.0.1:5173`
- Backend API/admin server: `http://127.0.0.1:3001`

## Local Site Nicknames

- `rigid-1`: `http://127.0.0.1:3003`
- `rigid-2`: `http://127.0.0.1:3001`
- `headstart-1`: `http://127.0.0.1:3004`
- `headstart-2`: `http://127.0.0.1:3002`

Start a duplicated site with:

```bash
npm run server:rigid-1
npm run server:headstart-1
npm run server:headstart-2
```

`rigid-1` stores progress separately in `server-data/progress-rigid-1.json`.
`headstart-1` stores progress separately in `server-data/progress-headstart-1.json`.
`headstart-2` stores progress separately in `server-data/progress-headstart-2.json`.

## Progress Dashboard

Open:

```text
http://127.0.0.1:3001/admin
```

The backend stores participant progress in `server-data/progress.json`.

For deployment, set an admin password:

```bash
ADMIN_PASSWORD=your-secret-password npm run preview
```

Then open:

```text
/admin?key=your-secret-password
```

## Recorded Data

For each Prolific ID, the backend records:

- learned word count
- completed module count
- active learning time
- module-level time
- completed module dates
- started module dates
- challenge start date
- last updated time
