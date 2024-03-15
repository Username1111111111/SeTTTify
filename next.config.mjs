/** @type {import('next').NextConfig} */

const nextConfig = {
    //   env: {
    //     baseUrl: "",
    // },
    images: {
        domains: ["picsum.photos"],
    },
};

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.js");

export default withNextIntl(nextConfig);
// export default nextConfig;
