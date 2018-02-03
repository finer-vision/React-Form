import React from "react";
import Field from "./Field";
import PropTypes from "prop-types";

export default class Checkbox extends Field {
    constructor(props, context) {
        super(props, context);

        this.form = context.form;

        this.state = {
            checked: this.props.checked
        };
    }

    componentDidMount() {
        this.updateField();
    }

    handleChange() {
        const checked = !this.state.checked;
        this.setState({checked}, () => this.updateField());
    }

    render() {
        return (
            <input
                className={`Form__checkbox ${this.props.className}`}
                type={this.props.type}
                checked={this.state.checked}
                name={this.props.name}
                id={`${this.form.id}-${this.props.name}`}
                onChange={() => this.handleChange()}
            />
        );
    }
}

Checkbox.defaultProps = {
    type: 'checkbox',
    checked: false,
    className: ''
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};

Checkbox.contextTypes = {
    form: PropTypes.object.isRequired
};
