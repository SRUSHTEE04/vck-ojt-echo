import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPages from "./pages/AdmissionPages";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/chatbot";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
const App = () =>{
const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
        <>
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Srushtee Suresh Khatkar"
          studentPhotoUrl="/Images/srushtee image.jpg "// Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home"element={<HomePage/>}/>
              <Route path="/about"element={<AboutPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/course" element={<CoursesPage/>}/>
              <Route path="/addmission"element={<AdmissionPages/>}/>                   
            </Routes>
            

          </Router>
          <ChatbotComponent/>
          <Footer/>
        </>
    )
}
export default App; 