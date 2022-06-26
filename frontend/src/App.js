import { useState } from 'react';
import { Container, Stack } from 'react-bootstrap';

import SearchImage from './SearchImage';
import Output from './Output';

function App() {
  // to render the image, name and probability output, store to state:
const [output, setOutput] = useState([]);
const [imageToPredict, setImageToPredict] = useState("");

  return (
    <Container>
      {/* gap spaces the components */}
      <Stack gap={2}>
      {/* mt = margin top */}
      <div className="mt-3" />
      <SearchImage />
      <Output output={output} imageToPredict={imageToPredict} />
      </Stack>
    </Container>
  );
}

export default App;
