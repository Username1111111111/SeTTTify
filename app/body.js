import Header from "./ui/header/header";
import SessionProvider from "./lib/sessionProvider";
import { getServerSession } from "next-auth";
// import IntlProvider from "./lib/intlProvider";

export default async function Body({ children }) {
    const session = await getServerSession();

    return (
        <SessionProvider session={session} refetchInterval={3}>
            {/* <IntlProvider> */}
                <body className="container-fluid bg-body-tertiary">
                    <div className="row">
                        <Header />
                    </div>
                    <main className="w-100 p-0 m-0">
                        <div className="row">{children}</div>
                    </main>
                </body>
            {/* </IntlProvider> */}
        </SessionProvider>
    );
}
