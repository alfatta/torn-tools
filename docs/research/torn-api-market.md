# Torn Tools - Project Research

## Overview

**Torn Tools** is a companion web application for [Torn City](https://www.torn.com/) - a browser-based MMORPG. The goal is to build tools that help players faster their progress in the game.

## Target User

- Primary: Personal use + faction members
- Data handling: All data stored locally only (localStorage)
- Privacy: User API keys never shared with anyone

## API Source

- **Base URL**: `https://api.torn.com/`
- **Documentation**: https://www.torn.com/api.html
- **API v2 (Swagger)**: https://www.torn.com/swagger.php
- **Type**: Read-only

## API Key Requirements

- **Length**: 16 characters
- **Access Level**: Limited Access (sufficient for most user data)
- **Rate Limit**: 100 requests per minute per user

## Available Selections for Market Tool

### User Data

#### Bazaar (User's Listed Items)
- **Endpoint**: `GET https://api.torn.com/user/{user_id}?selections=bazaar&key={key}`
- **Access Level**: Limited
- **Globally Cached**: Yes (cannot bypass)
- **Response**:
```json
{
  "bazaar": [
    {
      "id": "123456",
      "name": "Item Name",
      "description": "Item description",
      "quantity": 1,
      "price": 1000000,
      "market_price": 950000,
      "total": 1000000
    }
  ]
}
```

#### Inventory (User's Owned Items)
- **Endpoint**: `GET https://api.torn.com/user/{user_id}?selections=inventory&key={key}`
- **Access Level**: Limited
- **Response**:
```json
{
  "inventory": [
    {
      "id": "123",
      "name": "Item Name",
      "description": "Item description",
      "quantity": 5,
      "value": 100000
    }
  ]
}
```

### Market Data

#### Item Market (Current Market Prices)
- **Endpoint**: `GET https://api.torn.com/market/{item_id}?selections=itemmarket&key={key}`
- **Access Level**: Public
- **Globally Cached**: Yes (30s service cache)
- **Response**:
```json
{
  "itemmarket": [
    {
      "cost": 1000000,
      "quantity": 1,
      "seller_name": "SellerName",
      "seller_id": "123456"
    }
  ]
}
```

## Caching Behavior

### Service Cache
- All requests cached for ~30 seconds
- Can be bypassed using `timestamp` query parameter

### Global Cache (Cannot Bypass)
The following are cached server-side same for all users:
- `market` -> `itemmarket`
- `market` -> `properties`
- `market` -> `rentals`
- `company` -> `companies`
- `user` -> `bazaar`
- `torn` -> `bounties`
- `user` -> `bounties`

## Error Codes

| Code | Meaning |
|------|---------|
| 0 | Unknown error |
| 1 | Key is empty |
| 2 | Incorrect key format |
| 3 | Wrong type requested |
| 4 | Wrong fields |
| 5 | Too many requests (100/min limit) |
| 6 | Incorrect ID |
| 7 | ID-entity relation violation (private data) |
| 8 | IP banned |
| 9 | API disabled |
| 10 | Key owner in federal jail |
| 16 | Access level not sufficient |

## ToS Compliance Requirements

When asking users for API key, must display:

| Category | Value |
|----------|-------|
| **Data Storage** | Only locally (localStorage) |
| **Data Sharing** | Nobody |
| **Purpose of Use** | Personal gain (market optimization) |
| **Key Storage** | Stored locally, not shared |
| **Key Access Level** | Limited Access (`user`->`bazaar,inventory`; `market`->`itemmarket`) |

## Market Tool MVP Features

1. **API Key Management**
   - Input field for API key (16 char validation)
   - Save to localStorage
   - Show/hide toggle
   - Delete key option

2. **My Bazaar View**
   - List items currently listed for sale
   - Show: name, quantity, your price, market price, difference
   - Highlight underpriced items (market > your price)
   - Total bazaar value
   - Potential extra earnings if relisted at market price

3. **My Inventory View**
   - List owned items with quantities
   - Estimated total value
   - Note: Cannot automatically fetch market price for all items (would require many API calls)

4. **Price Comparison**
   - For bazaar items: compare your price vs lowest market price
   - Calculate potential profit from relisting

## Technical Implementation Notes

### Key Format Validation
```typescript
function isValidApiKey(key: string): boolean {
  return /^[A-Z0-9]{16}$/.test(key);
}
```

### API Client Structure
```typescript
// Base URL + key injection
const TORN_API_BASE = 'https://api.torn.com';

async function fetchUserData(selections: string, key: string) {
  const response = await fetch(`${TORN_API_BASE}/user?selections=${selections}&key=${key}`);
  return response.json();
}

async function fetchMarketData(itemId: string, key: string) {
  const response = await fetch(`${TORN_API_BASE}/market/${itemId}?selections=itemmarket&key=${key}`);
  return response.json();
}
```

### Data Flow
```
User pastes API key → localStorage
        ↓
fetch /user?selections=bazaar,inventory
        ↓
For each bazaar item, fetch /market/{item_id}?selections=itemmarket
        ↓
Compare prices, calculate totals
        ↓
Display in UI with highlighting
```

## Potential Future Features

- Travel planner (check requirements, timing)
- Education tracker (course times, benefits)
- Combat stats (attacks, defense, cooldowns)
- Faction tools (member management, logs)
- Notifications (cooldown alerts, market changes)