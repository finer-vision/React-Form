# FV React Form

Flexible React form with validation.

## Installation

To install into your project, run this command.

```bash
npm install --save fv-react-form
```

## Usage

```js
import Form from "fv-react-form";

class Example extends Component {
    render() {
        return (
            <Form
                // Called if validation passes
                action={form => console.log(form)}
                method="POST"
                name="login"
                rules={{
                    name: 'required'
                }}
                // Called every time form is submitted
                onSubmit={form => console.log(form)}
            >
                {/* Show all errors */}
                <Form.Errors/>
                
                <Form.Group>
                    <Form.Input type="name" name="name" placeholder="Name"/>
                    {/* Show field error */}
                    <Form.Error field="name"/>
                </Form.Group>
                
                <Form.Button type="submit">Submit</Form.Button>
            </Form>
        );
    }
}

```

## Examples

To build examples, run this command.

```bash
npm run build-examples
```

## Contributing

All contributions are welcome. Before starting work on your contribution, please contact the maintainer to make sure 
no one else is working on the same contribution as you. To develop examples, run this command.

```bash
npm run build-examples
```

If you add a new example, make sure to update the compiler file webpack.mix.js with your new example file.
