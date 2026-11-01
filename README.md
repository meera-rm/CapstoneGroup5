## Welcome to ScholarSheep!- CapstoneGroup5



![Scholar Sheep](asset/img/ScholarSheep.png)

### Team Members
### Meera Ramesh
### Taryne Leach
### Derek Peterson
### Important Links

- [Deployed API server ](https://scholarsheep.onrender.com/)
- [Delpyed Front-End ](https://readinglog.netlify.app/)

- [Trello ](https://trello.com/b/xEt8mcfz/reading-app)
- [Wireframe](https://whimsical.com/scholar-sheep-HvM2SyXKVAXAuC28BCXtKs)
- [ERD](https://miro.com/app/board/uXjVPEOVPts=/)


## Overview

Our mission at Scholar Sheep is to encourage children to have a passion for reading. Education is very important and we must instill this in our children at a young age. We want to make it easier for teachers to engage and keep track of students reading outside of the classroom. We also want to encourage parents to read along with their children. There are many benefits to reading with your children. Children perform better when parents take an active role in their education.

### Getting Started

If you want to run our app locally, you must fork and clone this repository.

## Front End Set Up

You must have a seperate terminal to run the front end locally and must run simultaneously as the back end terminal.

- cd front-end
- touch .env
- npm install
- npm start

- npm install - install npm packages
- npm start - run / view front end locally

## .env

REACT_APP_API_URL=http://localhost:3000

## Back End Set Up

You must have a seperate terminal to run the back end locally and must run simultaneously as the front end terminal.

- cd back-end
- touch .env
- npm install
- node server.js

## .env

- PORT=3010
- PG_HOST=localhost
- PG_PORT=5432
- PG_DATABASE=" "

- npm install - install npm packages
- npm run db:init - initialize database and create tables
- npm run db:seed - seed the tables with some data
- node server.js - runs the back end server

## Deployment

Our app is deployed with Render for the back end and Netlify for the front end. You may choose to use different hosting sites.



## Migrating from Create React App to Vite

### 1. Replace react-scripts with Vite
```bash
npm uninstall react-scripts
rm -rf node_modules package-lock.json
npm install
npm install -D vite@7 @vitejs/plugin-react@4
```

**Dependency notes**
- `react-external-link` is pinned to exactly `2.5.0` (no `^`). Versions 2.6.0 and later need React 19, and this app uses React 18.
  ```bash
  npm install react-external-link@2.5.0 --save-exact
  ```
- We use Vite 7 with `@vitejs/plugin-react` 4. Plugin 6 (for Vite 8) pulls in optional Babel 8 packages that conflict with the Babel 7 setup used by `styled-components`.
- Don't use `--force` or `--legacy-peer-deps`; they hide version conflicts instead of fixing them.

### 2. Add `vite.config.js` (project root)
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: { outDir: 'build' },
});
```

### 3. Move `index.html` to the project root
```bash
git mv public/index.html index.html
```
- Remove every `%PUBLIC_URL%`.
- Add before `</body>`:
  ```html
  <script type="module" src="/src/index.jsx"></script>
  ```

### 4. Rename files that contain JSX from `.js` to `.jsx`
```bash
# preview
grep -rlE "</|/>" src --include="*.js"
# rename
grep -rlE "</|/>" src --include="*.js" | while read f; do git mv "$f" "${f%.js}.jsx"; done
# find imports that still end in .js
grep -rnE "from ['\"]\..*\.js['\"]" src
```

### 5. Rename environment variables
| Create React App | Vite |
|---|---|
| `REACT_APP_API_URL` | `VITE_API_URL` |
| `process.env.REACT_APP_API_URL` | `import.meta.env.VITE_API_URL` |

```bash
grep -rn "process.env" src/
```
Rename them in `.env` **and** in the Netlify environment variables.

### 6. Update the `package.json` scripts
```json
"dev": "vite",
"start": "vite",
"build": "vite build",
"preview": "vite preview"
```

### 7. Run and build
```bash
npm run dev       # local dev server on http://localhost:3000
npm run build     # production build into build/
npm run preview   # serve the production build locally
```

### 8. Netlify
- Build command: `npm run build`
- Publish directory: `build`
- `public/_redirects` contains `/*  /index.html  200` for React Router


### 9. Post-migration fixes

#### Imports that still end in `.js`
After renaming files to `.jsx`, imports like `from "../Dictionary/Meanings.js"` break with
`Failed to resolve import ... Does the file exist?`

Fix the ones Vite reports, or point them at the `.jsx` file:
```js
import Meanings from "../Dictionary/Meanings.jsx";
```
Find remaining ones:
```bash
grep -rnE "from ['\"]\..*\.js['\"]" src
```

#### `process is not defined`
Vite has no `process` in the browser. Replace CRA env access in every file:
```bash
grep -rl "process.env.REACT_APP_" src | xargs sed -i '' 's/process\.env\.REACT_APP_/import.meta.env.VITE_/g'
grep -rn "process.env" src/   # should print nothing
```
- `process.env.NODE_ENV` → `import.meta.env.MODE` (or `import.meta.env.DEV` / `import.meta.env.PROD`)

#### `.env` (project root)
```
VITE_API_URL=https://capstone-group5-backend.vercel.app/api
```
- For a local backend: `VITE_API_URL=http://localhost:3010/api`
- Restart `npm run dev` after editing `.env` (Vite reads it only on startup).
- Set the same `VITE_API_URL` in Netlify → Site configuration → Environment variables.
- Only public values belong in `VITE_` variables; they are bundled into browser JavaScript.

#### Octokit: `global is not defined` / `Module "stream" has been externalized`
`@octokit/core` v4 and older use Node-only `node-fetch`. Upgrade to a version that uses the browser's `fetch`:
```bash
npm install @octokit/core@latest
```
No token in the frontend. In `src/Pages/About/AllCommitsOfAUser/CommitHistory.jsx`:
```js
const octokit = new Octokit();   // public repo data works without auth
```
(Temporary alternative if you can't upgrade: add `define: { global: 'globalThis' }` to `vite.config.js`.)

#### Sass deprecation warnings (`darken()`, `lighten()`)
These are warnings only; styles still work. To silence them, in `vite.config.js`:
```js
css: {
  preprocessorOptions: {
    scss: { silenceDeprecations: ['global-builtin', 'color-functions', 'import'] },
  },
},
```
Long-term fix: `npx sass-migrator module --migrate-deps src/**/*.scss`

#### React Router v7 future-flag warnings
In `src/index.jsx`, opt in to the v7 behavior early:
```jsx
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
```
Check for splat routes (`path="something/*"`) and test their links:
```bash
grep -rn 'path="[^"]*\*' src/
```

#### Final check
```bash
npm run dev       # http://localhost:3000
npm run build     # production build into build/
npm run preview   # serve the production build locally
```