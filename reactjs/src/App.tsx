import { Route, Routes } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import SingleProject from "./pages/SingleProject"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />  
          <Route path="projects" element={ <Projects /> } />
          <Route path="projects/:id" element={ <SingleProject /> } />
          <Route path="contact" element={ <Contact /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
