import { Jumbotron } from "react-bootstrap";
import NavigationBar from "../../../components/NavigationBar";

export default function RDW() {
    return (
        <div>
            <NavigationBar />

            <Jumbotron>
                <h1>Rijksdienst voor het wegverkeer</h1>
            </Jumbotron>
        </div>
    );
}
