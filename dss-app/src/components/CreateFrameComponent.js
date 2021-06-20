import React from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'
import SlotComponent from './SlotComponent'
import _uniqueId from 'lodash/uniqueId';

class CreateFrame extends React.Component {

    constructor(props) {
        super(props)
        this.state = { slots: [<SlotComponent deleteAttribute={this.deleteAttribute} key={_uniqueId()}/>] }

        this.addAttribute = this.addAttribute.bind(this);
        this.deleteAttribute = this.deleteAttribute.bind(this);
    }

    addAttribute() {
        var newSlot = <SlotComponent deleteAttribute={this.deleteAttribute} key={_uniqueId()}/>
        this.setState(prevState => ({ slots: [...prevState.slots, newSlot] }))
    }

    deleteAttribute = (Key) => {
        this.setState(prevState => ({ slots: prevState.slots.filter(slot => slot.key !== Key) }))
    }

    render() {

        return <div>
            <div className="FrameForm" class="w-50">
                <div class="col-auto mb-2 mt-5">
                    <label for="frameName" >Имя фрейма</label>
                    <input type="text" class="form-control" id="frameName" placeholder="Название фрейма" />
                </div>

                <Form className="p-2 border">

                    {this.state.slots}

                    <div className="d-grid gap-2 mt-3">
                        <Button variant="outline-primary" onClick={this.addAttribute}>
                            Добавить свойство
                        </Button>
                    </div>
                </Form>


            </div>
        </div>
    }
}

export default CreateFrame;