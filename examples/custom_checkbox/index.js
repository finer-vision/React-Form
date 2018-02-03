import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class CustomCheckbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label field="checkbox">Check me out</Form.Label>
                    <div className={`checkbox ${this.state.checked ? 'checkbox--checked' : ''}`}>
                        <Form.Checkbox name="checkbox" onChange={checked => this.setState({checked})}/>
                    </div>
                </Form.Group>
            </Form>
        );
    }
}

render(<CustomCheckbox/>, document.querySelector('#root'));
