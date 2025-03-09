import { createContext, useState } from "react";

export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cardItem, setCardItem] = useState([]);

  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    subject: "",
    comments: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formdata);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formdata);
  };

  function AddToCard(itemId) {
    if (!cardItem?.find((item) => item.id === itemId))
      setCardItem([...cardItem, { id: itemId, count: 1 }]);
    else
      setCardItem(
        cardItem.map((item) => {
          if (item.id === itemId) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
    console.log(cardItem.length);
  }

  function removefromCard(itemId) {
    setCardItem(
      cardItem.map((i) => {
        if (i.id === itemId)
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        else return i;
      })
    );
  }

  const ContextValue = { formdata,cardItem, AddToCard, removefromCard, handleChange, handleSubmit };
  return (
    <shopContext.Provider value={ContextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
