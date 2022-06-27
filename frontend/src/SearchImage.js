import React, { useState } from 'react';
import axios from 'axios';

import { FormControl, Button } from 'react-bootstrap';

export default function Search(props) {
  // store imageUrl to state to update changes:
  const [imageUrl, setImageUrl] = useState("");

  const {setOutput, setImageToPredict} = props;

  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  }

  const predictImage = () => {
    // our hook and handleChange will update photo whenever another is uploaded
    setImageToPredict(imageUrl);
    axios.post('/predict', {
      imageUrl: imageUrl
    }).then(res => {
      // results is an array with each name and value obj
      setOutput(res.data.results);
    }).catch(err => {
      alert(err);
    })
  }

  return (
    <div>
      <FormControl className="mb-3 bg-light text-dark"
      value={imageUrl}
      placeholder="Paste food image url here"
      aria-label="Image URL"
      onChange={handleChangeImageUrl} />
      <Button style={{backgroundColor: '#439A86'}} onClick={predictImage}>
        Submit
      </Button>
      </div>
  )
}