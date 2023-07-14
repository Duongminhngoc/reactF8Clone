import { Container, Grid } from "@mui/material";
import FooterNav from "./components/dashboard/FooterNav";
import LeftNav from "./components/dashboard/LeftNav";
import MainContent from "./components/dashboard/MainContent";
import TopMenu from "./components/dashboard/TopMenu";
import "./App.css";
function App() {
  return (
    <div className="App">
      <TopMenu />
      <div className="main">
        <div className="leftNav">
          <LeftNav />
        </div>
        <div className="mainContent">
          <MainContent />
        </div>
      </div>
      <FooterNav />
    </div>
  );
}

export default App;
