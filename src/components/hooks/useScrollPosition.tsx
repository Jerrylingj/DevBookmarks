import { useEffect, useState } from 'react';

export function useScrollPosition(): number {
  const [scroll, setScroll] = useState<number>(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
}
