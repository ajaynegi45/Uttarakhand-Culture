import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    // output: "export"
    reactStrictMode: true,
    devIndicators: false,
    // reactCompiler: true,
    images:{
        // You can use any one
        // domain:process.env.NEXT_PUBLIC_DOMAIN, // Here you can give specific image

        // Here you can give allow all image with that url
        remotePatterns: [{
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
        },{
            protocol: 'https',
            hostname: '**'
        }
        ]
    }
};

export default nextConfig;
