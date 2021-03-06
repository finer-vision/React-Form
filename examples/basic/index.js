import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class Basic extends Component {
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
                <Form.Input type="text" name="name" placeholder="Name"/>
                <Form.Button type="submit">Submit</Form.Button>
            </Form>
        );
    }
}

render(<Basic/>, document.querySelector('#root'));
