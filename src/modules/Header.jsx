import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useProducts } from '../context/ProductContext.jsx';


export const Header = () => {
    const location = useLocation();
    const { cart } = useCart();
    const { categories } = useProducts();

    const getActiveClass = (category) => {
        const currentCategory = new URLSearchParams(location.search).get('category');

        return currentCategory === category ? 'active' : '';
    };

    return (
        <header className="header">
            <div className="container header__container">
                <Link className="header__logo-link" to="/">
                    <img className="header__logo" src="images/logo.svg" alt="Логотип Cup Time" />
                </Link>

                <nav className="header__nav">
                    <ul className="header__menu">
                        {Object.entries(categories).map(([key, value]) => {
                            return (
                                <li className="header__menu-item" key={key}>
                                    <Link className={`header__menu-link ${getActiveClass(key)}`}
                                          to={`/products?category=${key}`}>
                                        {value}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <Link className="header__cart-link" to="/cart">{cart ? cart.length : 0}</Link>
            </div>
        </header>
    )
};