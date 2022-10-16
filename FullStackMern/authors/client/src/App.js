import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorForm from "./components/AuthorForm.js";
import AuthorList from "./components/AuthorList"
import OneAuthor from "./components/OneAuthor";
import NavBar from "./components/NavBar";
import EditForm from "./components/EditForm";
// import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<AuthorForm />} />
          <Route path="/authorList" element={<AuthorList />} />
          <Route path="/oneAuthor/:id" element={<OneAuthor />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;