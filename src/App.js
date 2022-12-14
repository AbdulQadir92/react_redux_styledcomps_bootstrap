import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup'


import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="*" element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
