import { RefObject, useEffect, useCallback } from 'react';

export function useClickOutside(ref: RefObject<any>, handler: (e: Event) => any): void {
  const listener = useCallback((e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler(e);
    }
  }, [ref, handler]);

  useEffect(() => {
    const {addEventListener: add, removeEventListener: remove} = document;
    const eventNames = ['mousedown', 'touchstart'];
    eventNames.forEach((name) => add(name, listener));
    return () => eventNames.forEach((name) => remove(name, listener));
  }, [listener]);
}
