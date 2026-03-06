import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  // ✅ Eliminá el bloque webpack completo — ya no es necesario
  // porque los SVGs ahora son <img> estáticos desde public/
};

export default nextConfig;