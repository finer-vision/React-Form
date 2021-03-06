import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form
                action={form => console.log(form)}
                method="POST"
                name="login"
                rules={{
                    name: 'required'
                }}
                onSubmit={form => console.log(form)}
            >
                <Form.Errors/>
                <Form.Group>
                    <Form.Label field="name">Name</Form.Label>
                    <Form.Input type="text" name="name"/>
                </Form.Group>
                <Form.Button type="submit">Submit</Form.Button>
            </Form>
        );
    }
}

render(<Group/>, document.querySelector('#root'));
