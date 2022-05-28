import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXTAUTH_SECRET!,
        }),
        // ...add more providers here
    ],

    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        // strictly typed =>  async session( params: {session: Session, user: User, token: JWT} )
        async session({ session, user, token }) {
            // in order to add username and uid to the User type see types/next-auth.d.ts file 
            session.user.username = session.user.name!.split("").join("").toLocaleLowerCase();
            session.user.uid = token.sub;

            return session;
        }
    }
});