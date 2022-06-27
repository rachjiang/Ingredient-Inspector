import { useState } from 'react';
import { Container, Stack, Navbar } from 'react-bootstrap';

import SearchImage from './SearchImage';
import Output from './Output';

function App() {
  // to render the image, name and probability output, store to state:
const [output, setOutput] = useState([]);
const [imageToPredict, setImageToPredict] = useState("");

  return (
    <div>
      <Navbar className='py-5 text-center' style={{backgroundColor: '#70A37F'}} navbarscroll='true' 
      >
        <Container className="nav justify-content-center">
        <Navbar.Brand className='text-light display' href="/"><h4>INGREDIENT INSPECTOR</h4></Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='border border-light border-5 rounded'>
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
  );
}

export default App;
