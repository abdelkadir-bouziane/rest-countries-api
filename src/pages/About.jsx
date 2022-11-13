import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page-container">
      <p>
        This is a solution to the{" "}
        <a
          href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
          target="_blank"
          rel="noreferrer"
        >
          REST Countries API with color theme switcher challenge
        </a>{" "}
        on{" "}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor website
        </a>
        . Frontend Mentor challenges help frontend developers improve their
        coding skills by building realistic projects.
      </p>

      <p>
        This solution was coded by{" "}
        <a
          href="https://github.com/abdelkadir-bouziane"
          target="_blank"
          rel="noreferrer"
        >
          Abdelkadir BOUZIANE
        </a>{" "}
        using the front-end JavaScript library :{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>
        . You can find the github repository of the solution{" "}
        <a
          href="https://github.com/abdelkadir-bouziane/rest-countries-api"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>

      <p>
        Ps: there is also a <Link to="/blabla">Not Found page</Link> that you
        get when you try to access a wrong url.
      </p>
    </section>
  );
}

export default About;
