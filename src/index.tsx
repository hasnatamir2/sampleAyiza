import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { ApolloProvider } from "@apollo/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import client from "./graphql/Client";
import Toast from "./components/common/ShowToast";

const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement as HTMLElement)

library.add(fas);

root &&
    root.render(
        <React.StrictMode>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Toast />
                        <App />
                    </BrowserRouter>
                </Provider>
            </ApolloProvider>
        </React.StrictMode>
    );
