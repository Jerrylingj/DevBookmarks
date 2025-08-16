import { useEffect, useState } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';

const CustomHookDemo2 = () => {
  // 朴素逻辑
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  // 自定义hook封装
  const scroll2 = useScrollPosition();

  return (
    <>
      <div>scroll: {scroll}</div>
      <div style={{ paddingBottom: '300px' }}>scroll2: {scroll2}</div>
    </>
  );
};

export default CustomHookDemo2;
