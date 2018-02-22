import React from "react";
import PropTypes from "prop-types";
import Field from "./Field";

export default class Input extends Field {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: this.getValue()
        };
    }

    getValue() {
        if (this.props.type === 'radio' && !this.props.defaultChecked) {
            return '';
        }
        return this.props.value;
    }

    componentDidMount() {
        this.updateField();
    }

    handleChange(event) {
        let value = event.target.value;

        if (this.props.type === 'radio') {
            value = this.props.value;
        }

        this.setState({value}, () => this.updateField());
    }

    render() {
        const props = Object.assign({}, this.props);
        delete props.type;
        delete props.name;
        delete props.className;

        return (
            <input
                className={`Form__input ${this.props.className}`}
                type={this.props.type}
                name={this.props.name}
                {...props}
                value={this.state.value}
                id={`field-${this.form.id}-${this.props.name}`}
                onChange={event => this.handleChange(event)}
            />
        );
    }
}

Input.defaultProps = {
    type: 'text',
    value: '',
    defaultChecked: false,
    className: ''
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
