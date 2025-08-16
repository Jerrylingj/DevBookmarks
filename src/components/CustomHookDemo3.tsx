import { useLocalStorage } from './hooks/useLocalStorage';

const CustomHookDemo3 = () => {
  const [name, setName] = useLocalStorage('name');

  return (
    <>
      <div>name: {name}</div>
      <button onClick={() => setName('jerry')}>change name</button>
    </>
  );
};

export default CustomHookDemo3;
