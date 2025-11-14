import { Outlet } from 'react-router';
import './App.css'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <NavBar />
      <Container style={{marginTop: 80, marginBottom: 60}}>
        <Outlet />
      </Container>
    </div>
  )
}

export default App