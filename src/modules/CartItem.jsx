export const CartItem = (data) => {
    return (
        <li className="cart-item">
            <img className="cart-item__image" src={data.data.image} alt={data.data.title} />

            <div className="cart-item__info">
                <h3 className="cart-item__title">{data.data.title}</h3>
                <div className="cart-item__quantity">
                    <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
                    <input className="cart-item__quantity-input" type="number" defaultValue={1} />
                    <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
                </div>
                <p className="cart-item__price">{data.data.price}&nbsp;₽</p>
            </div>
        </li>
    )
}