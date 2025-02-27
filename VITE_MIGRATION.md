# CRA to Vite Migration

This project has been migrated from Create React App to Vite.

## New Commands

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the built application

## Environment Variables

- All environment variables have been renamed from `REACT_APP_*` to `VITE_*`
- In your code, replace `process.env.REACT_APP_*` with `import.meta.env.VITE_*`

## Major Changes

- The entry point is now `/index.html` in the project root (moved from `public/`)
- Static assets remain in the `public/` directory
- SVG imports now use `?react` suffix for component usage

## TypeScript Changes

If you're using TypeScript:
- Types for environment variables are in `src/types/environment.d.ts`
- Updated `tsconfig.json` with Vite-specific settings

For more information, see the [Vite documentation](https://vitejs.dev/guide/).
