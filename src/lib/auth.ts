import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await db.user.findUnique({
          where: {
            email: user.email ?? undefined,
          },
        });

        if (!existingUser) {
          await db.user.create({
            data: {
              email: user.email ?? "",
              name: user.name,
              avatar: user.image,
            },
          });
        }

        return true;
      } catch (err) {
        console.error("Error registering user in DB", err);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await db.user.findUnique({
          where: { email: user.email ?? undefined },
        });

        if (dbUser) {
          token.id = dbUser.id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
