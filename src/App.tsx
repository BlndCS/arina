import { RouterProvider } from "react-router-dom";
import Fallback from "./pages/Fallback";
import { Suspense, useEffect } from "react";
import router from "./routes/Index";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
