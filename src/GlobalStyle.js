import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
  color : ${({ theme }) => theme.text}
}

::placeholder {
  color: ${({ theme }) => theme.textInput};
  opacity: 0.6
}

html {
  font-size: 10px;
}

/*  1. Styling the Navbar */

header {
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 7rem;
  width: 100%;
  padding: 0 7rem;
  background-color: white;
  box-shadow: 0 0 10px ${({ theme }) => theme.shaddow};
  background-color: ${({ theme }) => theme.elementsBackground};
}

header h1 {
  font-size: 2rem;
  font-weight: 900;
}

.menu {
  display: flex;
}

nav {
  margin-right: 2rem;
}

nav ul {
  display: flex;
  list-style: none;
  align-items: center;
}

nav ul li:hover .link {
  opacity: 0.75;
}

.link {
  display: block;
  text-decoration: none;
  padding: 0.8rem 2rem;
}

.nav-link-active {
  background-color: ${({ theme }) => theme.activeNavLink};
  border-radius: 10px;
}

.lightness-mode {
  border: solid 1px ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 10px;
}

.lightness-mode * {
  color: ${({ theme }) => theme.text};
}

.lightness-mode:hover {
  background-color: ${({ theme }) => theme.invElementsBackground};
  border: solid 1px ${({ theme }) => theme.invElementsBackground};
}

.lightness-mode:hover * {
  color: ${({ theme }) => theme.invText};
}

.lightness-mode span {
  margin-left: 1rem;
}

.menu-button {
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  display: none;
}

.menu-button > * {
  font-size: 2.9rem;
}

/*  2. Styling the main section */

main {
  background-color: ${({ theme }) => theme.globalBackground};
  padding: 0 7rem;
  margin-top: 7rem;
  height: calc(100vh - 7rem);
  overflow: auto;
}

/*  2.1. Styling the Home page */

.homepage-container {
  padding: 3rem 0;
}

/*  2.1.1. Styling the header of Home page */

.header-homepage {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
}

/*  2.1.1.1. Styling the SearchBox compenent */

.search-box {
  height: 4rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 0 10px ${({ theme }) => theme.shaddow};
  border-radius: 5px;
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.elementsBackground};
}

.search-box input {
  height: 100%;
  flex: 1;
  padding: 1rem 0;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textInput};
  background-color: transparent;
  border-radius: 5px;
}

.search-box button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.search-icon,
.cancel-icon {
  display: block;
  padding: 1rem;
  height: 4rem;
  width: 4rem;
}

.cancel-icon > *,
.search-icon > * {
  fill: ${({ theme }) => theme.textInput};
}

.cancel-icon {
  position: absolute;
  right: 0;
  top: 0;
}

/*  2.1.1.2. Styling the FilterBox compenent */

.filter-box {
  height: 4rem;
  width: 60%;
  max-width: 200px;
  min-width: 150px;
  box-shadow: 0 0 10px ${({ theme }) => theme.shaddow};
  border-radius: 5px;
  position: relative;
  background-color: ${({ theme }) => theme.elementsBackground};
}

.filter-box input {
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.textInput};
  cursor: pointer;
}

.arrow-icon {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  height: 2rem;
  width: 2rem;
  fill: ${({ theme }) => theme.textInput};
  cursor: pointer;
  transition: transform 300ms;
}

.list-options {
  list-style: none;
  position: absolute;
  z-index: 10;
  top: 4.5rem;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.elementsBackground};
  box-shadow: 0 0 10px ${({ theme }) => theme.shaddow};
}

.list-options li {
  color: ${({ theme }) => theme.textInput};
  font-size: 1.4rem;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  cursor: pointer;
}

.list-options li:first-child {
  padding-top: 1.4rem;
}

.list-options li:last-child {
  padding-bottom: 1.4rem;
}

.list-options li:hover {
  background-color: ${({ theme }) => theme.activeNavLink};
}

/*  2.1.2. Styling the countries cards area */

.countries-container {
  display: grid;
  gap: 4rem;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 26rem);
}

.home-spinner {
  text-align: center;
  margin-top: calc(50vh - 14rem);
}

/*  2.1.2.1 Styling the CountryCard compenent */

.country-card {
  font-size: 1.6rem;
  width: 26rem;
  border-radius: 5px;
  box-shadow: 0 0 10px ${({ theme }) => theme.shaddow};
  transition: transform 300ms, box-shadow 300ms;
  background-color: ${({ theme }) => theme.elementsBackground};
  position: relative;
}

