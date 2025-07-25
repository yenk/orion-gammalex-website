'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

function useCountUp(targetNumber: number, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return count;
}

export default function WaitlistGrowth() {
  const [targetCount, setTargetCount] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    async function fetchCount() {
      const { count, error } = await supabase
        .from('gammalex_waitlist')
        .select('id', { count: 'exact', head: true });

      if (!error) setTargetCount(count ?? 0);
    }

    fetchCount();

    // Real-time subscription
    const channel = supabase
      .channel('waitlist-growth')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'gammalex_waitlist' },
        () => setTargetCount(prev => (prev ?? 0) + 1)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [mounted]);

  const count = useCountUp(targetCount ?? 0);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  if (targetCount === null) return null; // Don't show loading state

  const spotsLeft = 1000 - count;
  
  return (
    <div className="text-base sm:text-lg text-gray-500 text-center mt-4">
      Join the first 1,000 for early access • {spotsLeft > 0 ? `${spotsLeft.toLocaleString()} spots remaining` : 'Waitlist filling up fast'}
    </div>
  );
}
