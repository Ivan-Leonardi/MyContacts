import { Container, InputSearchContainer } from "./styles";
import logo from "../../assets/images/logo.webp";

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="MyContacts" width={120} />

            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>
        </Container>
    );
}
