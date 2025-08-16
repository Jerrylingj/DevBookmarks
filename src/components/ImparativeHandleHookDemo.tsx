import { forwardRef, useImperativeHandle, useRef } from 'react';

// 定义我们要暴露给父组件的方法
interface InputRefHandle {
  focus: () => void;
}

const InputRef = forwardRef<InputRefHandle, {}>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        // 拦截父组件的focus调用
        console.log('拦截focus');
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
    }),
    [inputRef.current],
  );

  return <input type="text" ref={inputRef} />;
});
const ImparativeHandleHookDemo = () => {
  const inputRef = useRef<InputRefHandle>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <button onClick={handleFocus}>聚焦</button>
      <InputRef ref={inputRef} />
    </>
  );
};

export default ImparativeHandleHookDemo;
