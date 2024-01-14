import "./ItemDate.css";

function ItemDate(props) {
  const pPrice = props.price;
  return (
    <>
      <div>
        <p>{pPrice}</p>
      </div>
    </>
  );
}

export default ItemDate;
