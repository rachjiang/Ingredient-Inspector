import React from 'react'
import { Table, Row, Col } from "react-bootstrap";

export default function Output(props) {
    const {output = [], imageToPredict} = props;
    // output is a JSON obj with name and value properties
  return (
    <Row className="mt-5">
        <Col>
        <div className="mb-5 row justify-content-center-align-items-flex-start">
            {/* if there's an image, render it */}
            {imageToPredict ? <img src={imageToPredict}
            style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto"
            }}
            alt="No Predictions Yet"
        /> : 
            <div>
                Awaiting food image to predict ingredients...
            </div>}
        </div>
        </Col>
        <Col>
        <Table hover>
            <thead>
                <tr style={{backgroundColor: '#FCEADE'}}>
                    <th>#</th>
                    <th>Dish/Ingredients</th>
                    <th>Accuracy</th>
                </tr>
            </thead>
            {/* map through the output object for the body of the table */}
            <tbody>
                {output.map((obj, idx) => {
                    // return a row containing cells
                    return <tr style={{backgroundColor: '#ECFEE8'}}> 
                        <td>{idx + 1}</td>
                        <td>{obj.name}</td>
                        <td>{obj.value}</td>
                    </tr>
                })}
            </tbody>
        </Table>
        </Col>
    </Row>
  )
}
