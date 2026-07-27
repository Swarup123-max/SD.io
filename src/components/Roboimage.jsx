export default function RobotImage() {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-cyan-400
          blur-[150px]
          opacity-30
          rounded-full
          animate-pulse
          
        "
      />

      <img
        src="src/assets/avator.webp"
        alt="robot"
        className="
          relative
          z-10
          w-[450px]
          h-[450px]
          object-contain
        "
      />
    </div>
  );
}