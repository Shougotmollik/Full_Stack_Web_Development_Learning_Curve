import "./Item.css";

function Item(props) {
  let Pname = props.name;
  return (
    <>
      <div>
        <p>{Pname}</p>
        {props.children}
      </div>
    </>
  );
}

export default Item;
