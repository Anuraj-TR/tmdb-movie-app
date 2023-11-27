// import { RouterProvider } from "react-router-dom";
import { PageRoutes } from "./routes/routes";
import { Footer, Header } from "./layouts";

function App() {
  return (
    <>
      <Header />
      <PageRoutes />
      <Footer />
    </>
  );
}

export default App;
