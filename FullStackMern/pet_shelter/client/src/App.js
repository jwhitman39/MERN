import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PetForm from "./components/PetForm.js";
import PetList from "./components/PetList"
import OnePet from "./components/OnePet";
import NavBar from "./components/NavBar";
import EditForm from "./components/EditForm";
// import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<PetForm />} />
          <Route path="/petList" element={<PetList />} />
          <Route path="/onePet/:id" element={<OnePet />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;