import NextAuth from 'next-auth';
import TwitterProvider from "next-auth/providers/twitter";


export const authOptions = {
    providers:[
        TwitterProvider({
            clientId: process.env.TWITTER_CONSUMER_KEY,
            clientSecret: process.env.TWITTER_CONSUMER_SECRET
        })
    ]
    // ,
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //       return true
    //     },
    //     async redirect({ url, baseUrl }) {
    //       return baseUrl
    //     },
    //     async session({ session, token, user }) {
    //       return session, user
    //     },
    //     async jwt({ token, user, account, profile, isNewUser }) {
    //       return profile
    //     }
    //   }
    
}

export default NextAuth(authOptions)