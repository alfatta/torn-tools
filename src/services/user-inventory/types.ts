export interface UserInventoryItem {
  id: number;
  amount: number;
  equipped: boolean;
  name: string;
  faction_owned: boolean;
  uid: string | null;
}

export interface UserInventory {
  items: UserInventoryItem[];
  timestamp: number;
}

export interface UserInventoryMetadata {
  links: Record<string, string> | null;
  total: number;
}

export interface UserInventoryResponse {
  inventory: UserInventory;
  _metadata: UserInventoryMetadata;
}