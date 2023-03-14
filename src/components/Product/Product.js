import './Product.scss';
import { products } from '../../Products';
import { useParams } from "react-router-dom";

const Product = ({setFavorito}) => {
    const {id} = useParams();

    const productInfo = products.find(product => product.id === parseInt(id));

    return (
        <>
            {
                <div key={productInfo.id}>
                    <h1>{productInfo.name} details</h1>
                    <img src={productInfo.image} alt={productInfo.name}/>
                    <p>{productInfo.name}</p>
                    <p>{productInfo.price}</p>
                    <p>{productInfo.description}</p>
                    <button onClick={(() => setFavorito(productInfo.name))}>Marcar como favorito</button>
                </div>
            }
        </>
    );
}

export default Product;