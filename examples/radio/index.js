import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class Radio extends Component {
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
                        status: 'required'
                    }}
                    noValidate={true}
                    autoComplete={false}
                    synchronous={false}
                    onSubmit={form => console.log(form)}
                >
                    <Form.Errors/>

                    <Form.Group>
                        <Form.Label>
                            Live
                            <Form.Input type="radio" name="status" value="live"/>
                        </Form.Label>

                        <br/>

                        <Form.Label>
                            Down
                            <Form.Input type="radio" name="status" value="down"/>
                        </Form.Label>

                        <br/>

                        <Form.Label>
                            Unknown
                            <Form.Input type="radio" name="status" value="unknown"/>
                        </Form.Label>
                    </Form.Group>

                    <Form.Button type="submit">Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

render(<Radio/>, document.querySelector('#root'));
