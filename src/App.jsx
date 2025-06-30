import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

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
          studentName="Saniya Mahesh Patil"
          studentPhotoUrl="/images/saniya.jpg" // Path to their photo
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
        <Route path="/admission" element={<AdmissionPage/>}/>
      </Routes>
     < ChatbotComponent />
    </Router>
    </div>
   
  )
}

export default App;