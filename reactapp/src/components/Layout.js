import Container from "react-bootstrap/Container";
import {Header} from "./Header";
import {Footer} from "./Footer";

export function Layout (props) {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};
