import React, {Component} from "react";
import Form from "./index";
import Textarea from "./Fields/Textarea";
import Select from "./Fields/Select";
import Checkbox from "./Fields/Checkbox";
import Label from "./Elements/Label";
import Error from "./Elements/Error";
import Validation from "fv-validation";
import Input from "./Fields/Input";
import Button from "./Elements/Button";
import Group from "./Elements/Group";
import Errors from "./Elements/Errors";

export default class Container extends Component {
    constructor(props) {
        super(props);

        this.reset.bind(this);

        this.state = {
            mount: true
        };
    }

    reset() {
        this.setState({mount: false}, () => this.setState({mount: true}));
    }

    render() {
        if (!this.state.mount) {
            return null;
        }

        return <Form {...this.props} reset={this.reset}/>;
    }
}

Container.Input = Input;
Container.Select = Select;
Container.Button = Button;
Container.Checkbox = Checkbox;
Container.Textarea = Textarea;
Container.Label = Label;
Container.Group = Group;
Container.Error = Error;
Container.Errors = Errors;
Container.Validation = Validation;
