import { useState, useCallback, memo } from 'react';
import type { FC } from 'react';

const Component: FC<{ fn?: () => void; id: number }> = ({ fn, id }) => {
  console.log(fn);
  console.log('Component' + id + ' 渲染');
  return <div>Component{id}</div>;
};

const MemoComponent = memo(Component);

const CallbackHookDemo = () => {
  const [state, setState] = useState<number>(0);

  const fn1 = () => {
    console.log('fn1更新');
  };

  const fn2 = useCallback(() => {
    console.log('fn2更新');
  }, []);

  return (
    <>
      <MemoComponent fn={fn1} id={1} />
      <MemoComponent fn={fn2} id={2} />
      <button onClick={() => setState(state + 1)}>+1</button>
      <div>{state}</div>
    </>
  );
};

export default CallbackHookDemo;
