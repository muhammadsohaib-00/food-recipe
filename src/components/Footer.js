import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer brown darken-4 ">
      <div className="container">
        <div className="row center-align">
          <div className="col l6 s12">
            <h5 className="white-text">Matty Food Recipes</h5>
            <p className="grey-text text-lighten-4">
              You can find variety of recipes that are delicious, much more than
              tasty, really appetizing, lip-smacking: the king of food to have
              you licking your lips in anticipation
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Navigate</h5>
            <ul>
              <li>
                <Link className="border-btm white-text" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="border-btm white-text" to="/ingredients/1">
                  Ingredients
                </Link>
              </li>
            </ul>
          </div>
         
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2024  Food Recipes
        </div>
      </div>
    </footer>
  );
};

export default Footer;
