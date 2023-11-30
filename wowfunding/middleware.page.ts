import { NextRequest, NextResponse } from 'next/server';
import { URL_DOMAIN } from 'utils/servicesUtils';

const excludedRoutes = ['/', '/login', '/registro'];

export function middleware(req: NextRequest, res: NextResponse) {

  const cookieUser = req.cookies.get("user-info");
  const url = req.nextUrl.pathname;

  // Verificar si la ruta está excluida
  // if (excludedRoutes.includes(url)) {
  //   return NextResponse.next();
  // }

  // // // Realizar la comprobación del cookie solo para las rutas no excluidas
  if (url.includes("/reportes") && !cookieUser) {

    return NextResponse.redirect(`http://localhost:3000/`);
  }



  return NextResponse.next();

}
// export const config = {
//   matcher: ['/', '/login', '/register'],
// };

