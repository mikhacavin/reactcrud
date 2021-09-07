import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await fetch(
      `https://api.jsonbin.io/b/61306cac3dc0634121a822c8/${id}`
    );
    const data = await response.json();
    setTitle(data.title);
    setPrice(data.price);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch(`http://localhost:8000/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
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
            <button className="button is-primary">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
