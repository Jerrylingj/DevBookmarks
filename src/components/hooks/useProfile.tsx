import { useContext, createContext } from 'react';

interface Profile {
  name: string;
  age: number;
}

interface Theme {
  backgroundColor: string;
  width: string;
  height: string;
}

export const ProfileContext = createContext<Profile | null>(null);
export const ThemeContext = createContext<Theme | null>(null);

export function useProfile(): [Profile | null, Theme | null] {
  const profile = useContext(ProfileContext);
  const theme = useContext(ThemeContext);
  return [profile, theme];
}
