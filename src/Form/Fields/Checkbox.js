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
                ref="field"
                className={`Form__checkbox ${this.props.className}`}
                type="checkbox"
                name={this.props.name}
                {...this.props}
                checked={this.state.checked}
                id={`field-${this.form.id}-${this.props.name}`}
                onChange={() => this.handleChange()}
            />
        );
    }
}

Checkbox.defaultProps = {
    checked: false,
    className: '',
    type: 'checkbox'
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
