import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class File extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form
                    action={form => console.log(form)}
                    method="POST"
                    name="login"
                    rules={{
                        image: 'required'
                    }}
                    noValidate={true}
                    autoComplete={false}
                    synchronous={false}
                >
                    <Form.Group>
                        <Form.Label field="image">Choose an image</Form.Label>
                        <Form.Input type="file" name="image"/>
                        <Form.Error field="image"/>
                    </Form.Group>

                    <Form.Button type="submit">Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

render(<File/>, document.querySelector('#root'));
