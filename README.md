# snabbdom_on_rails-example
Example of using snabbdom with rails

### Start the app

The usual Rails stuff:

- `bundle && npm i`
- `rake db:migrate && rake db:test:prepare`
- `rake rspec`
- `foreman start -f Procfile.dev`

### How it works

Check out [snabbdom_on_rails](https://github.com/StevenIseki/snabbdom-on-rails) or `client/package.json` for more info.

The main component currently in this app is in client/bundles/Teams/App.jsx and looks like this.
The rails routes are `http://localhost:3000/cms/teams` and `http://localhost:3000/teams` at the moment the `cms/teams` route uses snabbdom and the teams view is just a regular rails haml view.

```jsx
/** @jsx html */
import { html } from 'snabbdom-jsx';
import ReactOnRails from 'snabbdom-on-rails'

const HelloMessage = ({name}) =>
  <div on-click={ _ => alert('Hi ' + name) }>
    {name}
  </div>;

const Container = (props) => ( <HelloMessage {...props} /> )

ReactOnRails.register({ Container })
```
