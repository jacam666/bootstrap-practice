import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-light">
            <Container>
                <Navbar.Brand as={Link} to='/' className='text-dark'>UKSNC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className="text-dark mr-5">Home</Nav.Link>
                        <Nav.Link as={Link} to='/ProteinPage' className="text-dark mr-5">Proteins</Nav.Link>
                        <Nav.Link as={ Link } to='/PreWorkoutPage' className="text-dark mr-5">Pre-Workouts</Nav.Link>
                        <Nav.Link as={ Link } to='/FatLossPage' className="text-dark mr-5">Fat Loss</Nav.Link>
                        <Nav.Link as={ Link } to='/GeneralWellBeingPage' className="text-dark mr-5">General Wellbeing</Nav.Link>
                        <Nav.Link as={ Link } to='/TrainingDietPlanPage' className="text-dark mr-5">Training and Diet Plans</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;