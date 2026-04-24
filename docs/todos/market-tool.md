# Torn Tools - Todo List

## Phase 1: Project Foundation

- [x] Set up React + TypeScript + Vite project
- [x] Configure Tailwind CSS v4
- [x] Set up theme system (light/dark/system)
- [x] Configure React Router
- [x] Set up TanStack React Query
- [x] Configure ESLint + TypeScript rules
- [ ] **Create API client foundation**

## Phase 2: Market Tool MVP

### Key Management
- [ ] Create API key input component (`ApiKeyInput.tsx`)
  - 16-character validation
  - Show/hide toggle
  - Save to localStorage button
  - Clear/delete key option
- [ ] Create API key context/hook (`useApiKey.ts`)
  - Read from localStorage on init
  - Persist changes
  - Clear function

### ToS Compliance
- [ ] Create ToS compliance banner/modal
  - Display when user first enters API key
  - Table format as per Torn ToS requirements
  - "I understand" checkbox before saving

### Torn API Client
- [ ] Create `src/lib/api/torn.ts`
  - Typed fetch functions
  - Error handling with user-friendly messages
  - Rate limit handling (code 5)
- [ ] Create `src/lib/api/types.ts`
  - User response types
  - Bazaar types
  - Inventory types
  - Market types
  - Error response types

### Market Page
- [ ] Create `src/pages/market/index.tsx`
- [ ] Fetch and display user's bazaar items
- [ ] Fetch market price for each bazaar item
- [ ] Price comparison table:
  - Item name
  - Quantity
  - Your price
  - Market price (lowest)
  - Difference ($ and %)
  - Highlight profitable opportunities
- [ ] Summary stats:
  - Total bazaar value
  - Potential extra earnings

### Inventory Page
- [ ] Create `src/pages/inventory/index.tsx`
- [ ] Fetch and display user's inventory
- [ ] Show item values
- [ ] Total inventory value

### Error Handling
- [ ] Handle invalid API key (code 2)
- [ ] Handle insufficient access level (code 16)
- [ ] Handle rate limit (code 5)
- [ ] Handle key owner in jail (code 10)
- [ ] Show appropriate error messages

## Phase 3: Polish & UX

- [ ] Add loading states with skeletons
- [ ] Add refresh button (manual refresh)
- [ ] Add last updated timestamp
- [ ] Add empty state messages
- [ ] Responsive design for mobile
- [ ] Theme consistency check

## Phase 4: Future Tools (Backlog)

### Combat Tools
- [ ] Attack/defense stats
- [ ] Cooldown timers
- [ ] Combat efficiency calculator

### Travel Tools
- [ ] Travel requirements checker
- [ ] Travel timer with notifications

### Education Tools
- [ ] Course lookup
- [ ] Time to complete estimates
- [ ] Benefits calculator

### Faction Tools
- [ ] Faction member overview
- [ ] Contribution stats
- [ ] Attack logs

## Notes

- All user data stays local (localStorage only)
- No server-side storage
- No data shared with anyone
- Rate limit: 100 req/min - use carefully
- Some API selections are globally cached (30s)
