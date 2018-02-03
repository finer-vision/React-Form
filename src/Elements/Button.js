import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    constructor(props, context) {
        super(props, context);

        this.form = context.form;
    }

    handleClick() {
        if (this.props.type === 'submit') {
            this.form.submit();
        }
    }

    render() {
        return (
            <button className={`Form__button ${this.props.className}`} onClick={() => this.handleClick()}>
                {this.props.children}
            </button>
        );
    }
}

Button.defaultProps = {
    type: 'button',
    className: ''
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
};

Button.contextTypes = {
    form: PropTypes.object.isRequired
};
