import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/seta-para-cima.png"

import { Container } from "./styles"

// eslint-disable-next-line react/prop-types
export default function PageHeader({ title }) {
    return (
        <Container>
            <Link to="/">
                <img src={arrow} alt="Back" width={24} />
                <span>Voltar</span>
            </Link>
            <h1>{title}</h1>
        </Container>
    )
}