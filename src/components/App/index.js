import { Container } from "./styles";
import GlobalStyles from '../../styles/global';
import Home from "../../pages/Home";

function App() {
    return (
      <Container>
          <h1>Card Pagination</h1>
        <Home />
        <GlobalStyles/>
      </Container>
    );
  }
  
  export default App;