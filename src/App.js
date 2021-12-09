import "./App.css";
import Footer from "./Components/Footer.js";
import Navbar from "./Components/Navbar.js";
import Textarea from "./Components/Textarea.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Notes from "./Components/Notes.js";

function App() {
  return (
    <>
      {/* <Router> */}
        <header>
          <Navbar />
        </header>
        <main>
          <Textarea/>
          {/* <Routes> */}
            {/* <Route path="/" element={<Textarea />} />
            <Route path="/notes" element={<Notes />} />
          </Routes> */}
        </main>
        <footer>
          <Footer />
        </footer>
      {/* </Router> */}
    </>
  );
}

export default App;
//Components:-navbar,textcomponent,notescomponents
//Functionalities:-Copy Text,Improve Text,Upercase,Lowercase,Clear Text,Take Note,preview,words and chars,reading time
