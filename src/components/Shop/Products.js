import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', title: 'Red Scarf', description: 'A pretty red scarf.',price: 19},
  { id: 'p2', title: 'Blue Scarf', description: 'A pretty blue scarf.',price: 22},
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(product => (
            <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id = {product.id}
            
          />))
        }
       
      </ul>
    </section>
  );
};

export default Products;
