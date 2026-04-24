# Agent Guidelines for Torn Tools

## Package Management

**Always use `pnpm` for dependency management** (npm install, adding packages, etc.).

## Build Commands

```bash
# Development server with HMR
pnpm run dev

# Production build (TypeScript check + Vite build)
pnpm run build

# Lint all files
pnpm run lint

# Preview production build
pnpm run preview

# Add a dependency
pnpm add <package>

# Add a dev dependency
pnpm add -D <package>
```

## Testing

No test framework is currently configured. To add tests, consider using Vitest or Jest with appropriate plugins.

## Project Structure

```
src/              # React components and source code
public/           # Static assets (served at root)
node_modules/     # Dependencies (do not edit)
dist/             # Build output (generated, ignored by git)
```

## Code Style Guidelines

### TypeScript Configuration
- Target: ES2023
- Module resolution: Bundler mode
- Strict mode enabled via `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- `verbatimModuleSyntax` enabled - must use `import type` for type-only imports

### Import Conventions

```typescript
// Type-only imports MUST use `import type`
import type { FC } from 'react'
import type { Props } from './types'

// Regular imports remain unchanged
import { useState } from 'react'
import { someFunction } from './utils'

// All imports must be explicit (no namespace imports)
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `UserProfile.tsx` |
| Hooks | camelCase starting with `use` | `useAuth.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types/Interfaces | PascalCase | `UserData`, `ApiResponse` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |

### File Structure
- One component per file for React components
- Group related utilities in single files (e.g., `api.ts` for API-related functions)
- Use `index.ts` for re-exports when appropriate

### JSX/React Patterns

```tsx
// Component file structure
import { useState } from 'react'
import type { Props } from './types'
import './Component.css'

export function Component({ title, onClick }: Props) {
  const [count, setCount] = useState(0)

  return (
    <div className="component">
      <h1>{title}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}
```

### Error Handling
- Use try/catch for async operations
- Provide meaningful error messages
- Avoid silently catching errors

```typescript
// Good
try {
  const data = await fetchData()
} catch (error) {
  console.error('Failed to fetch data:', error)
  throw new Error('Data fetch failed', { cause: error })
}
```

### CSS/Styling
- Use CSS files imported alongside components
- Follow existing naming patterns (BEM-like or component-scoped)

## Linting

ESLint is configured with:
- `@eslint/js` - Recommended JS rules
- `typescript-eslint` - TypeScript support
- `eslint-plugin-react-hooks` - React hooks rules
- `eslint-plugin-react-refresh` - Vite HMR compatibility

The `dist` folder is ignored by ESLint.

### Running Lint
```bash
pnpm run lint  # Lints all .ts/.tsx files
```

## TypeScript Compiler

```bash
# Type check only (no emit)
tsc --noEmit

# Full build (type check + bundle)
pnpm run build
```

## Accessibility

- Use semantic HTML elements
- Include `alt` text for images or empty string for decorative
- Use `role` and `aria-*` attributes appropriately
- Ensure keyboard navigation works

## Git Workflow

- Write clear commit messages describing the "why" not just the "what"
- Keep commits focused and atomic
- Run `pnpm run lint` and `pnpm run build` before committing when possible

## Dependencies

- React 19.2.5 with TypeScript
- Vite for bundling and dev server
- ESLint for linting
- pnpm for package management
- No testing framework currently installed