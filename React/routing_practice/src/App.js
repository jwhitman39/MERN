import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";



const Home = (props) => {
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  );
}

const Input = (props) => {
  const {input, color, color2} = useParams();

  return(
    <>
      {
        isNaN(input)?
        <div style={color?
          {color: color, backgroundColor: color2}
          :null
        }>
          <p>The word is: {input}</p>
        </div>
        :
        <div>
          <p>The number is: {input}</p>
        </div>
      }
    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:input" element={<Input />} />
          <Route path="/:input/:color/:color2" element={<Input />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
