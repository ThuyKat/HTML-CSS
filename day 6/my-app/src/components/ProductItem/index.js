import StarIcon from "../StarIcon";
import productItemStyle from "./Product.module.css"
export default function ProductItem(props){
    const star=[];
    for(let i=0;i<props.rating;i++){
        star.push(<StarIcon/>)
    }
    return(
        <div className={productItemStyle['product-item']}>
             <img style={{borderRadius: '10px',width: '200px', height: 'auto'}} src={props.img} alt="icecream"/>
            <h3>
                {props.title}
            </h3>
           
            <p> price: ${props.price} </p>
            <p style={{}}>rating: {props.rating}</p>
            <button style={{borderRadius:"10px"}}>Buy</button>
        </div>
    )
}