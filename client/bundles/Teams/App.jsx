/** @jsx html */
import { html } from 'snabbdom-jsx';
//import ReactOnRails from './testsnabbdomonrails/SnabbdomOnRails'
import ReactOnRails from 'snabbdom-on-rails'
import Teams from '../../containers/Teams'

const HelloMessage = ({name}) =>
  <div on-click={ _ => alert('Hi ' + name) }>
    {name}
  </div>;

const Container = (props) => ( <HelloMessage {...props} /> )

ReactOnRails.register({ Container })
