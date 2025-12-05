import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod'; 
import { PrismaClient } from './app/generated/prisma';
import bcrypt from 'bcryptjs';


const prisma = new PrismaClient()

export const authConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register'
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          throw new Error('Invalid credentials');
        }

        const { email, password } = parsedCredentials.data;

        //find mail in db
        const user = await prisma.user.findUnique({
          where: {
            email: email.toLowerCase()
          }
        })

        if (!user) {
          throw new Error('No user found');
        }

        //compare password
        if(!bcrypt.compareSync(password, user.password!)) {
          throw new Error('Invalid credentials');
        }

        const { password:_, ...userWithoutPassword } = user;

        console.log(userWithoutPassword);
        return userWithoutPassword;
      },
    }),
  ]
} satisfies NextAuthConfig;

export const { signIn, signOut, auth } = NextAuth(authConfig);