import { useMemo, useState } from 'react';

const MemoHookDemo = () => {
  const [state, setState] = useState<number>(1000000000);
  const [otherState, setOtherState] = useState<number>(0);

  console.log('计算total1');
  let total1 = 0;
  for (let i = 0; i < state; i++) {
    total1 = total1 + i;
  }

  const total2 = useMemo(() => {
    console.log('计算total2');
    let t = 0;
    for (let i = 0; i < state; i++) {
      t = t + i;
    }
    return t;
  }, [state]);

  return (
    <>
      <div>total1: {total1}</div>
      <div>total2: {total2}</div>
      <button onClick={() => setState(state + 1)}>state + 1</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        otherState + 1
      </button>
    </>
  );
};

export default MemoHookDemo;
