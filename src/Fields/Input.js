import React from "react";
import PropTypes from "prop-types";
import Field from "./Field";

export default class Input extends Field {
    constructor(props, context) {
        super(props, context);

        this.form = context.form;
        this.state = {
            value: this.props.value
        };
    }

    componentDidMount() {
        this.updateField();
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({value}, () => this.updateField());
    }

    render() {
        return (
            <input
                autoFocus={this.props.autoFocus}
                className={`Form__input ${this.props.className}`}
                type={this.props.type}
                name={this.props.name}
                value={this.state.value}
                id={`${this.form.id}-${this.props.name}`}
                placeholder={this.props.placeholder}
                onChange={event => this.handleChange(event)}
            />
        );
    }
}

Input.defaultProps = {
    type: 'text',
    value: '',
    className: '',
    placeholder: '',
    autoFocus: false
};

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    name: PropTypes.string.isRequired
};

Input.contextTypes = {
    form: PropTypes.object.isRequired
};
