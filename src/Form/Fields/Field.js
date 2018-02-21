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

    updateField() {
        const field = {
            name: this.props.name,
            type: this.props.type,
            formId: this.form.id
        };

        if (field.type === 'checkbox' || field.type === 'radio') {
            field.checked = this.state.checked;
        }

        field.value = this.state.value;

        this.form.handleChange(field);

        if (this.props.onChange) {
            this.props.onChange(field);
        }
    }
}

Field.propTypes = {
    onChange: PropTypes.func
};

Field.contextTypes = {
    form: PropTypes.object.isRequired
};
