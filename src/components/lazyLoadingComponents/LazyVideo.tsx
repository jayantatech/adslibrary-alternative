// components/LazyVideo.tsx
import { useInView } from "react-intersection-observer";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string; // Optional, for accessibility
}

const LazyVideo = ({ src, poster, className, ariaLabel }: LazyVideoProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger once when in view
    threshold: 0.25, // Trigger when 25% of the video is visible
  });

  return (
    <video
      ref={ref}
      className={`lazy-video ${className}`}
      controls
      poster={poster}
      aria-label={ariaLabel}
      muted
      playsInline
      autoPlay={inView}
      loop
    >
      {inView && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
