import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import pageRoutes from "./routes/pageRoutes";
import type { PageRoute } from "./routes/pageRoutes";
// If you get a module not found error, try changing the import to './routes/pageRoute.tsx'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {pageRoutes.map((route: PageRoute) => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
