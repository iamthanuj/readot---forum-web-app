import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Stories from "./pages/Stories";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/stories" element={<Stories/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/getstarted" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
