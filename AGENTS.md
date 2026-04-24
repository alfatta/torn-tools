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

## Context/Provider Pattern

This project follows a specific pattern for creating React contexts and providers:

### Hooks (`src/hooks/use-*.ts`)
Create the context and custom hook:

```typescript
import { createContext, useContext } from "react"

export type MyFeature = "value1" | "value2"

export interface MyFeatureContextType {
  value: MyFeature
  setValue: (value: MyFeature) => void
}

const MyFeatureContext = createContext<MyFeatureContextType | undefined>(undefined)

export function useMyFeature(): MyFeatureContextType {
  const context = useContext(MyFeatureContext)
  if (!context) {
    throw new Error("useMyFeature must be used within a MyFeatureProvider")
  }
  return context
}

export { MyFeatureContext }
```

### Providers (`src/providers/*.tsx`)
Create the provider component with state management:

```typescript
import { useState, useEffect } from "react"
import { MyFeatureContext } from "~/hooks/use-my-feature"

const STORAGE_KEY = "my-feature-key"

export function MyFeatureProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEY) ?? "default"
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, value)
  }, [value])

  return (
    <MyFeatureContext.Provider value={{ value, setValue }}>
      {children}
    </MyFeatureContext.Provider>
  )
}
```

### Usage
1. Add provider in `src/main.tsx` wrapping the app
2. Use the hook anywhere in the app: `const { value, setValue } = useMyFeature()`

## API Pattern

Services are organized by feature in `src/services/`:

```
src/services/
├── apiClient.ts           # Base client with HTTP methods
└── <feature>/
    ├── types.ts          # TypeScript interfaces
    ├── fetch.ts        # Fetcher function using api client
    └── index.ts        # React Query hook
```

### apiClient.ts
Core client with error handling and generic methods:

```typescript
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions<TBody = unknown> {
  method?: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

export class ApiError<T = unknown> extends Error {
  status: number;
  data?: T;
}

export class ApiClient {
  private baseUrl: string;
  private getToken?: () => string | null | Promise<string | null>;

  get<TResponse>(endpoint: string, options?: RequestOptions)
  post<TResponse, TBody>(endpoint: string, body?: TBody, options?: RequestOptions<TBody>)
  put<TResponse, TBody>(endpoint: string, body?: TBody, options?: RequestOptions<TBody>)
  patch<TResponse, TBody>(endpoint: string, body?: TBody, options?: RequestOptions<TBody>)
  delete<TResponse>(endpoint: string, options?: RequestOptions)
}

export const api = new ApiClient({
  baseUrl: "https://api.torn.com/v2",
  getToken: () => localStorage.getItem(LS_API_KEY),
});
```

### types.ts
Feature-specific TypeScript interfaces:

```typescript
export interface UserBasic {
  profile: {
    id: number;
    name: string;
    level: number;
  };
}
```

### fetch.ts
Fetcher function exporting URL constant and fetcher:

```typescript
import { api } from "../apiClient";
import type { UserBasic } from "./types";

export const apiUserBasicURL = "/user/basic";
export const apiUserBasicFetcher = () => {
  return api.get<UserBasic>(apiUserBasicURL);
};
```

### index.ts
React Query hook:

```typescript
import { useQuery } from "@tanstack/react-query";
import { apiUserBasicFetcher, apiUserBasicURL } from "./fetch";

export function useApiUserBasic(enabled: boolean) {
  return useQuery({
    queryKey: [apiUserBasicURL],
    queryFn: apiUserBasicFetcher,
    enabled,
  });
}
```