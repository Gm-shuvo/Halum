import { useEffect, useRef, useState } from "react";

const useInfiniteScroll = (callback, options = {}) => {
  const [isFetching, setIsFetching] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: options.root || null,
      rootMargin: options.rootMargin || "0px",
      threshold: options.threshold || 0.1,
    };

    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setIsFetching(true);
      }
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [options]);

  useEffect(() => {
    if (isFetching) {
      setIsFetching(false);
      callback();
    }
  }, [isFetching, callback]);

  return sentinelRef;
};

export default useInfiniteScroll;
