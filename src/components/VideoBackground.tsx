

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <video
        src="/background2.mov"
        className="w-full h-full object-cover brightness-[0.9]"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
