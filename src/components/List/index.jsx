import AddedListItem from "../AddedListItem";
import ListItem from "../ListItem";

const List = ({ title, items, onBuyButtonClick, onRemove }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{title}</label>
      <ul className="border p-2 min-w-50 grow gap-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between gap-2 border bg-cyan-100 p-2 mb-1.5 rounded-sm"
          >
            {onBuyButtonClick && (
              <ListItem item={item} onBuyButtonClick={onBuyButtonClick} />
            )}
            {onRemove && <AddedListItem item={item} onRemove={onRemove} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
