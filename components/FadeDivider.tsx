export function FadeDivider() {
  return (
    <div className="relative w-full h-36 -mt-16 -mb-16 z-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, black 45%, transparent 100%)",
        }}
      />
    </div>
  );
}
