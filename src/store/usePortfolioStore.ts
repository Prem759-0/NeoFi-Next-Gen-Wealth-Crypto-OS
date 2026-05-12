import { create } from 'zustand';

interface Asset {
  id: string;
  name: string;
  ticker: string;
  balance: number;
  valueUsd: number;
  change24h: number;
}

interface PortfolioState {
  totalBalance: number;
  assets: Asset[];
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  totalBalance: 1245032.45, // Placeholder high-net-worth data
  assets: [
    { id: '1', name: 'Bitcoin', ticker: 'BTC', balance: 4.5, valueUsd: 290000, change24h: 2.4 },
    { id: '2', name: 'Ethereum', ticker: 'ETH', balance: 64.2, valueUsd: 185000, change24h: -1.2 },
    { id: '3', name: 'Solana', ticker: 'SOL', balance: 1200, valueUsd: 174000, change24h: 8.7 },
  ],
  isLoading: false,
  fetchData: async () => {
    set({ isLoading: true });
    // Simulate API call
    setTimeout(() => set({ isLoading: false }), 1000);
  },
}));
