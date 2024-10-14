import {
    Container,
    Header,
    ListContainer,
    Card,
    InputSearchContainer,
} from "./styles";

import arrow from "../../assets/images/icons/seta-para-cima.png";
import edit from "../../assets/images/icons/editar.png";
import trash from "../../assets/images/icons/lixeira.png";

export default function Home() {
    return (
        <Container>
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>
            <Header>
                <strong>3 contatos</strong>
                <a href="/">Novo contato</a>
            </Header>

            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} width={18} alt="Arrow" />
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Ivan Leonardi</strong>
                            <small>instagram</small>
                        </div>
                        <span>ivan@gmail.com</span>
                        <span>(11) 99999-9999</span>
                    </div>
                    <div className="actions">
                        <a href="/">
                            <img src={edit} width={24} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} width={24} alt="Delete" />
                        </button>
                    </div>
                </Card>
                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Ivan Leonardi</strong>
                            <small>instagram</small>
                        </div>
                        <span>ivan@gmail.com</span>
                        <span>(11) 99999-9999</span>
                    </div>
                    <div className="actions">
                        <a href="/">
                            <img src={edit} width={24} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} width={24} alt="Delete" />
                        </button>
                    </div>
                </Card>
                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Ivan Leonardi</strong>
                            <small>instagram</small>
                        </div>
                        <span>ivan@gmail.com</span>
                        <span>(11) 99999-9999</span>
                    </div>
                    <div className="actions">
                        <a href="/">
                            <img src={edit} width={24} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} width={24} alt="Delete" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
