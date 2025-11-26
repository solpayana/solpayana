'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';

export default function Home() {
  const { publicKey } = useWallet();
  const [points, setPoints] = useState(0); // Beta: Fake/manual points for now

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-10">

        <div className="text-center">
          <h1 className="text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            SOLANA PAY
          </h1>
          <p className="text-2xl mt-4">Watch Ads → Earn Real Solana</p>
        </div>

        <WalletMultiButton className="!bg-purple-600 !text-white !py-4 !px-8 !text-xl !rounded-xl" />

        {publicKey ? (
          <div className="space-y-8">
            <div className="bg-zinc-900 rounded-2xl p-8 text-center border border-purple-800">
              <p className="text-6xl font-bold">{points.toLocaleString()}</p>
              <p className="text-2xl text-gray-400">points earned</p>
              <p className="text-lg mt-4 text-green-400">
                {(points * 0.0000025).toFixed(7)} SOL ready to claim
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-purple-900">
              <p className="text-center mb-4 font-bold text-xl">Watch ads below 👇</p>
              <iframe
                src="https://lootably.com/offers/?placement_id=REPLACE_WITH_YOUR_LOOTABLY_ID"
                width="100%"
                height="900"
                className="rounded-xl border border-purple-800"
                title="Earn SOL"
              />
            </div>

            {points >= 1000 && (
              <button className="w-full bg-green-600 py-6 rounded-xl text-2xl font-bold hover:bg-green-500 transition">
                CLAIM {(points * 0.0000025).toFixed(6)} SOL NOW
              </button>
            )}
          </div>
        ) : (
          <div className="text-center text-3xl">
            Connect your wallet to start earning SOL
          </div>
        )}
      </div>
    </div>
  );
}
