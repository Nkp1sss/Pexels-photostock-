import { useEffect, useState } from 'react';

export const useResizeWindow = () => {
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
