import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("ESTAS SON LAS CREDENCIALES: ", credentials);
        try {
          const { email, password } = credentials;
          const URL = process.env.NEXTAUTH_URL;
          const response = await fetch(
            `${URL}?email=${email}&password=${password}`
          );
          const data = await response.json();
          if (data.access === true) {
            return credentials;
          }
          return null;
        } catch (error) {
          console.error("Error:", error);
        }
      }
    })
  ]
});

export { handler as GET, handler as POST };
