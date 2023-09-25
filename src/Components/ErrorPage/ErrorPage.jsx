import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oopps!!!</h2>
            <br />
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;