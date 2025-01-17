import { ThemeProvider } from "styled-components";
import Globalstyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { BrowserRouter } from "react-router-dom";

import Header from "../Header";
import Routes from "../../Routes";
// import ContactsList from "../ContactsList"

import { Container } from "./styles";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <Globalstyles />
                <Container>
                    <Header />
                    <Routes />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
