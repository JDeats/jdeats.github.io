import { Outlet } from 'react-router';
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="appDiv">
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

export default App
