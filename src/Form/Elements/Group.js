import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`Form__group ${this.props.className}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

Group.defaultProps = {
    className: '',
    style: {}
};

Group.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};
