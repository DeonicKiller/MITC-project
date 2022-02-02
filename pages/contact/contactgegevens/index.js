import { Jumbotron } from "react-bootstrap";
import NavigationBar from "../../../components/NavigationBar";

export default function Example() {
    return (
        <div>
            <NavigationBar></NavigationBar>

            <Jumbotron>
                <h1>Contact gegevens</h1>
            </Jumbotron>
        </div>
    );
}
