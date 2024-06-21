import type { NextAuthConfig } from 'next-auth';
import { NextResponse, type NextRequest } from 'next/server'
import { redirect } from 'next/navigation'
import { isRedirectError } from 'next/dist/client/components/redirect';

export const authConfig = {
    providers: [],
    pages:{
        signIn:"/login",
    },
    callbacks:{
     authorized({auth, request}:{auth: any, request: NextRequest}) {
            const isLoggedIn = auth?.user
            const isOnAdminPanel = request.nextUrl.pathname.startsWith("")
            if (isOnAdminPanel){
                if (isLoggedIn) return true;        
                return false
            } else if (isLoggedIn){
                return Response.redirect(new URL('/', request.nextUrl));
            }
            return true;
        }
    },
};