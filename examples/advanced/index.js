import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/index";

class Advanced extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form
                action="./"
                method="POST"
                name="login"
                rules={{
                    name: 'required,max:255',
                    email: 'required,max:255,email'
                }}
                noValidate={true}
                autoComplete={false}
                synchronous={true}
            >
                <Form.Group>
                    <Form.Label field="name">Name</Form.Label>
                    <Form.Input type="text" name="name"/>
                    <Form.Error field="name"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label field="email">Email Address</Form.Label>
                    <Form.Input type="email" name="email"/>
                    <Form.Error field="email"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label field="remember">Remember Me</Form.Label>
                    <Form.Checkbox name="remember"/>
                </Form.Group>

                <Form.Button type="submit">Submit</Form.Button>
            </Form>
        );
    }
}

render(<Advanced/>, document.querySelector('#root'));
