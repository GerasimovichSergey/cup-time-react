import { CartItem } from './CartItem.jsx';
import { useCart } from '../context/CartContext.jsx';
import { SkeletonLoader } from './SkeletonLoader.jsx';


export const Cart = () => {
    const { cart } = useCart();

    const totalPrice = cart ? cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0) : 0;

    return (
        <section className="cart">
            <div className="container cart__container">
                <h2 className="cart__title">Корзина ({cart ? cart.length : 0})</h2>

                <ul className="cart__items">
                    {cart ? cart.map((item) => (<CartItem data={item} key={item.id} />)) : <SkeletonLoader />}
                </ul>

                <div className="cart__summary">
                    <h3 className="cart__summary-title">Итого:</h3>
                    <p className="cart__total">{totalPrice}&nbsp;₽</p>
                    <button className="cart__order-button">Заказать</button>
                </div>
            </div>
        </section>
    )
};