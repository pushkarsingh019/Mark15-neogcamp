import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing screens
import HomeScreen from "./pages/HomeScreen";
import ProjectScreen from "./pages/ProjectScreen";
import BlogScreen from "./pages/BlogScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<HomeScreen />} />
        <Route path={`/projects`} element={<ProjectScreen />} />
        <Route path={`/blog`} element={<BlogScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
