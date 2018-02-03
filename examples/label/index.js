import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/index";

class Label extends Component {
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
                <Form.Label field="name">Name</Form.Label>
                <Form.Input type="text" name="name"/>
                <Form.Button type="submit">Submit</Form.Button>
            </Form>
        );
    }
}

render(<Label/>, document.querySelector('#root'));
