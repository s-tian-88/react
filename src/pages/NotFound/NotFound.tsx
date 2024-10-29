import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <>
            <h1>Page Not Found</h1>
            <Link className="notFound__btn" to="/">Home page</Link>
        </>
    )
}

export { NotFound };
