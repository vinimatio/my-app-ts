import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout/Layout";
import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {
  !getAllLocalStorage && createLocalStorage();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
