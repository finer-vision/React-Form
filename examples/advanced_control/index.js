import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/Form/index";

class AdvancedControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };
    }

    submitForm() {
        this.refs.form.submit();
        const errors = this.refs.form.getErrors();

        console.log(this.refs.form.getData());

        this.setState({errors});
    }

    render() {
        return (
            <div>
                {this.state.errors.map((error, index) => <p key={index} className="Form__error">{error}</p>)}

                <Form
                    ref="form"
                    action="./"
                    method="POST"
                    name="login"
                    rules={{
                        name: 'required,max:255',
                        email: 'required,max:255,email'
                    }}
                    noValidate={true}
                    autoComplete={false}
                >
                    <Form.Group>
                        <Form.Label field="name">Name</Form.Label>
                        <Form.Input type="text" name="name" placeholder="Name"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label field="email">Email Address</Form.Label>
                        <Form.Input type="email" name="email" placeholder="Email"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label field="remember">
                            Remember Me
                            <Form.Checkbox name="remember"/>
                        </Form.Label>
                    </Form.Group>
                </Form>

                <button onClick={() => this.submitForm()}>Submit Form</button>
            </div>
        );
    }
}

render(<AdvancedControl/>, document.querySelector('#root'));
