import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import pageRoutes from "./routes/pageRoutes";
// import type { PageRoute } from "./routes/pageRoutes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// If you get a module not found error, try changing the import to './routes/pageRoute.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <NavBar />
      <>
        <Routes>
          {pageRoutes.map((route: PageRoute) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Routes>
      </> */}
    </BrowserRouter>
  );
}

export default App;
