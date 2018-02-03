import {Component} from "react";
import Event from "fv-event";
import Util from "../Util";
import Input from "./Input";
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

        switch (field.type) {
            case 'checkbox':
                field.checked = this.state.checked;
                break;
            default:
                field.value = this.state.value;
                break;
        }

        this.form.handleChange(field);
    }
}

Field.contextTypes = {
    form: PropTypes.object.isRequired
};
