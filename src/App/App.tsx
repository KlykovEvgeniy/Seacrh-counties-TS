import { Router } from './Routes/route';
import { Container, Header } from '../widgets';


export default function App() {
    return (
        <>
            <Container>
                <Header />
                <Router />
            </Container>
        </>
    )
}