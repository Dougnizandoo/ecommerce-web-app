import styles from '../styles/Products.module.css';
import React, {useState, useEffect} from 'react';


function Installment(props){

    const fees = props.installment.hasFee ? "com juros" : "sem juros";

    return(
        <p>
            em {props.installment.number}x de R$ {props.installment.total} {fees}
        </p>
    );
}


function ProductListItem(props){
    const defaultProductImage = "https://cwbgo.com.br/wp-content/uploads/2021/02/caneca.jpeg";

    return (

        <div className={styles.rowItem}>
            <img src={defaultProductImage} className={styles.imagem} />
            <div className={styles.itemText}>
                <a href='#' className='stretched-link'>
                <h3 className="mt-0">{props.product.title}</h3>
                </a>
                <h4>R$ {props.product.amount}</h4>
                <Installment installment={props.product.installments} />
            </div>
        </div>
    );
}



export default function ProductsForSaleList(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:6789/Produtos")
            .then((response) => response.json())
            .then(
                (json) => {

                    setIsLoaded(true);
                    setProducts(json);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
        

        }, []
    );

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded){
        return <div>Carregando...</div>;
    }else {
        const P = products.map(
            (x, index) => <ProductListItem product={x} key={index}/>
        );
        return <div className={styles.container}>{P}</div>;
    }

}