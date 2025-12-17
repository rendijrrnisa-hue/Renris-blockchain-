import React, { useState } from 'react';
import { Pickaxe, Shield, Zap, Rocket, Plus, Users } from 'lucide-react';
import Header from './components/Header';
import MiningPanel from './components/MiningPanel';
import Tokenomics from './components/Tokenomics';
import AIChat from './components/AIChat';
import CreateWalletModal from './components/CreateWalletModal';
import RefModal from './components/RefModal';
import DeployModal from './components/DeployModal';

const App: React.FC = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isRefModalOpen, setIsRefModalOpen] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [wallet, setWallet] = useState<any>(null);
  const [referralCount, setReferralCount] = useState(0);

  return (
    <div className="min-h-screen pb-20 bg-[#020617] text-white selection:bg-sky-500/30">
      <Header onCreateWallet={() => setIsWalletModalOpen(true)} onOpenRef={() => setIsRefModalOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 pt-36 space-y-20">
        <section className="text-center space-y-8 py-10">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter">Ren<span className="text-sky-500">ris</span> Blockchain</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Sistem penambangan Ren Token oleh Dwi Frendi Priyanto.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setIsWalletModalOpen(true)} className="px-8 py-4 bg-sky-500 rounded-2xl font-bold">Create Wallet</button>
            <button onClick={() => setIsDeployModalOpen(true)} className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold">Setup Domain</button>
          </div>
        </section>
        <MiningPanel referralCount={referralCount} />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3"><Tokenomics /></div>
          <div className="lg:col-span-2"><AIChat /></div>
        </div>
      </main>
      <CreateWalletModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} onWalletCreated={setWallet} />
      <RefModal isOpen={isRefModalOpen} onClose={() => setIsRefModalOpen(false)} walletAddress={wallet?.address || ""} referralCount={referralCount} onSimulateRef={() => setReferralCount(p => p + 1)} />
      <DeployModal isOpen={isDeployModalOpen} onClose={() => setIsDeployModalOpen(false)} />
    </div>
  );
};
export default App;
