import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Label extends Component {
    constructor(props, context) {
        super(props, context);

        this.form = context.form;
    }

    render() {
        const props = {
            className: `Form__label ${this.props.className}`
        };

        if (this.props.children.length === 0) {
            props.htmlFor = `${this.form.id}-${this.props.field}`;
        }

        return (
            <label {...props}>
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
