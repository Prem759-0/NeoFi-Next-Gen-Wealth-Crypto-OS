import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function Dashboard() {
  const { totalBalance, assets, fetchData } = usePortfolioStore();

  useEffect(() => {
    fetchData();
  }, []);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

  return (
    <div className="relative min-h-screen bg-void text-white overflow-hidden p-6 md:p-10">
      {/* Background Aurora Mesh */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-aurora rounded-full mix-blend-screen filter blur-[100px] animate-aurora-shift opacity-50 pointer-events-none" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto space-y-8"
      >
        {/* Header Section */}
        <motion.header variants={itemVariants} className="flex justify-between items-end">
          <div>
            <h2 className="text-gray-400 font-sans text-sm tracking-widest uppercase mb-2">Total Portfolio Value</h2>
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              {formatCurrency(totalBalance)}
            </h1>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full transition-all duration-300">
            <Wallet size={18} />
            <span>Connect Wallet</span>
          </button>
        </motion.header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Chart Card (Placeholder for Recharts) */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-glass border border-white/5 backdrop-blur-xl rounded-3xl p-8 h-[400px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-display text-xl mb-4">Performance Overview</h3>
            <div className="flex items-center justify-center h-[280px] border border-dashed border-white/10 rounded-xl">
              <span className="text-gray-500 font-sans">[Recharts Interactive Area Chart Mounts Here]</span>
            </div>
          </motion.div>

          {/* Assets List */}
          <motion.div variants={itemVariants} className="bg-glass border border-white/5 backdrop-blur-xl rounded-3xl p-8 h-[400px] overflow-y-auto custom-scrollbar">
            <h3 className="font-display text-xl mb-6">Top Assets</h3>
            <div className="space-y-4">
              {assets.map((asset) => (
                <div key={asset.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-cyan flex items-center justify-center font-display font-bold">
                      {asset.ticker[0]}
                    </div>
                    <div>
                      <p className="font-bold">{asset.name}</p>
                      <p className="text-sm text-gray-400">{asset.balance} {asset.ticker}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{formatCurrency(asset.valueUsd)}</p>
                    <p className={`text-sm flex items-center justify-end gap-1 ${asset.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {asset.change24h >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {Math.abs(asset.change24h)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
