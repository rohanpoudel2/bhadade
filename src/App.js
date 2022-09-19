import { Container } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import Login from './pages/login/Login';
import { client } from './PocketBase';
import { useEffect, useState } from 'react';
import Overview from './pages/overview/Overview';

function App() {

  const [user, setUser] = useState(false)

  useEffect(() => {
    if (client.authStore.isValid) {
      setUser(true)
    }
    console.log(client.authStore)
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            {user ?
              <>
                <Route index element={<Overview />} />
              </>
              :
              <Route index element={
                <Container>
                  <Login />
                </Container>
              } />
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
