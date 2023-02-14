import {Navbar, Container, Nav} from "react-bootstrap"

const Navigationbar = () => {
    return(
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">AlnaStore</Navbar.Brand>
                <Nav>
                <Nav.Link href="#Man">Menswear</Nav.Link>
                <Nav.Link href="#Women">Womens Clothes</Nav.Link>
                <Nav.Link href="#Kids">Kids</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
export default Navigationbar