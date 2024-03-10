import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    // A list of all locales that are supported
    locales: ["en", "ge"],

    // Used when no locale matches
    defaultLocale: "en",

    // https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix-never
    // Don't use route prefix
    localePrefix: "never"
});

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
