import { useEffect, useState } from 'react';

export function useLocalStorage(
  key: string,
): [string | null, React.Dispatch<React.SetStateAction<string | null>>] {
  const [name, setName] = useState(() => {
    return window.localStorage.getItem(key);
  });

  useEffect(() => {
    window.localStorage.setItem(key, name ?? '');
  }, [name]);

  return [name, setName];
}
