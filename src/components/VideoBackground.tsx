const VideoBackground = () => {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/background.mov" type="video/mp4" />
      </video>
      <div className="video-overlay" />
    </div>
  );
};

export default VideoBackground;
