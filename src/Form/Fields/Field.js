import {Component} from "react";
import Event from "fv-event";
import Util from "../Util";
import PropTypes from "prop-types";

export default class Field extends Component {
    constructor(props, context) {
        super(props, context);

        this.form = context.form;
        this.listeners = [];

        const fieldChangeListener = Event.addListener('field.change', field => {
            if (field.name === this.props.name && field.type === 'checkbox' && field.formId === this.form.id) {
                this.setState({checked: field.checked});
            }
        });

        this.listeners.push(fieldChangeListener);
    }

    componentWillUnmount() {
        Util.removeListeners(this.listeners);
    }

    updateForm(field) {
        this.form.handleChange(field);

        if (this.props.onChange) {
            this.props.onChange(field);
        }
    }

    getField() {
        const field = {
            name: this.props.name,
            type: this.props.type,
            formId: this.form.id
        };

        if (field.type === 'checkbox') {
            field.checked = this.state.checked;
        }

        if (field.type === 'file') {
            field.files = this.state.files;
        }

        // Handle updating of radio fields that have the same name.
        // TODO: Add tests and refactor.
        if (field.type === 'radio') {
            const formValue = this.form.getData(field.name);

            if (this.props.defaultChecked) {
                field.value = this.props.value;
                return field;
            }

            if (formValue === undefined) {
                field.value = this.state.value;
                return field;
            }

            if (this.state.value !== '') {
                field.value = this.state.value;
            }

            return field;
        }

        if (field.type !== 'checkbox' && field.type !== 'radio') {
            field.value = this.state.value;
        }

        return field;
    }

    updateField() {
        const field = this.getField();
        this.updateForm(field);
    }
}

Field.propTypes = {
    onChange: PropTypes.func
};

Field.contextTypes = {
    form: PropTypes.object.isRequired
};
