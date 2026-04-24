# Torn API v2 Endpoints

This document lists all API endpoints from the Torn API v2 OpenAPI specification (version 5.7.1).

## Base URL
```
https://api.torn.com/v2
```

## Access Levels
- **Public** - Requires public access key
- **Minimal** - Requires minimal access key
- **Limited** - Requires limited access key
- **Full** - Requires full access key
- **Custom** - Requires custom access key with specific permissions

---

## User

Endpoints for retrieving user-related information.

| HTTP | Path | Summary | Access Level |
|------|------|---------|--------------|
| GET | `/user/ammo` | Get your ammo information | Minimal |
| GET | `/user/attacks` | Get your detailed attacks | Limited |
| GET | `/user/attacksfull` | Get your simplified attacks | Limited |
| GET | `/user/bars` | Get your bars information | Minimal |
| GET | `/user/basic` | Get your basic profile information | Public |
| GET | `/user/{id}/basic` | Get basic profile information for a specific user | Public |
| GET | `/user/battlestats` | Get your battlestats | Limited |
| GET | `/user/bounties` | Get bounties placed on you | Public |
| GET | `/user/{id}/bounties` | Get bounties placed on a specific user | Public |
| GET | `/user/calendar` | Get your calendar events start time | Minimal |
| GET | `/user/casino` | Get your casino streak & tokens | Limited |
| GET | `/user/competition` | Get your competition information | Public |
| GET | `/user/{id}/competition` | Get competition information for a specific player | Public |
| GET | `/user/cooldowns` | Get your cooldowns information | Minimal |
| GET | `/user/{crimeId}/crimes` | Get your crime statistics | Minimal |
| GET | `/user/discord` | Get your discord information | Public |
| GET | `/user/{id}/discord` | Get discord information for a specific user | Public |
| GET | `/user/education` | Get your education information | Minimal |
| GET | `/user/enlistedcars` | Get your enlisted cars | Minimal |
| GET | `/user/equipment` | Get your equipment & clothing | Minimal |
| GET | `/user/events` | Get your events | Limited |
| GET | `/user/faction` | Get your faction information | Public |
| GET | `/user/{id}/faction` | Get faction information for a specific player | Public |
| GET | `/user/forumfeed` | Get updates on your threads and posts | Minimal |
| GET | `/user/forumfriends` | Get updates on your friends' activity | Minimal |
| GET | `/user/forumposts` | Get your posts | Public |
| GET | `/user/{id}/forumposts` | Get posts for a specific player | Public |
| GET | `/user/forumsubscribedthreads` | Get updates on threads you subscribed to | Minimal |
| GET | `/user/forumthreads` | Get your threads | Public |
| GET | `/user/{id}/forumthreads` | Get threads for a specific player | Public |
| GET | `/user/hof` | Get your hall of fame rankings | Public |
| GET | `/user/{id}/hof` | Get hall of fame rankings for a specific player | Public |
| GET | `/user/honors` | Get your achieved honors | Minimal |
| GET | `/user/icons` | Get your icons information | Public |
| GET | `/user/{id}/icons` | Get icons information for a specific player | Public |
| GET | `/user/inventory` | Get your inventory | Limited |
| GET | `/user/itemmarket` | Get your item market listings | Limited |
| GET | `/user/job` | Get your job information | Public |
| GET | `/user/{id}/job` | Get job information for a specific player | Public |
| GET | `/user/jobpoints` | Get your jobpoints | Minimal |
| GET | `/user/jobranks` | Get your starter job positions | Minimal |
| GET | `/user/list` | Get your friends, enemies or targets list | Limited |
| GET | `/user/log` | Get your logs | Full |
| GET | `/user/medals` | Get your achieved medals | Minimal |
| GET | `/user/merits` | Get your merits | Minimal |
| GET | `/user/messages` | Get your messages | Limited |
| GET | `/user/missions` | Get your current missions information | Minimal |
| GET | `/user/money` | Get your current wealth | Limited |
| GET | `/user/newevents` | Get your unseen events | Limited |
| GET | `/user/newmessages` | Get your unseen messages | Limited |
| GET | `/user/notifications` | Get your notifications | Minimal |
| GET | `/user/organizedcrime` | Get your current ongoing organized crime | Minimal |
| GET | `/user/organizedcrimes` | Get available slots for organized crimes with status 'Recruiting' | Minimal |
| GET | `/user/personalstats` | Get your personal stats | Public |
| GET | `/user/{id}/personalstats` | Get a player's personal stats | Public |
| GET | `/user/profile` | Get your own profile | Public |
| GET | `/user/{id}/profile` | Get profile information for a specific player | Public |
| GET | `/user/properties` | Get your own properties | Public |
| GET | `/user/{id}/properties` | Get specific user's properties | Public |
| GET | `/user/property` | Get your current property | Public |
| GET | `/user/{id}/property` | Get specific user's property | Public |
| GET | `/user/races` | Get user races | Minimal |
| GET | `/user/racingrecords` | Get your current racing records | Minimal |
| GET | `/user/refills` | Get your refills information | Minimal |
| GET | `/user/reports` | Get your reports | Limited |
| GET | `/user/revives` | Get your detailed revives | Limited |
| GET | `/user/revivesFull` | Get your simplified revives | Limited |
| GET | `/user/skills` | Get your skills | Minimal |
| GET | `/user/stocks` | Get your stocks | Limited |
| GET | `/user/trades` | Get your trades | Limited |
| GET | `/user/{tradeId}/trade` | Get your detailed trade | Limited |
| GET | `/user/travel` | Get your travel information | Minimal |
| GET | `/user/virus` | Get your virus coding information | Minimal |
| GET | `/user/weaponexp` | Get your weapon experience information | Minimal |
| GET | `/user/workstats` | Get your working stats | Minimal |
| GET | `/user/lookup` | Get all available user selections | Public |
| GET | `/user/timestamp` | Get current server time | Public |
| GET | `/user` | Get any User selection | Depends on selections |

