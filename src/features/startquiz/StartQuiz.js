import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StartQuiz = (props) => {
    const navigate = useNavigate();

    return (<Container style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
        <div>Start the Quiz</div>
        <Button style={{ marginTop: "20px" }} onClick={() => navigate("/questions")}>Start</Button>
    </Container>)
}

export default StartQuiz;