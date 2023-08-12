import './App.css'
import {ViewStatusRequest} from "./common/ViewStatusRequest/ViewStatusRequest.tsx";
import {Header} from "./components/Header/Header.tsx";
import {Main} from "./components/Main/Main.tsx";
import {Skills} from "./components/Skills/Skills.tsx";
import {About} from "./components/About/About.tsx";
import {Projects} from "./components/Projects/Projects.tsx";
import {Contact} from "./components/Contact/Contact.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

function App() {

  return (
      <div className="App">
        <ViewStatusRequest/>
        <Header/>
        <Main/>
        <Skills/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App
