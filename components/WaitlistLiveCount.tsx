'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let frame: number;

    function animate(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * (target - 0) + 0));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return count;
}

export default function WaitlistLiveCount() {
  const [targetCount, setTargetCount] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let channel: any;

    async function fetchCount() {
      const { count, error } = await supabase
        .from('gammalex_waitlist')
        .select('id', { count: 'exact', head: true });
      if (!error) setTargetCount(count ?? 0);
    }

    fetchCount();

    // Real-time subscription
    channel = supabase
      .channel('waitlist-live-count')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'gammalex_waitlist' },
        () => setTargetCount((prev) => (prev ?? 0) + 1)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [mounted]);

  const count = useCountUp(targetCount ?? 0);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full flex flex-col items-center mt-6">
        <div className="animate-pulse text-5xl font-extrabold text-center text-gray-400 select-none">
          ...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center mt-6">
      {targetCount === null ? (
        <div className="animate-pulse text-5xl font-extrabold text-center text-gray-400 select-none">
          ...
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3">
          <span
            className="text-5xl font-extrabold text-center text-sage-600 animate-glow"
            style={{
              textShadow:
                '0 0 8px #a3e635, 0 0 16px #bef264, 0 0 32px #a3e635',
            }}
          >
            🚀
            <span className="mx-2 animate-pulse-glow">
              {count.toLocaleString()}
            </span>
          </span>
          <span
            className="text-base sm:text-lg text-gray-600 font-inter text-center whitespace-normal px-1 sm:px-0"
          >
            Join early adopters on the GammaLex waitlist!
          </span>
        </div>
      )}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% {
            text-shadow: 0 0 8px #a3e635, 0 0 16px #bef264, 0 0 32px #a3e635;
          }
          50% {
            text-shadow: 0 0 24px #a3e635, 0 0 48px #bef264, 0 0 64px #a3e635;
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 1.2s infinite;
        }
      `}</style>
    </div>
  );
} 