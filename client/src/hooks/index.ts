import { useState, useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};

const useResizeWindow = () => {
  const [columnsCount, setColumnsCount] = useState<number>(window.innerWidth < 900 ? 2 : 3);

  useEffect(() => {
    const resize = () => {
      if (columnsCount === 2 && window.innerWidth >= 900) {
        setColumnsCount(3);
      }
      if (columnsCount === 3 && window.innerWidth < 900) {
        setColumnsCount(2);
      }
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return columnsCount;
};

export { useOutsideClick, useResizeWindow };
