import React, { useState } from 'react';
import axios from 'axios';

import { FormControl, Button } from 'react-bootstrap';

export default function Search() {
  // store imageUrl to state to update changes:
  const [imageUrl, setImageUrl] = useState("")

  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  }

  const predictImage = () => {
    axios.post('/predict', {
      imageUrl: imageUrl
    }).then(res => {
      alert(JSON.stringify(res.data))
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