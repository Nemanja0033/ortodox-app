import CalendarPage from "./pages/Calendar";
import HomePage from "./pages/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import PostPage from "./pages/Fasts";
import AboutPage from "./pages/About";
import Navbar from "./components/navigation/Navigation";
import Footer from "./components/navigation/Footer";
import AdBanner from "./components/Ads/AdBanner";
const App = () => {

  return (
    <Router>
      <AdBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="kalendar/:id" element={ <CalendarPage />} />
        <Route path="/post" element={ <PostPage />} />
        <Route path="/o-aplikaciji" element={ <AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App