import {Component} from "react";
import Event from "fv-event";
import Util from "../Util";

export default class Field extends Component {
    constructor(props) {
        super(props);

        this.listeners = [];

        const fieldChangeListener = Event.addListener('field.change', field => {
            if (field.name === this.props.name && field.type === 'checkbox') {
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
            type: this.props.type
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
