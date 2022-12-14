import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-page-container">
      <h1>404</h1>
      <p>Sorry, there's nothing here :(</p>
      <Link to="/" className="link">
        Back
        <br />
        Home
      </Link>
    </section>
  );
}

export default NotFound;
