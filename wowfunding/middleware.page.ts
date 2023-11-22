import { NextRequest, NextResponse } from 'next/server';
import { URL_DOMAIN } from 'utils/servicesUtils';

export function middleware(req: NextRequest, res: NextResponse) {

  const cookieUser = req.cookies.get("user-info");
  const url = req.nextUrl.pathname;

  if (url.includes("/login") &&!cookieUser) {
    // return NextResponse.redirect(`${URL_DOMAIN}/login`);
    return NextResponse.redirect(`http://localhost:3000/login`);
  }

  return NextResponse.next();

}
// export const config = {
//   matcher: [
//     '/(().*)',
//   ],
// };

