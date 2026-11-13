import { useState } from "react";
// Shows the photo if present; otherwise a warm gradient so layouts never break.
export default function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div role="img" aria-label={alt} className={`bg-gradient-to-br from-brown to-burnt ${className}`} />
  ) : (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />
  );
}
