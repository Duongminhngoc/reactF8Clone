import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import FooterNav from "./components/dashboard/FooterNav";
import LeftNav from "./components/dashboard/LeftNav";
import MainContent from "./components/dashboard/MainContent";
import TopMenu from "./components/dashboard/TopMenu";
import "./App.css";
import LearningPath from "./components/learningPath/LearningPath";
import Learning from "./components/learning/Learning";
import Blog from "./components/blog/Blog";
function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <div className="main">
          <div className="leftNav">
            <LeftNav />
          </div>
          <div className="mainContent">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/learning-path" element={<LearningPath />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </div>
        <FooterNav />
      </div>
    </Router>
  );
}

export default App;
