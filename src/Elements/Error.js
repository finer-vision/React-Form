import React, {Component} from "react";
import PropTypes from "prop-types";
import Event from "fv-event";
import Util from "../Util";

export default class Error extends Component {
    constructor(props, context) {
        super(props, context);

        this.form = context.form;
        this.listeners = [];

        this.state = {
            error: null
        };

        const formSubmitListener = Event.addListener('form.submit', form => {
            const error = form.validation.getError(this.props.field);
            this.setState({error});
        });

        this.listeners.push(formSubmitListener);
    }

    componentWillUnmount() {
        Util.removeListeners(this.listeners);
    }

    render() {
        if (this.state.error === null) {
            return null;
        }

        return (
            <div className={`Form__error ${this.props.className}`}>
                {this.state.error}
            </div>
        );
    }
}

Error.defaultProps = {
    className: ''
};

Error.propTypes = {
    field: PropTypes.string,
    className: PropTypes.string
};

Error.contextTypes = {
    form: PropTypes.object.isRequired
};
