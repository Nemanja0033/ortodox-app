import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="kalendar/:id" element={ <CalendarPage />} />
        <Route path="/post" element={ <PostPage />} />
        <Route path="/o-aplikaciji" element={ <AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App