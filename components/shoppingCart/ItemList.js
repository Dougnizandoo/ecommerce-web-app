import Item from "./Item";


function ItemList(props) {
    let rows = [];

    props.products.forEach((product, index) => {
        rows.push(<Item key={index} product={product} />);
    });

    return <div>{rows}</div>;
}

export default ItemList;