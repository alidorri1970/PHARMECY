import { Layout } from "./components/Layout";

import {ShopContextProvider} from "./components/context/shopcontext"

function App() {
  return (
    <ShopContextProvider>
      <Layout />
      </ShopContextProvider>
  );
}

export default App;

