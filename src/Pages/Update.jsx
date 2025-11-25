import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addproduct } from "../redux/action/productActions";

export default function Form() {
  document.title = "Form";

  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { index } = useParams(); // Get product index from URL

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    width: "",
    height: "",
    clickedBy: "",
    price: "",
  });
  const [image, setImage] = useState("");

  // If editing, populate form
  useEffect(() => {
    if (index !== undefined && products[index]) {
      const prod = products[index];
      setFormData({
        name: prod.name,
        description: prod.description,
        width: prod.width,
        height: prod.height,
        clickedBy: prod.clickedBy,
        price: prod.price,
      });
      setImage(prod.image);
    }
  }, [index, products]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (index !== undefined) {
      // UPDATE existing product
      dispatch({
        type: "UPDATEPRODUCT",
        payload: { index: parseInt(index), updated: { ...formData, image } },
      });
    } else {
      // ADD new product
      dispatch(addproduct({ ...formData, image }));
    }

    navigate("/"); // Go back to gallery
  };

  return (
    <div className="p-5 vw-100">
      <div className="form-wrapper d-flex justify-content-center">
        <div className="form-card p-5 shadow-lg rounded-4 bg-white w-75">
          <h2 className="text-center mb-4 fw-bold">
            {index !== undefined ? "✏️ Update Image" : "📷 Add New Image"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Description</label>
              <textarea className="form-control" name="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
            </div>

            <div className="row">
              <div className="mb-3 col-md-6">
                <label className="form-label fw-semibold">Width</label>
                <input type="text" className="form-control" name="width" value={formData.width} onChange={handleChange} />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label fw-semibold">Height</label>
                <input type="text" className="form-control" name="height" value={formData.height} onChange={handleChange} />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Clicked By</label>
              <input type="text" className="form-control" name="clickedBy" value={formData.clickedBy} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Price</label>
              <input type="text" className="form-control" name="price" value={formData.price} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Image</label>
              <input type="file" className="form-control" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-submit px-5 py-2 rounded-pill">
                {index !== undefined ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
