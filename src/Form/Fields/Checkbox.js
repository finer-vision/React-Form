import React from "react";
import Field from "./Field";
import PropTypes from "prop-types";

export default class Checkbox extends Field {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checked: this.props.checked
        };
    }

    componentDidMount() {
        this.updateField();
    }

    handleChange() {
        const checked = !this.state.checked;

        if (this.props.onChange) {
            this.props.onChange(checked);
        }

        this.setState({checked}, () => this.updateField());
    }

    render() {
        return (
            <input
                className={`Form__checkbox ${this.props.className}`}
                type="checkbox"
                name={this.props.name}
                {...this.props}
                checked={this.state.checked}
                id={`${this.form.id}-${this.props.name}`}
                onChange={() => this.handleChange()}
            />
        );
    }
}

Checkbox.defaultProps = {
    checked: false,
    className: ''
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired
};
