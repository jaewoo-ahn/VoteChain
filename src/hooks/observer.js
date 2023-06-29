import {useEffect, useRef, useState} from "react";

export const useObserve = () => {
  const [isObserved, setIsObserved] = useState < boolean > false;

  const dom = useRef(null);
  const observer = (useRef < IntersectionObserver) | (null > null);

  const observe = () => {
    if (dom.current) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) setIsObserved(true);
        else setIsObserved(false);
      });

      observer.current.observe(dom.current);

      return () => observer.current && observer.current.disconnect;
    }
  };

  useEffect(() => {
    observe();
  }, [dom]);

  return {isObserved, dom};
};
