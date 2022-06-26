import React, { useState } from 'react';
import axios from 'axios';

import { FormControl, Button } from 'react-bootstrap';

export default function SearchImage() {
  // store imageUrl to state:
  const [imageUrl, setImageUrl] = useState("https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg")

  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  }

  const predictImage = () => {
    axios.post('/predict', {
      imageUrl: imageUrl
    }).then((res) => {
      alert(JSON.stringify(res.data))
    }).catch((err) => {
      alert(err);
    })
  }

  return (
    <div>
      <FormControl className="mb-3" value={imageUrl} placeholder="Image URL" aria-label="Image URL" onChange={handleChangeImageUrl}/>
      <Button variant="primary" onClick={predictImage}>
        Submit
      </Button>
      </div>
  )
}