.country-card:hover {
  transform: scale(1.02) perspective(1000px) rotateX(-3deg) rotateY(-6deg);
  box-shadow: 6px -3px 20px ${({ theme }) => theme.shaddow};
}

.before-country-card {
  text-decoration: none;
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.cardGradientGray} 10%,
    transparent 50%
  );
  opacity: 0;
  transition: all 300ms;
}

.before-country-card:hover {
  opacity: 1;
}

.country-card .img {
  height: 16rem;
  border-radius: 5px 5px 0 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.card-info {
  padding: 2rem;
  box-shadow: inset 0 50px 5px -50px ${({ theme }) => theme.shaddow};
}

.card-info h3 {
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.card-info h3 span {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  opacity: 0.5;
}

.card-info ul li {
  font-size: 1.4rem;
  list-style: none;
  font-weight: 400;
}

.card-info ul li strong {
  font-weight: 700;
}

/*  2.2. Styling the Country page */

.countrypage-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.country-spinner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Styling BackBtn component */

.back-button {
  width: fit-content;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0.7rem 3.5rem;
  margin: 3rem 0;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.elementsBackground};
  color: ${({ theme }) => theme.textInput};
  box-shadow: 0 0 10px ${({ theme }) => theme.shaddow};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-button-icon {
  display: inline-block;
  height: 2rem;
  width: 2rem;
  fill: ${({ theme }) => theme.textInput};
  margin-right: 1rem;
}

/* Styling the country infos area */

.country-infos {
  flex: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}

.country-infos .img {
  width: 100%;
  height: 100%;
  min-height: 30rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: drop-shadow(0 0 10px ${({ theme }) => theme.shaddow});
}

.texts {
  font-size: 1.6rem;
}

.info-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.texts h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
}

.info-items ul {
  list-style: none;
}

.info-items ul li {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
}

.info-items ul li strong {
  font-weight: 700;
}

.texts p {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 4rem;
}

.texts p strong {
  font-weight: 700;
  margin-right: 0.5rem;
}

.country-border-link {
  color: ${({ theme }) => theme.textInput};
  background-color: ${({ theme }) => theme.elementsBackground};
  font-size: 1.4rem;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  margin: 4px 4px;
  padding: 0.4rem 2.5rem;
  border-radius: 5px;
  box-shadow: 0 0 3px ${({ theme }) => theme.shaddow};
}

.country-border-link:hover {
  background-color: ${({ theme }) => theme.activeNavLink}
}

/*-------------------------------------------------------------------------*/
/*--------------------------< Responsive design >--------------------------*/
/*-------------------------------------------------------------------------*/

@media screen and (max-width: 1017px) {
  /* Styling the countries cards area */
  .countries-container {
    justify-content: center;
  }

  /* Styling the Country page */

  .country-infos {
    display: block;
  }

  .country-infos .img {
    min-height: 30rem;
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: 760px) {
  /*  1. Styling the Navbar */

  header {
    padding: 0 2rem;
  }

  .menu-button {
    display: flex;
  }

  .menu {
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    height: calc(100% - 7rem);
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.elementsBackground};
    box-shadow: inset 0 100px 10px -100px ${({ theme }) => theme.shaddow};
    transition: transform 700ms;
  }

  .show-menu {
    transform: translateX(0);
  }

  .hide-menu {
    transform: translateX(100%);
  }

  nav {
    margin-right: 0;
    position: relative;
  }

  nav ul {
    flex-direction: column;
  }

  nav ul > * + * {
    margin-top: 4rem;
  }

  .lightness-mode {
    justify-content: center;
    padding: 0.8rem;
    margin-top: 4rem;
    margin-left: 0;
  }

  /*  2. Styling the main section */

  main {
    padding: 0 2rem;
  }
}

@media screen and (max-width: 550px) {
  .info-items {
    display: block;
  }

  .info-items ul:first-child {
    margin-bottom: 3.5rem;
  }

  .texts p strong {
    display: block;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 400px) {
  html {
    font-size: 9px;
  }

  .countries-container {
    gap: 3rem;
  }

  .country-infos .img {
    min-height: 60vw;
  }
}

@media screen and (max-width: 280px) {
  html {
    font-size: 8px;
  }

  main {
    margin-bottom: 0;
  }

  .countries-container {
    display: block;
  }

  .country-card {
    width: auto;
    margin-bottom: 3rem;
  }
}

`;

export default GlobalStyles;
