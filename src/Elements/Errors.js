import React, {Component} from "react";
import PropTypes from "prop-types";
import Event from "fv-event";
import Util from "../Util";

export default class Errors extends Component {
    constructor(props, context) {
        super(props, context);

        this.form = context.form;
        this.listeners = [];
        this.state = {
            errors: []
        };

        const formSubmitListener = Event.addListener('form.submit', form => {
            this.setState({errors: form.validation.errors});
        });

        this.listeners.push(formSubmitListener);
    }

    componentWillUnmount() {
        Util.removeListeners(this.listeners);
    }

    render() {
        if (this.state.errors.length === 0) {
            return null;
        }

        return (
            <ul className={`Form__errors ${this.props.className}`}>
                {this.state.errors.map((error, index) => (
                    <li key={`${this.form.id}-errors-${index}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
}

Errors.defaultProps = {
    className: ''
};

Errors.propTypes = {
    field: PropTypes.string,
    className: PropTypes.string
};

Errors.contextTypes = {
    form: PropTypes.object.isRequired
};
