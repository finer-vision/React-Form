import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class Advanced extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form
                    action="./"
                    method="POST"
                    name="login"
                    rules={{
                        risk: 'required|in:high|max:255',
                        email: 'required|max:255|email',
                        remember: 'checked',
                        okay: 'checked'
                    }}
                    noValidate={true}
                    autoComplete={false}
                >
                    <Form.Errors/>

                    <Form.Group>
                        <Form.Label>
                            <Form.Input type="radio" name="risk" value="high"/> High
                        </Form.Label>
                        <br/>
                        <Form.Label>
                            <Form.Input type="radio" name="risk" value="medium"/> Medium
                        </Form.Label>
                        <br/>
                        <Form.Label>
                            <Form.Input type="radio" name="risk" value="low"/> Low
                        </Form.Label>
                    </Form.Group>

                    <br/>

                    <Form.Group>
                        <Form.Label field="email">Email Address</Form.Label>
                        <Form.Input type="email" name="email"/>
                    </Form.Group>

                    <br/>

                    <Form.Group>
                        <Form.Label field="remember">Remember Me</Form.Label>
                        <Form.Checkbox name="remember"/>
                    </Form.Group>

                    <br/>

                    <Form.Group>
                        <Form.Label field="okay">Okay</Form.Label>
                        <Form.Input type="checkbox" name="okay"/>
                    </Form.Group>

                    <br/>

                    <Form.Button type="submit">Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

render(<Advanced/>, document.querySelector('#root'));
