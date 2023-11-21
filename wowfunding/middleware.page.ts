import { NextRequest, NextResponse } from 'next/server';
import { API_URL } from 'utils/servicesUtils'; 

export function middleware(req:NextRequest, res: NextResponse) {

  const cookieUser = req.cookies.get("user-info");
  const url = req.nextUrl.pathname;

  if(url.includes("/registro") && !cookieUser) {
    // Si no existe la cookie, redireccionar a la página de login
    // return NextResponse.redirect(`${API_URL}/login`);
    return NextResponse.redirect(`http://localhost:3000/login`);
  }

  return NextResponse.next();
}

