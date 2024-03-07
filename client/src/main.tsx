import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArtistList } from './components/ArtistList/ArtistList.js';
import { ProjectList } from './components/ProjectsList/ProjectList.js';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails.js';
import { ArtistDetails } from './components/ArtistDetails/ArtistDetails.js';
import { Nav } from './components/NavBar/Nav.js';
import './index.css'
import App from './App.js'
import { ContextComponent } from './components/contextComponent.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>

    <Nav />
    <ContextComponent >
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/artistList" element={<ArtistList />} />
        <Route path="/projectList" element={<ProjectList />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails />} />
        <Route path="/artistDetails/:id" element={<ArtistDetails />} />
    </Routes>
    </ContextComponent>
  </Router>
);
