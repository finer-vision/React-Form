import React, {Component} from "react";
import PropTypes from "prop-types";
import Validation from "fv-validation";
import Event from "fv-event";
import Util from "./Util";
import Input from "./Fields/Input";
import Checkbox from "./Fields/Checkbox";
import Button from "./Elements/Button";
import Label from "./Elements/Label";
import Group from "./Elements/Group";
import Error from "./Elements/Error";
import Errors from "./Elements/Errors";

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.validation = new Validation();

        this.ID = Util.guid();

        this.state = {
            errors: [],
            fields: {}
        };
    }

    handleFieldChange(field) {
        const {fields} = this.state;

        switch (field.type) {
            case 'checkbox':
                fields[field.name] = field.checked;
                break;
            default:
                fields[field.name] = field.value;
                break;
        }

        this.setState({fields});

        Event.emit('field.change', field);
        Event.emit('form.change', {name: this.props.name, fields});
    }

    submit() {
        const form = {
            name: this.props.name,
            fields: this.state.fields,
            validation: this.validation,
        };

        if (this.props.rules) {
            this.validation.validate(this.state.fields, this.props.rules);
            const errors = this.validation.getErrors();
            form.errors = errors;

            if (this.props.onSubmit) {
                this.props.onSubmit(form);
            }

            this.setState({errors});

            if (errors.length > 0) {
                Event.emit('form.submit', form);
                return;
            }
        }

        Event.emit('form.submit', form);

        requestAnimationFrame(() => {
            if (this.props.action && typeof this.props.action === 'function') {
                this.props.action(form);
            }

            if (this.props.action && typeof this.props.action === 'string') {
                console.log('TODO: submit form functionality');
            }
        });
    }

    getChildContext() {
        return {
            form: {
                handleChange: this.handleFieldChange.bind(this),
                submit: this.submit.bind(this),
                id: this.ID
            }
        };
    }

    render() {
        return (
            <form
                className="Form"
                ref="form"
                noValidate={this.props.noValidate}
                onSubmit={event => event.preventDefault()}
            >
                {this.props.children}
            </form>
        );
    }
}

Form.defaultProps = {
    noValidate: false
};

Form.propTypes = {
    name: PropTypes.string,
    rules: PropTypes.object,
    onSubmit: PropTypes.func,
    action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    noValidate: PropTypes.bool
};

Form.childContextTypes = {
    form: PropTypes.object.isRequired
};

Form.Input = Input;
Form.Button = Button;
Form.Checkbox = Checkbox;
Form.Label = Label;
Form.Group = Group;
Form.Error = Error;
Form.Errors = Errors;
