import React, {Component} from "react";
import PropTypes from "prop-types";
import Validation from "fv-validation";
import Event from "fv-event";
import Util from "./Util";
import Input from "./Fields/Input";
import Checkbox from "./Fields/Checkbox";
import Textarea from "./Fields/Textarea";
import Select from "./Fields/Select";
import Button from "./Elements/Button";
import Label from "./Elements/Label";
import Group from "./Elements/Group";
import Error from "./Elements/Error";
import Errors from "./Elements/Errors";

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.validation = new Validation();
        this.ID = `form-${Util.guid()}`;
        this.state = {
            errors: [],
            fields: {}
        };
    }

    handleFieldChange(field) {
        const {fields} = this.state;

        if (['checkbox', 'radio'].indexOf(field.type) > -1) {
            fields[field.name] = field.checked;
        }

        if (field.type === 'file') {
            fields[field.name] = field.files;
        }

        if (['checkbox', 'file'].indexOf(field.type) === -1) {
            fields[field.name] = field.value;
        }

        this.setState({fields});

        if (this.props.onChange) {
            this.props.onChange(this.state.fields);
        }

        Event.emit('field.change', field);
        Event.emit('form.change', {name: this.props.name, fields});
    }

    getErrors(field = null) {
        if (field !== null) {
            return this.validation.getErrors(field);
        }
        return this.validation.errors;
    }

    getData(field = null) {
        if (field !== null) {
            return this.state.fields[field];
        }
        return this.state.fields;
    }

    submit() {
        const form = {
            name: this.props.name,
            id: this.ID,
            fields: this.state.fields,
            validation: this.validation,
        };

        if (this.props.rules) {
            this.validation.validate(this.state.fields, this.props.rules, this.props.messages);
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
                id: this.ID,
                getData: this.getData.bind(this)
            }
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.errors.length === 0 && this.props.synchronous) {
            this.refs.form.submit();
        }
    }

    render() {
        return (
            <form
                className={`Form ${this.props.className}`}
                ref="form"
                method={this.props.method}
                noValidate={this.props.noValidate}
                autoComplete={this.props.autoComplete ? 'on' : 'off'}
                onSubmit={event => this.handleSubmit(event)}
            >
                {this.props.children}
            </form>
        );
    }
}

Form.defaultProps = {
    noValidate: false,
    autoComplete: true,
    synchronous: false,
    method: 'GET',
    className: ''
};

Form.propTypes = {
    name: PropTypes.string,
    rules: PropTypes.object,
    messages: PropTypes.object,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    noValidate: PropTypes.bool,
    autoComplete: PropTypes.bool,
    className: PropTypes.string,
};

Form.childContextTypes = {
    form: PropTypes.object.isRequired
};

Form.Input = Input;
Form.Select = Select;
Form.Button = Button;
Form.Checkbox = Checkbox;
Form.Textarea = Textarea;
Form.Label = Label;
Form.Group = Group;
Form.Error = Error;
Form.Errors = Errors;
Form.Validation = Validation;
