import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"nfiarijdayrgoqjuybga.supabase.co",
        port:"",
        search:"",
      }
    ]
  }
};

export default nextConfig;
