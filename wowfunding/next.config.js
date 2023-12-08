/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://44.202.51.198:8080/api/:path*', // Ajusta la URL de tu servidor
            },
        ];
    },
    images: {
        domains: ['www.bbva.com', 'www.unifranz.edu.bo', 'www.acumar.gob.ar', 'www.campanario.es', 'www.paho.org', 'placekitten.com', 's3-pi2-gp2-wowfunding.s3.amazonaws.com',
            "https://static.vecteezy.com/", "https://tinyurl.com"
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
    //
    // Note: configuring pageExtensions also affects _document.js, _app.js,
    // middleware.js as well as files under pages/api/.
    // For example, setting pageExtensions: ['page.tsx', 'page.ts']
    // means the following files: _document.tsx, _app.tsx, middleware.ts, pages/users.tsx and pages/api/users.ts
    // will have to be renamed to _document.page.tsx, _app.page.tsx, middleware.route.ts, pages/users.page.tsx
    // and pages/api/users.page.ts respectively.
    pageExtensions: ['page.tsx', 'page.ts', 'route.tsx', 'route.ts'],

}

module.exports = nextConfig
