import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import PrivateRoute from './PrivateRoute'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup'

import { Provider } from 'react-redux'
import store from './store/store'

import GlobalStyles from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from './styles/themes/LightTheme'
import { DarkTheme } from './styles/themes/DarkTheme'


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Provider store={store}>
        <GlobalStyles />
        <Router>
          <div>
            <Routes>
              <Route path="*" element={
                <PrivateRoute>
                  <Layout theme={theme} setTheme={setTheme} />
                </PrivateRoute>
              }></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
