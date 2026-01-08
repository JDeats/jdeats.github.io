import { Outlet } from 'react-router';
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <NavBar />
      <Container style={{marginTop: 70, marginBottom: 60}}>
        <Outlet />
      </Container>
    </div>
  )
}

export default App