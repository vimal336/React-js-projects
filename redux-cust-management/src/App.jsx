import './App.css'
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {

  return (
    <Provider store={store} >
    <>
      <h1>Redux Customer Management</h1>
      <CustomerAdd />
      <CustomerView/>
    </>
    </Provider>
  )
}

export default App
