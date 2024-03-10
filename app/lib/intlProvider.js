// import { NextIntlProvider } from "next-intl";
// import { useCookies } from "react-cookie";

// export default function IntlProvider({ children }) {
//     const [cookies] = useCookies(["NEXT_LOCALE"]);
//     const locale = cookies.NEXT_LOCALE || "en";
//     const messages = require(`../${locale}.json`);

//     return (
//         <NextIntlProvider
//             messages={messages}
//             now={new Date(pageProps.now)}
//             timeZone="Europe/Berlin"
//         >
//             {children}
//         </NextIntlProvider>
//     );
// }
