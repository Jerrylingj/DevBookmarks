import { useRef, Component, useState, useEffect } from 'react';

// 给类组件添加Props类型
interface TestRefProps {}

class TestRef extends Component<TestRefProps> {
  constructor(props: TestRefProps) {
    super(props);
  }
  render() {
    return <>1111</>;
  }
}

const RefHookDemo = () => {
  /**
   * ref保存dom对象
   */
  const titleRef = useRef<HTMLHeadingElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const testRef = useRef<TestRef>(null);
  const changeDOM = () => {
    if (titleRef.current) {
      titleRef.current.innerHTML = 'Hello World';
    }
    if (inputRef.current) {
      inputRef.current.focus(); // 光标聚焦，可以开始输入
    }
    console.log(testRef.current); // 正确打印对象, 类组件正常
  };

  /**
   * ref保存其他内容
   */
  const [show, setShow] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  const numRef = useRef(count); // ref对象在整个生命周期内保持不变,即只保存count的初始值，当count变化numRef不变，可以用于保存上一次的值

  useEffect(() => {
    // useEffect在渲染完之后才执行，换完numRef的值不会立即渲染
    console.log('numRef.current: ', numRef.current, ' count: ', count);
    numRef.current = count; // 存储当前值(不渲染), 这样下次渲染就是这次的值, 实现缓存
  }, [count]);

  return (
    <>
      <h3 ref={titleRef}>titleRef</h3>
      <input ref={inputRef} type="text" />
      <TestRef ref={testRef} />
      <button onClick={changeDOM}>修改dom</button>
      {show && (
        <>
          <div>numRef: {numRef.current}</div>
          <div>count: {count}</div>
        </>
      )}
      <button onClick={() => setCount(count + 10)}>+10</button>
      <button onClick={() => setShow(!show)}>切换</button>
    </>
  );
};

export default RefHookDemo;
