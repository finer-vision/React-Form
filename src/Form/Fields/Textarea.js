import React from "react";
import PropTypes from "prop-types";
import Field from "./Field";

export default class Textarea extends Field {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: this.props.value || ''
        };
    }

    getValue() {
        if (this.props.hasOwnProperty('value')) {
            return this.props.value;
        }
        return this.state.value;
    }

    componentDidMount() {
        this.updateField();
    }

    handleChange(event) {
        this.setState({value: event.target.value}, () => this.updateField());
    }

    render() {
        return (
            <textarea
                ref="field"
                className={`Form__input ${this.props.className}`}
                name={this.props.name}
                {...this.props}
                value={this.getValue()}
                id={`field-${this.form.id}-${this.props.name}`}
                onChange={event => this.handleChange(event)}
            />
        );
    }
}

Textarea.defaultProps = {
    type: 'textarea',
    className: ''
};

Textarea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};
