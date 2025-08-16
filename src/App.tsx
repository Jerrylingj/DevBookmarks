import React, { createContext } from 'react';
import ContextHookDemo from './components/ContextHookDemo.tsx';
import ReducerHookDemo from './components/ReducerHookDemo';
import CallbackHookDemo from './components/CallbackHookDemo.tsx';
import MemoHookDemo from './components/MemoHookDemo.tsx';
import RefHookDemo from './components/RefHookDemo';
import ImparativeHandleHookDemo from './components/ImparativeHandleHookDemo';
import LayoutEffectHookDemo from './components/LayoutEffectHookDemo';
import CustomHookDemo1 from './components/CustomHookDemo1';
import CustomHookDemo2 from './components/CustomHookDemo2';
import CustomHookDemo3 from './components/CustomHookDemo3';

export interface User {
  name: string;
  age: number;
}
export interface Theme {
  backgroundColor: string;
  width: string;
  height?: string;
}

export const UserContext = createContext<User | null>(null);
export const ThemeContext = createContext<Theme | null>(null);

function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <h2>useContext</h2>
      <UserContext.Provider value={{ name: 'jerry', age: 19 }}>
        <ThemeContext.Provider
          value={{ backgroundColor: 'lightblue', width: '120px' }}
        >
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider>
      <h2>useReducer</h2>
      <ReducerHookDemo />
      <h2>useCallback</h2>
      <CallbackHookDemo />
      <h2>useMemo</h2>
      <MemoHookDemo />
      <h2>useRef</h2>
      <RefHookDemo />
      <h2>useImparativeHandle</h2>
      <ImparativeHandleHookDemo />
      <h2>useLayoutEffect</h2>
      <LayoutEffectHookDemo />
      <h2>custom Hook</h2>
      <h3>hook1: share context</h3>
      <CustomHookDemo1 />
      <h3>hook2: scroll-position</h3>
      <CustomHookDemo2 />
      <h3>hook3: localstorage</h3>
      <CustomHookDemo3 />
    </>
  );
}

export default App;
