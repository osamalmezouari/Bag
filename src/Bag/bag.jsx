import "./bag.css";
import data from "./data.js";
import { useEffect, useReducer } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

const Bag = () => {
  const reducer = (items, actions) => {
    switch (actions.type) {
      case "remove":
        return items.filter((item) => item.id !== actions.ID);
      case "clear":
        return [];
      case "increase": {
        return items.map((item) => {
          if (item.id === actions.ID) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        });
      }
      case "decrease": {
        return items
          .map((item) => {
            if (item.id === actions.ID) {
              if (item.amount > 1) {
                return { ...item, amount: item.amount - 1 };
              }
              return false;
            }
            return item;
          })
          .filter(Boolean);
      }
      default:
        return items;
    }
  };
  const [items, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("localItems")) || data,
  );
  useEffect(() => {
    localStorage.setItem("localItems", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <section>
        <nav>
          <h1>useReducer</h1>
          <div>
            <FaCartShopping className={"shopping-icon"} />
            <p className={"total-items"}>
              {items.reduce((acc, cur) => acc + cur.amount, 0)}
            </p>
          </div>
        </nav>
        <h1 className={"title"}>Your Bag</h1>
        <article>
          {items.length ? (
            items.map((item) => {
              const { id, title, price, img, amount } = item;
              return (
                <div className={"item"} key={id}>
                  <div
                    className={"image"}
                    style={{
                      backgroundImage: `url(${img})`,
                      width: "100px",
                      height: "100px",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className={"info"}>
                    <h2 className={"item-name"}>{title}</h2>
                    <p className={"item-price"}>{price}$</p>
                    <button
                      className={"remove"}
                      onClick={() => dispatch({ type: "remove", ID: id })}
                    >
                      remove
                    </button>
                  </div>
                  <div className={"manage-item"}>
                    <FaChevronUp
                      className={"icon"}
                      onClick={() => dispatch({ type: "increase", ID: id })}
                    />
                    <p className={"item-amount"}>{amount}</p>
                    <FaChevronDown
                      className={"icon"}
                      onClick={() => dispatch({ type: "decrease", ID: id })}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Your Bag is Empty</h1>
          )}
        </article>
        <div className={"total"}>
          <p>Total</p>
          <div className={"TTP"}>
            {items
              .reduce((acc, cur) => acc + cur.amount * cur.price, 0)
              .toFixed(2)}{" "}
            $
          </div>
        </div>
        <button className={"clear"} onClick={() => dispatch({ type: "clear" })}>
          Clear All
        </button>
      </section>
    </>
  );
};
export default Bag;
