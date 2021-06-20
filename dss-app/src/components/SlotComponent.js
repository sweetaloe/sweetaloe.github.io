import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'


export default class SlotComponent extends React.Component {

    constructor(props) {
        super(props)
   
        this.state = {
            id: this.props.key,
            type: null,
            name: ''
        }
        this.handleChanges = this.handleChanges.bind(this);
    }

    handleChanges = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        return <Form.Row className="d-flex" controlId="slot">
            <Form.Group as={Col} xs={3} className="me-1" controlId="formGridState">
                <Form.Label>Тип</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} xs={9} controlId="">
                <Form.Label>Имя</Form.Label>
                <Form.Row className="d-flex">              
                    <Form.Control className="me-1 " value={this.state.name} onChange={this.handleChanges} />
                    <Button variant="outline-danger" onClick={() => { this.props.deleteAttribute(this._reactInternals.key) }}>-</Button>
                </Form.Row>
            </Form.Group>
        </Form.Row>
    }
}

