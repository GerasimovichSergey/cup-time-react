import { Product } from './Product.jsx';


const products = [
    {
        id: 1,
        title: 'Кокосовая матча',
        image: '',
        price: 9990,
    },
    {
        id: 2,
        title: 'Кокосовая матча',
        image: '',
        price: 390,
    },
    {
        id: 3,
        title: 'Кокосовая матча',
        image: '',
        price: 390,
    },
    {
        id: 4,
        title: 'Кокосовая матча',
        image: '',
        price: 90,
    },
    {
        id: 5,
        title: 'Кокосовая матча',
        image: '',
        price: 190,
    },
    {
        id: 6,
        title: 'Кокосовая матча',
        image: '',
        price: 320,
    },
];

export const Products = () => {
    return (
        <section className="products">
            <div className="container">
                <h2 className="products__title">Чай</h2>

                <ul className="products__list">
                    {products.map((item) => <Product data={item} key={item.id} />)}
                </ul>
            </div>
        </section>
    );
};