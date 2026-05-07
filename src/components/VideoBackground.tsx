import { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari requires explicit play() call after user gesture
    // but for background videos we force it on mount
    video.muted = true; // must be set via property, not just attribute on iOS
    video.play().catch(() => {
      // If autoplay blocked, try again on first user interaction
      const tryPlay = () => {
        video.play().catch(() => {});
        document.removeEventListener('touchstart', tryPlay);
        document.removeEventListener('click', tryPlay);
      };
      document.addEventListener('touchstart', tryPlay, { passive: true });
      document.addEventListener('click', tryPlay);
    });

    // Re-play if iOS pauses it when app goes to background
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        className="w-full h-full object-cover"
        style={{ WebkitPlaysinline: true } as React.CSSProperties}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" />
    </div>
  );
};

export default VideoBackground;