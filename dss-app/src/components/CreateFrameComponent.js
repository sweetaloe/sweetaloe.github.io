import React from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'

class CreateFrame extends React.Component {
    render() {
        return <div>
            <div className="FrameForm" class="w-50">
                <div class="col-auto mb-5 mt-5">
                    <label for="frameName" class="visually-hidden">Название фрейма</label>
                    <input type="text" class="form-control" id="frameName" placeholder="Название фрейма" />
                </div>

                <Form className="p-2 mb-3 border">
                    <Form.Row className="d-flex">

                        <Form.Group as={Col} xs={3} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Тип">
                                <option>1</option>
                                <option>2</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} xs={8} controlId="">
                            <Form.Label>Zip</Form.Label>
                            <Form.Row className="d-flex">
                                <Form.Control as={Col} xs={10}/>
                                <Button variant="outline-danger">-</Button>
                            </Form.Row>
                        </Form.Group>


                    </Form.Row>
                </Form>
                <div className="d-grid gap-2">
                    <Button variant="outline-primary">
                        Block level button
                    </Button>
                </div>

            </div>
        </div>
    }
}

export default CreateFrame;