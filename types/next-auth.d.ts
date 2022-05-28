import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            username: string | null | undefined;
            uid: string | null | undefined;
        } & DefaultSession["user"]
    }
}

// see: https://next-auth.js.org/getting-started/typescript