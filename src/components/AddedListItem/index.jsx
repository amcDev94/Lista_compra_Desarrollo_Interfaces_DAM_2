import { MdDeleteOutline } from "react-icons/md";

const AddedListItem = ({ item, onRemove }) => {
  const removeItem = () => {
    onRemove(item);
  };

  return (
    <>
      <span>{item.name}</span>
      <MdDeleteOutline onClick={removeItem} />
    </>
  );
};

export default AddedListItem;