---

## Faction

Endpoints for retrieving faction-related information.

| HTTP | Path | Summary | Access Level |
|------|------|---------|--------------|
| GET | `/faction/applications` | Get your faction's applications | Minimal (with faction permissions) |
| GET | `/faction/attacks` | Get your faction's detailed attacks | Limited (with faction permissions) |
| GET | `/faction/attacksfull` | Get your faction's simplified attacks | Limited (with faction permissions) |
| GET | `/faction/balance` | Get your faction's & member's balance details | Limited (with faction permissions) |
| GET | `/faction/basic` | Get your faction's basic details | Public |
| GET | `/faction/{id}/basic` | Get a faction's basic details | Public |
| GET | `/faction/chain` | Get your faction's current chain | Public |
| GET | `/faction/{id}/chain` | Get a faction's current chain | Public |
| GET | `/faction/chains` | Get a list of your faction's completed chains | Public |
| GET | `/faction/{id}/chains` | Get a list of a faction's completed chains | Public |
| GET | `/faction/chainreport` | Get your faction's latest chain report | Public |
| GET | `/faction/{chainId}/chainreport` | Get a chain report | Public |
| GET | `/faction/contributors` | Get your faction's challenge contributors | Limited (with faction permissions) |
| GET | `/faction/crimes` | Get your faction's organized crimes | Minimal (with faction permissions) |
| GET | `/faction/{crimeId}/crime` | Get a specific organized crime | Minimal (with faction permissions) |
| GET | `/faction/hof` | Get your faction's hall of fame rankings | Public |
| GET | `/faction/{id}/hof` | Get a faction's hall of fame rankings | Public |
| GET | `/faction/members` | Get a list of your faction's members | Public |
| GET | `/faction/{id}/members` | Get a list of a faction's members | Public |
| GET | `/faction/news` | Get your faction's news details | Minimal (with faction permissions) |
| GET | `/faction/positions` | Get your faction's positions details | Minimal (with faction permissions) |
| GET | `/faction/rackets` | Get a list of current rackets | Public |
| GET | `/faction/{raidWarId}/raidreport` | Get raid war details | Public |
| GET | `/faction/raids` | Get raids history for your faction | Public |
| GET | `/faction/{id}/raids` | Get a faction's raids history | Public |
| GET | `/faction/rankedwars` | Get ranked wars history for your faction | Public |
| GET | `/faction/{id}/rankedwars` | Get a faction's ranked wars history | Public |
| GET | `/faction/{rankedWarId}/rankedwarreport` | Get ranked war details | Public |
| GET | `/faction/reports` | Get faction reports | Limited |
| GET | `/faction/revives` | Get your faction's detailed revives | Limited (with faction permissions) |
| GET | `/faction/revivesFull` | Get your faction's simplified revives | Limited (with faction permissions) |
| GET | `/faction/search` | Search factions by name or other criteria | Public |
| GET | `/faction/stats` | Get your faction's challenges stats | Minimal (with faction permissions) |
| GET | `/faction/territory` | Get a list of your faction's territories | Public |
| GET | `/faction/{id}/territory` | Get a list of a faction's territories | Public |
| GET | `/faction/territoryownership` | Get a list territory ownership | Public |
| GET | `/faction/territorywars` | Get territory wars history for your faction | Public |
| GET | `/faction/{id}/territorywars` | Get a faction's territory wars history | Public |
| GET | `/faction/{territoryWarId}/territorywarreport` | Get territory war details | Public |
| GET | `/faction/upgrades` | Get your faction's upgrades | Minimal (with faction permissions) |
| GET | `/faction/warfare` | Get faction warfare | Public |
| GET | `/faction/wars` | Get your faction's wars & pacts details | Public |
| GET | `/faction/{id}/wars` | Get a faction's wars & pacts details | Public |
| GET | `/faction/lookup` | Get all available faction selections | Public |
| GET | `/faction/timestamp` | Get current server time | Public |
| GET | `/faction` | Get any Faction selection | Depends on selections |

