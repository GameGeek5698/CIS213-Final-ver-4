import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Progress from './components/Progress';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Projects", element: <Projects />},
  { path: "/Progress", element: <Progress />}

]);

export default function App() {
  return <RouterProvider router={router} />;
}
