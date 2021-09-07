import { useState } from "react";
import { useHistory } from "react-router";
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch("https://api.jsonbin.io/b/61306cac3dc0634121a822c8", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label htmlFor="" className="label">
            Title
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Price
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