---

## Forum

Endpoints for retrieving forum-related information.

| HTTP | Path | Summary | Access Level |
|------|------|---------|--------------|
| GET | `/forum/categories` | Get publicly available forum categories | Public |
| GET | `/forum/{threadId}/posts` | Get specific forum thread posts | Public |
| GET | `/forum/{threadId}/thread` | Get specific thread details | Public |
| GET | `/forum/threads` | Get threads across all forum categories | Public |
| GET | `/forum/{categoryIds}/threads` | Get threads for specific public forum category or categories | Public |
| GET | `/forum/lookup` | Get all available forum selections | Public |
| GET | `/forum/timestamp` | Get current server time | Public |
| GET | `/forum` | Get any Forum selection | Public |

---

## Key

Endpoints for managing API keys.

| HTTP | Path | Summary | Access Level |
|------|------|---------|--------------|
| GET | `/key/log` | Get current key log history | Any key |
| GET | `/key/info` | Get current key info | Any key |
| GET | `/key` | Get any Key selection | Any key |

---

## Market

Endpoints for retrieving market-related information.

| HTTP | Path | Summary | Access Level |
|------|------|---------|--------------|
| GET | `/market/{id}/auctionhouselisting` | Get specific item auction house listings | Public |
| GET | `/market/{id}/auctionhouse` | Get specific item auction house listings | Public |
| GET | `/market/auctionhouse` | Get auction house listings | Public |
| GET | `/market/bazaar` | Get bazaar directory | Public |
| GET | `/market/{id}/bazaar` | Get item specialized bazaar directory | Public |
| GET | `/market/{id}/itemmarket` | Get item market listings | Public |
| GET | `/market/{propertyTypeId}/properties` | Get properties market listings | Public |
| GET | `/market/{propertyTypeId}/rentals` | Get properties rental listings | Public |
| GET | `/market/lookup` | Get all available market selections | Public |
| GET | `/market/timestamp` | Get current server time | Public |
| GET | `/market` | Get any Market selection | Public |

