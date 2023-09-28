import { useEffect, useRef, useState } from 'react';

const LazyLoadedImage = ({ src, alt }) => {
  const imageRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : ''}
      alt={alt}
      style={{ transition: 'opacity 0.5s' }}
    />
  );
};

export default LazyLoadedImage;