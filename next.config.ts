import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
        turbopack: {
            // turbo: {
                rules: {
                    '*.{glsl,vs,fs,vert,frag}': {
                        loaders: ['raw-loader'],
                        as: '*.js',
                    },
                },
            // },
        },
};

export default nextConfig;
