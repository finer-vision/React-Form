import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class Textarea extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            description: ''
        };
    }

    handleChange(field) {
        // Prefix new lines with a bullet-point.
        const description = field.value.replace(/^(?! • )/gm, ' • ');
        this.setState({description});
    }

    render() {
        return (
            <div>
                <Form
                    action="./"
                    method="POST"
                    name="login"
                    rules={{
                        description: 'required|max:255',
                        about: 'required|in:yes,no,maybe|max:255'
                    }}
                    noValidate={true}
                    autoComplete={false}
                >
                    <Form.Group>
                        <Form.Label field="description">Description</Form.Label>
                        <br/>

                        <Form.Textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            cols={40}
                            rows={8}
                        />

                        <Form.Error field="description"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label field="about">About</Form.Label>
                        <br/>

                        <Form.Textarea
                            name="about"
                            cols={40}
                            rows={8}
                        />

                        <Form.Error field="about"/>
                    </Form.Group>

                    <Form.Button type="submit">Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

render(<Textarea/>, document.querySelector('#root'));
