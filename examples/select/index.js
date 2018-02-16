import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class Select extends Component {
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
                        name: 'required|max:255',
                        email: 'required|max:255,email',
                        country: 'in:5,6,7'
                    }}
                    noValidate={true}
                    autoComplete={false}
                    synchronous={false}
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
                        <Form.Label field="country">Country</Form.Label>
                        <Form.Select name="country">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </Form.Select>
                        <Form.Error field="country"/>
                    </Form.Group>

                    <Form.Button type="submit">Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

render(<Select/>, document.querySelector('#root'));
