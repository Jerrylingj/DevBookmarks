import { useContext } from 'react';
import { UserContext, ThemeContext } from '../App';

const ContextHookDemo = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  console.log('user: ', user);
  console.log('theme: ', theme);

  return (
    <div style={theme ?? {}}>
      <div>name: {user?.name}</div>
      <div>age: {user?.age}</div>
    </div>
  );
};

export default ContextHookDemo;
