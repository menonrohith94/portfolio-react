import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
import CertificationsPage from "./Pages/CertificationsPage";
import ContactPage from "./Pages/ContactPage";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <MainContentStyled>
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div>

        <HomePage />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/resume" element={<ResumePage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
          <Route exact path="/certifications" element={<CertificationsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  
  .lines{
      position: absolute;
      min-height: 100vh;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .line-1,.line-2,.line-3,.line-4{
          width: 1px;
          min-height: 100vh;
          background-color: var(--border-color);
      }
  }
`;

export default App;
