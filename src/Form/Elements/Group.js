import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`Form__group ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}

Group.defaultProps = {
    className: ''
};

Group.propTypes = {
    className: PropTypes.string.isRequired
};
