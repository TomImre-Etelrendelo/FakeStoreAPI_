import { Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/admin">Admin</Nav.Link>
      </Nav.Item>
    </Nav>

      <Outlet />
    </>
  )
};

export default Layout;