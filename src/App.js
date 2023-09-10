/*In the App.js import the Nav component and the LoginForm component into a div that will display the two components accordingly */

import './App.css';
import Nav from './components/Nav'
import LoginForm from './components/LoginForm';



function App() {
  return <div className='app'>
<Nav></Nav>
<LoginForm />
  </div>
}

export default App;