---

## Racing

Endpoints for retrieving racing-related information.

| HTTP | Path | Summary | Access Level |
|------|------|---------|--------------|
| GET | `/racing/cars` | Get cars and their racing stats | Public |
| GET | `/racing/carupgrades` | Get all possible car upgrades | Public |
| GET | `/racing/races` | Get races | Public |
| GET | `/racing/{raceId}/race` | Get specific race details | Public |
| GET | `/racing/{trackId}/records` | Get track records | Public |
| GET | `/racing/tracks` | Get race tracks and descriptions | Public |
| GET | `/racing/lookup` | Get all available racing selections | Public |
| GET | `/racing/timestamp` | Get current server time | Public |
| GET | `/racing` | Get any Racing selection | Public |

---

## Property

Endpoints for retrieving property-related information.

| HTTP | Path | Summary | Access Level |
|------|------|---------|--------------|
| GET | `/property/{id}/property` | Get a specific property | Public |
| GET | `/property/lookup` | Get all available property selections | Public |
| GET | `/property/timestamp` | Get current server time | Public |
| GET | `/property` | Get any property selection | Public |

---

## Torn

Endpoints for retrieving global Torn game information.

| HTTP | Path | Summary | Access Level |
|------|------|---------|--------------|
| GET | `/torn/attacklog` | Get attack log details | Public |
| GET | `/torn/bounties` | Get bounties | Public |
| GET | `/torn/calendar` | Get calendar information | Public |
| GET | `/torn/crimes` | Get crimes information | Public |
| GET | `/torn/education` | Get education information | Public |
| GET | `/torn/elimination` | Get current standings for all elimination teams | Public |
| GET | `/torn/{id}/eliminationteam` | Get players in a specific elimination team | Public |
| GET | `/torn/factionhof` | Get faction hall of fame positions for a specific category | Public |
| GET | `/torn/factiontree` | Get full faction tree | Public |
| GET | `/torn/honors` | Get all honors | Public |
| GET | `/torn/{ids}/honors` | Get specific honors | Public |
| GET | `/torn/hof` | Get player hall of fame positions for a specific category | Public |
| GET | `/torn/itemammo` | Get information about ammo | Public |
| GET | `/torn/{id}/itemdetails` | Get information about a specific item | Public |
| GET | `/torn/itemmods` | Get information about weapon upgrades | Public |
| GET | `/torn/items` | Get information about items | Public |
| GET | `/torn/{ids}/items` | Get information about items | Public |
| GET | `/torn/logcategories` | Get available log categories | Public |
| GET | `/torn/logtypes` | Get all available log ids | Public |
| GET | `/torn/{logCategoryId}/logtypes` | Get available log ids for a specific log category | Public |
| GET | `/torn/medals` | Get all medals | Public |
| GET | `/torn/{ids}/medals` | Get specific medals | Public |
| GET | `/torn/merits` | Get all merits | Public |
| GET | `/torn/organizedcrimes` | Get organized crimes information | Public |
| GET | `/torn/properties` | Get properties details | Public |
| GET | `/torn/stocks` | Get all stocks | Public |
| GET | `/torn/{stockId}/stocks` | Get specific stock with chart history | Public |
| GET | `/torn/{crimeId}/subcrimes` | Get Subcrimes information | Public |
| GET | `/torn/territory` | Get territory details | Public |
| GET | `/torn/lookup` | Get all available torn selections | Public |
| GET | `/torn/timestamp` | Get current server time | Public |
| GET | `/torn` | Get any Torn selection | Public |

---

## Notes

1. All endpoints use the GET HTTP method unless otherwise specified.
2. The access level shown is the minimum required. Some endpoints may return more data with higher access levels.
3. For endpoints with `{id}` path parameters, replace the parameter with the appropriate ID value.
4. For endpoints requiring faction permissions, the API key must have faction access enabled.

---

*Generated from Torn API v2 OpenAPI specification version 5.7.1*
