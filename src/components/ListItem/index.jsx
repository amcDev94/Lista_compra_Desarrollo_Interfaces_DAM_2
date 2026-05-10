import { MdShoppingCart } from "react-icons/md";

const ListItem = ({ item, onBuyButtonClick }) => {
  const buyItem = () => {
    onBuyButtonClick(item);
  };

  return (
    <>
      <span>{item.name}</span>
      <MdShoppingCart onClick={buyItem} />
    </>
  );
};

export default ListItem;
