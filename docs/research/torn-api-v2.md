# Torn API v2 Research

## Overview

The Torn API v2 is the new version of the Torn City API, accessible via Swagger UI at https://www.torn.com/swagger.php

## Base URL

- **API v2**: `https://api.torn.com/v2/`
- **API v1 (legacy)**: `https://api.torn.com/`
- **Swagger UI**: https://www.torn.com/swagger.php
- **Official Docs**: https://www.torn.com/api.html
- **Unofficial Docs**: https://tornapi.tornplayground.eu/

## Key Differences: v1 vs v2

- v2 accepts both `selections` and IDs as path/query parameters
- v2 is under active development and changes frequently
- v2 endpoints are auto-generated from OpenAPI spec
- v1 endpoints exposed as undocumented endpoints in v2 where not yet ported

## Rate Limits

- **100 requests per minute** per user across all keys
- Global cache cannot be bypassed for certain endpoints
- Service cache (~30s) can be bypassed using `timestamp` query param

## Available API Sections

### User
**Endpoint**: `GET https://api.torn.com/user/{id}`

**Selections**:
- `ammo`, `attacks`, `attacksfull`, `bars`, `basic`, `battlestats`, `bazaar`, `cooldowns`, `crimes`, `criminalrecord`, `discord`, `display`, `education`, `equipment`, `events`, `gym`, `hof`, `honors`, `icons`, `inventory`, `jobpoints`, `log`, `lookup`, `medals`, `merits`, `messages`, `missions`, `money`, `networth`, `newevents`, `newmessages`, `notifications`, `perks`, `personalstats`, `profile`, `properties`, `refills`, `reports`, `revives`, `revivesfull`, `skills`, `stocks`, `timestamp`, `travel`, `weaponexp`, `workstats`

**Access Levels**: Minimal to Full (varies by selection)

### Faction
**Endpoint**: `GET https://api.torn.com/faction/{id}`

**Selections**:
- `applications`, `armor`, `armorynews`, `attacknews`, `attacks`, `attacksfull`, `basic`, `boosters`, `caches`, `cesium`, `chain`, `chainreport`, `chains`, `contributors`, `crimeexp`, `crimenews`, `crimes`, `currency`, `donations`, `drugs`, `funds`, `lookup`, `mainnews`, `medical`, `membershipnews`, `positions`, `rankedwars`, `reports`, `revives`, `revivesfull`, `stats`, `temporary`, `territory`, `territorynews`, `timestamp`, `upgrades`, `utilities`, `weapons`

### Company
**Endpoint**: `GET https://api.torn.com/company/{id}`

**Selections**: `companies`, `employees`, `profile`, `stockpile`, `timestamp`

### Property
**Endpoint**: `GET https://api.torn.com/property/{id}`

**Selections**: `employees`, `profile`, `staff`, `timestamp`, `upgrades`, `users`

### Market
**Endpoint**: `GET https://api.torn.com/market/{id}`

**Selections**: `bazaar`, `itemmarket`, `lookup`, `points`, `market`, `timestamp`

**Notes**:
- `itemmarket` requires item ID
- `bazaar` requires item ID
- `points` requires item ID
- Access Level: Public

### Torn
**Endpoint**: `GET https://api.torn.com/torn/{id}`

**Selections**: `announcement`, `banned`, ` bounties`, `calendar`, `crimes`, `education`, `factionhof`, `halloffame`, `honors`, `items`, `lookup`, `medals`, `merits`, `news`, `properties`, `racket`, `stocks`, `territory`, `timestamp`, `torn`

### Key
**Endpoint**: `GET https://api.torn.com/key/?selections=info&key={key}`

**Selections**: `info`, `log`

**Notes**: Check key permissions with this endpoint

### Racing
**Endpoint**: `GET https://api.torn.com/racing/{id}`

**Selections**: `cars`, `carupgrades`, `lookup`, `race`, `records`, `timestamp`, `tracks`

### Forum
**Endpoint**: `GET https://api.torn.com/forum/{id}`

**Selections**: `category`, `feed`, `lookup`, `thread`, `timestamp`

## Global Cache (Cannot Bypass)

These selections are cached globally for all users:

| Selection | Cache Duration |
|-----------|---------------|
| `market` -> `itemmarket` | ~30s |
| `market` -> `properties` | ~30s |
| `market` -> `rentals` | ~30s |
| `company` -> `companies` | ~30s |
| `user` -> `bazaar` | ~30s |
| `torn` -> `bounties` | ~30s |
| `user` -> `bounties` | ~30s |

## Access Levels

| Level | Description |
|-------|-------------|
| **Public** | No API key required |
| **Minimal** | Basic limited access |
| **Limited** | Personal user data access |
| **Full** | Complete access |

## Error Codes

| Code | Meaning |
|------|---------|
| 0 | Unknown error |
| 1 | Key is empty |
| 2 | Incorrect key format |
| 3 | Wrong type requested |
| 4 | Wrong fields requested |
| 5 | Too many requests (100/min) |
| 6 | Incorrect ID |
| 7 | ID-entity relation violation |
| 8 | IP banned |
| 9 | API disabled |
| 10 | Key owner in federal jail |
| 11 | Key change error (60s cooldown) |
| 12 | Key read error |
| 13 | Key temporarily disabled (inactivity) |
| 14 | Daily read limit reached |
| 16 | Access level not sufficient |
| 17 | Backend error |
| 18 | API key paused by owner |
| 19 | Must migrate to crimes 2.0 |
| 20 | Race not yet finished |
| 21 | Incorrect category |
| 22 | Only available in API v1 |
| 23 | Only available in API v2 |
| 24 | Closed temporarily |
| 25 | Invalid stat requested |
| 26 | Only category or stats can be requested |
| 27 | Must migrate to organized crimes 2.0 |
| 28 | Incorrect log ID |
| 29 | Category selection unavailable for interaction logs |

## Client Libraries

### torn-client (TypeScript)
- Auto-generated from OpenAPI spec
- Built-in rate limiting
- Multi-key balancing
- Zero runtime dependencies
- Browser + Node.js compatible
- https://github.com/neon0404/torn-client

### tornapi-types (TypeScript)
- Generated type definitions for v1 and v2
- https://github.com/Torn-Playground/tornapi-types

### torn-api (Rust)
- Auto-generated from OpenAPI spec
- Async and typesafe
- https://docs.rs/torn-api

### TornAPIWrapper (Python)
- Python wrapper for v2
- https://pypi.org/project/TornAPIWrapper/

## Unofficial Documentation

- **Website**: https://tornapi.tornplayground.eu/
- **GitHub**: https://github.com/Torn-Playground/tornapi-documentation
- **Discord**: https://discord.gg/2wb7GKN

## API Key Requirements

- **Length**: 16 characters
- **Format**: `[A-Z0-9]{16}`
- **Default Access**: Minimal (must request elevated access)
- **Change Cooldown**: 60 seconds between key changes

## ToS Requirements

When using API keys, must display:
- Data Storage (local only / shared / etc.)
- Data Sharing (who can access)
- Purpose of Use
- Key Storage & Sharing
- Key Access Level

## Usage Example (fetch)

```typescript
const API_BASE = 'https://api.torn.com';

// Fetch user's bazaar
const fetchBazaar = async (userId: string, key: string) => {
  const response = await fetch(
    `${API_BASE}/user/${userId}?selections=bazaar&key=${key}`
  );
  return response.json();
};

// Fetch item market prices
const fetchItemMarket = async (itemId: string, key: string) => {
  const response = await fetch(
    `${API_BASE}/market/${itemId}?selections=itemmarket&key=${key}`
  );
  return response.json();
};
```