const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles'), './src/styles'],
    },
    webpack: (config) => {
        // camelCase style names from css modules
        config.module.rules
            .find(({ oneOf }) => !!oneOf)
            .oneOf.filter(({ use }) =>
                JSON.stringify(use)?.includes('css-loader')
            )
            .reduce((acc, { use }) => acc.concat(use), [])
            .forEach(({ options }) => {
                if (options?.modules) {
                    options.modules.exportLocalsConvention = 'camelCase';
                }
            });

        return config;
    },
};

module.exports = nextConfig;
