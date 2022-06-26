import React, { useState } from 'react';
import axios from 'axios';

import { FormControl, Button } from 'react-bootstrap';

export default function Search() {
  // store imageUrl to state:
  const [imageUrl, setImageUrl] = useState("https://www.spendwithpennies.com/wp-content/uploads/2020/01/Ratatouille-SWP-9.jpg")

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
      placeholder="Image URL"
      aria-label="Image URL"
      onChange={handleChangeImageUrl} />
      <Button variant="primary" onClick={predictImage}>
        Submit
      </Button>
      </div>
  )
}