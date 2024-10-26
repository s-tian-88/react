import { PurchaseType } from "../../types"
import './purchaseItem.css'

interface PurchaseItemProps {
  item: PurchaseType;
  remove: (id: number) => void;
  check: (id: number) => void;
}

const PurchaseItem = ({ item, remove, check }: PurchaseItemProps) => {

  return (
    <li className="purchase-item">
      <span
        style={{ textDecoration: `${item.done ? "line-through" : "none"}` }}
      >
        {item.name}
      </span>
      <div>
        <button onClick={() => check(item.id)}>
          {item.done ? "Uncheck" : "Check"}
        </button>
        <button onClick={() => remove(item.id)}>Remove</button>
      </div>
    </li>
  );
};


export { PurchaseItem }
