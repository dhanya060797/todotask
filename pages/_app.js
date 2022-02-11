import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../utils/authConfig";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;
