import { useContext } from 'react';
import { useProfile } from './hooks/useProfile';
import { ProfileContext, ThemeContext } from './hooks/useProfile';

const Component1 = () => {
  const profile = useContext(ProfileContext);
  const theme = useContext(ThemeContext);

  return (
    <div style={theme ?? {}}>
      <div>name: {profile?.name}</div>
      <div>age: {profile?.age}</div>
    </div>
  );
};

const Component2 = () => {
  const [profile, theme] = useProfile();

  return (
    <div style={theme ?? {}}>
      <div>name: {profile?.name}</div>
      <div>age: {profile?.age}</div>
    </div>
  );
};

const CustomHookDemo1 = () => {
  return (
    <ProfileContext.Provider value={{ name: 'jerry', age: 19 }}>
      <ThemeContext.Provider
        value={{
          backgroundColor: 'lightgreen',
          width: '100px',
          height: '60px',
        }}
      >
        {/* 不用自定义hook版 */}
        <Component1 />
        <br />
        {/* 用自定义hook版 */}
        <Component2 />
      </ThemeContext.Provider>
    </ProfileContext.Provider>
  );
};

export default CustomHookDemo1;
