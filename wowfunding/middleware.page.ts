import { NextRequest, NextResponse } from 'next/server';

const excludedRoutes = ['/', '/login', '/registro'];
const allowedOrigins = [
  'http://localhost:3000',
  'https://example-1.com',
  'https://example-2.com',
  // ...
  'https://example-99.com',
];

export function middleware(req: NextRequest, res: NextResponse) {
  // retrieve the current response

  // retrieve the HTTP "Origin" header 
  // from the incoming request
  req.headers.get("origin")

  // if the origin is an allowed one,
  // add it to the 'Access-Control-Allow-Origin' header
  if (allowedOrigins.includes(origin)) {
    res.headers.append('Access-Control-Allow-Origin', origin);
  }

  // add the remaining CORS headers to the response
  res.headers.append('Access-Control-Allow-Credentials', "true")
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  return res
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: '/api/:path*',
}
// const cookieUser = req.cookies.get("user-info");
// const url = req.nextUrl.pathname;

// Verificar si la ruta está excluida
// if (excludedRoutes.includes(url)) {
//   return NextResponse.next();
// }

// // // Realizar la comprobación del cookie solo para las rutas no excluidas
// if (url.includes("/reportes") && !cookieUser) {

// return NextResponse.redirect(`http://localhost:3000/`);
// }



// return NextResponse.next();

// }
// export const config = {
//   matcher: ['/', '/login', '/register'],
// };

