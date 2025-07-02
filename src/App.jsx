import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import './styles/pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import { useState } from "react";
import DeveloperInfoPopup from "./components/Developerinfo/DeveloperinfoPopup";
import Header from "./components/Header/Header";



const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
  setShowPopup(false);
  };
  return(
      <div>
      
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Aasiya Amit Hajarat"
          studentPhotoUrl="\images\aasiya.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/admissions" element={<AdmissionPage/>}/>
      </Routes>
    <ChatbotComponent/>
    </Router>
    
    </div>
  )
}
export default App;