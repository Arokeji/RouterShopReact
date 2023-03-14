import './Showroom.scss';
import { products } from '../../Products';
import { NavLink } from "react-router-dom";

const Showroom = () => {
    return (
        <>
            {
                products.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.image} alt={item.name}/>
                            <p>{item.name}</p>
                            <NavLink to={`/product-detail/${item.id}`}>Detalles</NavLink>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Showroom;