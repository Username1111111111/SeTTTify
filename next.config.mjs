/** @type {import('next').NextConfig} */

const nextConfig = {
    //   env: {
    //     baseUrl: "",
    // },
};

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./i18n.js');

export default withNextIntl(nextConfig);
// export default nextConfig;
