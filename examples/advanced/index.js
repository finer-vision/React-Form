import React, {Component} from "react";
import {render} from "react-dom";
import Form from "../../src/index";

class Advanced extends Component {
    constructor(props) {
        super(props);
    }

    resetForm() {
        this.refs.form.reset();
    }

    render() {
        return (
            <Form
                action={form => console.log(form)}
                method="POST"
                name="advanced"
                ref="form"
                rules={{
                    risk: 'required|in:high|max:255',
                    email: 'required|max:255|email',
                    remember: 'checked',
                    okay: 'checked'
                }}
                noValidate={true}
                autoComplete={false}
                synchronous={false}
            >
                <Form.Errors/>

                <Form.Group>
                    <Form.Label>
                        <Form.Input type="radio" name="risk" value="high" defaultChecked/> High
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
                    <Form.Checkbox name="okay"/>
                </Form.Group>

                <br/>

                <Form.Button type="submit">Submit</Form.Button>
                <button type="button" onClick={() => this.resetForm()}>Reset</button>
            </Form>
        );
    }
}

render(<Advanced/>, document.querySelector('#root'));
