import React, { useEffect, useRef } from "react";
import blockies from "ethereum-blockies";

interface AvatarProps {
  address: string;
  size?: number;
}

const WalletAvatar: React.FC<AvatarProps> = ({ address, size = 42 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (address && canvasRef.current) {
      const blockie = blockies.create({
        seed: address.toLowerCase(),
        size: 8,
        scale: size / 8,
      });

      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(blockie, 0, 0, size, size);
      }
    }
  }, [address, size]);

  return (
    <canvas
      className="rounded-full"
      ref={canvasRef}
      width={size}
      height={size}
    />
  );
};

export { WalletAvatar };
