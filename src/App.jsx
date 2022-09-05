import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing screens
import HomeScreen from "./pages/HomeScreen";
import ProjectScreen from "./pages/ProjectScreen";
import BlogScreen from "./pages/BlogScreen";
import CrushPost from "./pages/CrushPost";
import RunPost from "./pages/RunPost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<HomeScreen />} />
        <Route path={`/projects`} element={<ProjectScreen />} />
        <Route path={`/blog`} element={<BlogScreen />} />
        <Route path={`/run`} element={<RunPost />} />
        <Route path={`/crush-you`} element={<CrushPost />} />
      </Routes>
    </BrowserRouter>
  );
}
