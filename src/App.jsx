import "./App.css";
import Navbar from "./components/Navbar";
import AppPosts from "./pages/AppPosts";
import Router from "./Router";

export default function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}
