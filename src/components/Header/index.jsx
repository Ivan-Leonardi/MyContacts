import { Container } from "./styles";
import logo from "../../assets/images/logo.webp";

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="MyContacts" width={120} />
        </Container>
    );
}
