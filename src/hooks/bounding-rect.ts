import { MutableRefObject, useRef, useState, useEffect } from 'react';

export function useBoundingRect(): [DOMRect | undefined, MutableRefObject<HTMLElement | undefined>] {
  const ref = useRef<HTMLElement>();
  const [rect, setRect] = useState<DOMRect>();

  function calculate(): void {
    setRect(ref.current?.getBoundingClientRect());
  }

  useEffect(() => {
    const {addEventListener: add, removeEventListener: remove} = document;
    calculate();
    add('resize', calculate);
    return () => remove('resize', calculate);
  }, []);

  return [rect, ref];
}
