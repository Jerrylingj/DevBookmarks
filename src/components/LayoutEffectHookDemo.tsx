import { useEffect, useLayoutEffect, useState } from 'react';

const LayoutEffectHookDemo = () => {
  const [count, setCount] = useState<number>(1);
  const [count2, setCount2] = useState<number>(1);
  console.log('LayoutEffectHookDemo渲染');

  // useEffect, 会有闪烁，先渲染0，再更新
  useEffect(() => {
    if (count === 0) {
      const start = Date.now();
      while (Date.now() - start < 2500) {}
      setCount(Math.random());
    }
  }, [count]);

  useLayoutEffect(() => {
    if (count2 === 0) {
      const start = Date.now();
      while (Date.now() - start < 500) {}
      setCount2(Math.random());
    }
  }, [count2]);

  return (
    <>
      <div>count: {count}</div>
      <div>count2: {count2}</div>
      <button
        onClick={() => {
          setCount(0);
          setCount2(0);
        }}
      >
        重置
      </button>
    </>
  );
};

export default LayoutEffectHookDemo;
