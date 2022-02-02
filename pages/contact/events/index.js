import { Jumbotron } from "react-bootstrap";
import NavigationBar from "../../../components/NavigationBar";

export default function Example() {
    return (
        <div>
            <NavigationBar></NavigationBar>

            <Jumbotron>
                <h1>Events</h1>
            </Jumbotron>
        </div>
    );
}
