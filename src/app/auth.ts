import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "@/app/lib/utils";
import { User } from "@/app/lib/model";
import bcrypt from "bcrypt";


export const {handlers, signIn, signOut, auth,} = NextAuth({
    ...authConfig,

    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    connectToDB()
                    const user = await User.findOne({login: credentials?.login, password: credentials?.password})
                    if(!user) throw new Error("Wrong credentials")
                    return user
                } catch(e){
                    console.log(e)
                    throw e
                    
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {

                token.id = user.id
                token.login = user.login;
                token.img = user.img;
            }
            return token;
          },
          async session({ session, token }) {
            if (token) {
              session.user.id = token.id;
              session.user.login = token.login;
              session.user.img = token.img;
            }
            return session;
          },
}})

interface User {
    username: string;
    img: string;
}
