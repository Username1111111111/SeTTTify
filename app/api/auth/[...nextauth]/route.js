import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import getDomain from "@/lib/getDomain";
import verifyPassword from "@/lib/verifyPassword";
import { updateLastLogin } from "@/lib/updateLastLogin";

const domain = getDomain();

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "johndoe@gmail.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "qwerty123",
                },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;

                try {
                    const res = await fetch(
                        `${domain}/api/user?email=${email}`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    if (res.status == 200) {
                        const user = await res.json();
                        const verifiedPassword = await verifyPassword(
                            password,
                            user.password
                        );

                        if (user.blocked) {
                            return Promise.resolve(null);
                        } else if (user.email === email && verifiedPassword) {
                            return Promise.resolve({
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                blocked: user.blocked,
                                admin: user.admin,
                            });
                        } else {
                            throw new Error(
                                `Email and password doesn't match: ${user.email} & ${user.password}`
                            );
                        }
                    } else if (res.status === 404) {
                        return Promise.resolve(null);
                    }
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    return Promise.resolve(null);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.blocked = user.blocked;
                token.admin = user.admin;
            }
            return token;
        },
        async session({ session, token}) {
            session.user = {
                id: token.id,
                name: token.name,
                email: token.email,
                blocked: token.blocked,
                admin: token.admin,
            };
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
        async signIn({ user }) {
            try {
                await updateLastLogin(user.id);
            } catch (error) {
                return error;
            }
            return true;
        },
    },
    pages: {
        signOut: `${process.env.NEXTAUTH_URL}/api/auth/signin`,
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
