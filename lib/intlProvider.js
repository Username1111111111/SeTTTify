import {NextIntlClientProvider, useMessages} from 'next-intl';

export default function IntlProvider({ children }) {
    const messages = useMessages();

    return (
        <NextIntlClientProvider
            messages={messages}
        >
            {children}
        </NextIntlClientProvider>
    );
}
