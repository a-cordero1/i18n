import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import JobsList from "./components/JobsList";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const language = navigator.language.split(/[-_]/)[0]; 
const messages = language === 'es' ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <JobsList />
    </IntlProvider>,
    document.getElementById("root")
);

