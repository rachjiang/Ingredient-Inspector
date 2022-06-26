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
      <FormControl className="mb-3"
      value={imageUrl}
      placeholder="Show us what you're craving here! Paste an image URL"
      aria-label="Image URL"
      onChange={handleChangeImageUrl} />
      <Button variant="primary" onClick={predictImage}>
        Submit
      </Button>
      </div>
  )
}