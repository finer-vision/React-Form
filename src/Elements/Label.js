import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Label extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.form = context.form;
    }

    render() {
        return (
            <label className={`Form__label ${this.props.className}`} htmlFor={`${this.form.id}-${this.props.field}`}>
                {this.props.children}
            </label>
        );
    }
}

Label.defaultProps = {
    className: ''
};

Label.propTypes = {
    field: PropTypes.string,
    className: PropTypes.string
};

Label.contextTypes = {
    form: PropTypes.object.isRequired
};
