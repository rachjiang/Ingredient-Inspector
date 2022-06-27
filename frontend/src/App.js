import { useState } from 'react';
import { Container, Stack, Navbar } from 'react-bootstrap';
import magnify from './magnify.png';
import './App.css'
import SearchImage from './SearchImage';
import Output from './Output';

function App() {
  // to render the image, name and probability output, store to state:
const [output, setOutput] = useState([]);
const [imageToPredict, setImageToPredict] = useState("");

  return (
    <div>
      <div className='bg-image'>
        <Navbar className='py-5 text-center'
          navbarscroll='true'>
          <Container className="nav justify-content-center">
            <Navbar.Brand className='text-dark display'
              href="/">
              <h4>INGREDIENT INSPECTOR</h4>
              <img src={magnify} alt=""/>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          {/* gap spaces the components */}
          <Stack gap={2}>
          {/* mt = margin top */}
          <div className="mt-5" />
          {/* passing hooks so component can update state for the image submission and send the response object from the server with name and value properties for the table */}
          <SearchImage setOutput={setOutput} setImageToPredict={setImageToPredict}/>
          <Output output={output} imageToPredict={imageToPredict} />
          </Stack>
        </Container>
      </div>
    </div>
  );
}

export default App;
