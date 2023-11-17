/** @type {import('next').NextConfig} **/
const nextConfig = {
    images: {
        domains: ['www.bbva.com','www.unifranz.edu.bo','www.acumar.gob.ar','www.campanario.es','www.paho.org','placekitten.com',''],
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
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api-productos/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "3000" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}

module.exports = nextConfig
