import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number = 300): string => {
  const [debounce, setDebounce] = useState<string>(value)
  useEffect(() => {
    const hendler = setTimeout(() => {
      setDebounce(value)
    },delay)
    return () => clearTimeout(hendler)
  }, [value,delay])
  return debounce
};
