import { Product } from './Product.jsx';
import { useProducts } from '../context/ProductContext.jsx';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SkeletonLoader } from './SkeletonLoader.jsx';


export const Products = () => {
    const [searchParams] = useSearchParams();
    const { products, setCategory } = useProducts();
    const category = searchParams.get('category');
    console.log(products);

    useEffect(() => {
        setCategory(category);
    }, [category, setCategory]);

    return (
        <section className="products">
            <div className="container">
                <h2 className="products__title">{category}</h2>

                <ul className="products__list">
                    {products.length ? products.map((item) => (
                        <Product data={item} key={item.id} />
                    )) : <SkeletonLoader />}
                </ul>
            </div>
        </section>
    );
};