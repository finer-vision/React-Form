import React from "react";
import PropTypes from "prop-types";
import Field from "./Field";

export default class Select extends Field {
    constructor(props, context) {
        super(props, context);

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

    renderOptions() {
        if (this.props.options.length === 0) {
            return this.props.children;
        }

        return this.props.options.map((option, index) => (
            <option key={`select-option-${this.form.id}-${index}`}>{option}</option>
        ));
    }

    render() {
        return (
            <select
                className={`Form__input ${this.props.className}`}
                name={this.props.name}
                {...this.props}
                value={this.state.value}
                id={`${this.form.id}-${this.props.name}`}
                onChange={event => this.handleChange(event)}
            >
                {this.renderOptions()}
            </select>
        );
    }
}

Select.defaultProps = {
    type: 'text',
    value: '',
    className: '',
    options: []
};

Select.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
