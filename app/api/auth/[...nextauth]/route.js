import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import hashPassword from "@/lib/hashPassword";
import getDomain from "@/lib/getDomain";
import verifyPassword from "@/lib/verifyPassword";

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
                        const verified = await verifyPassword(password, user.password);

                        console.log(user.password);
                        console.log(password);
                        console.log(verified);

                        if (user.blocked) {
                            return Promise.resolve(null);
                        } else if (
                            user.email === email &&
                            user.password === hashedPassword
                        ) {
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
                token._id = user._id;
                token.status = user.status;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                _id: token._id,
                status: token.status,
                email: token.email,
            };
            return session;
        },
        async redirect({ url, baseUrl }) {
            // console.log(`baseUrl: -----> ${baseUrl}`);
            // console.log(`url: -----> ${url}`);

            if (url.startsWith(baseUrl)) {
                // console.log(`returned url: -----> ${url}`);
                return url;
            } else {
                // console.log(`returned baseUrl: -----> ${baseUrl}`);
                return baseUrl;
            }
        },
        async signIn({ user }) {
            if (user) {
                try {
                    await updateTime(user._id);
                    return await true;
                } catch (error) {
                    console.error(`Error updating last login time: ${error}`);
                    return await false;
                }
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
