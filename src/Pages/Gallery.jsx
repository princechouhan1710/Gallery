import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Gallery() {
  document.title = "MY Gallery";

  const { products: data } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    width: "",
    height: "",
    clickedBy: "",
    price: "",
    image: "",
  });

  const handleEditClick = () => {
    setFormData({ ...selected });
    setEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleUpdate = () => {
    dispatch({ type: "UPDATEPRODUCT", payload: { index: selected.index, updated: formData } });
    setEditing(false);
    setSelected({ ...formData, index: selected.index });
  };

  return (
    <div className="w-100 p-5 overflow-auto min-vh-100 vw-100 bg-success">
      <h2 className="text-center text-white fw-bold mb-4">📸 My Gallery</h2>

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {data?.length > 0 &&
          data.map((v, i) => (
            <img
              key={i}
              src={v.image}
              className="img-thumbnail w-25"
              alt={v.name}
              data-bs-toggle="modal"
              data-bs-target="#viewModal"
              onClick={() => {
                setSelected({ ...v, index: i });
                setEditing(false);
              }}
            />
          ))}
      </div>

      <div className="modal fade" id="viewModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content m-auto w-50">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">{editing ? "Update Product" : "Image Details"}</h5>
              <button type="button" className="btn-close bg-white" data-bs-dismiss="modal"></button>
            </div>

            {selected && !editing && (
              <div className="modal-body">
              <div className="text-center"><img
                  src={selected.image}
                  alt={selected.name}
                  className="rounded shadow-lg self-center text-center"
                  style={{ width: "250px", height: "250px", objectFit: "cover" }}
                /></div>
                <h4 className="fw-bold">{selected.name}</h4>
                <p>Description: {selected.description}</p>
                <p>Size: {selected.width} </p>
                <p>Clicked By: {selected.clickedBy}</p>
                <p>Price: ₹{selected.price}</p>
              </div>
            )}

            {selected && editing && (
              <div className="modal-body">
                <div className="mb-3 text-center">
                  <img
                    src={formData.image}
                    alt={formData.name}
                    className="rounded shadow-lg mb-3"
                    style={{ width: "250px", height: "250px", objectFit: "cover" }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="row">
                  <div className=" mb-3">
                    <label className="form-label">Width</label>
                    <input
                      className="form-control"
                      name="width"
                      value={formData.width}
                      onChange={handleChange}
                    />
                  </div>
                 
                </div>
                <div className="mb-3">
                  <label className="form-label">Clicked By</label>
                  <input
                    className="form-control"
                    name="clickedBy"
                    value={formData.clickedBy}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    className="form-control"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                
              </div>
            )}

            <div className="modal-footer">
              {selected && !editing && (
                <>
                  <button className="btn btn-primary" onClick={handleEditClick}>
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: "DELETEPRODUCT", payload: { id: selected.index } })}
                    data-bs-dismiss="modal"
                  >
                    Delete
                  </button>
                </>
              )}

              {selected && editing && (
                <button className="btn btn-success" onClick={handleUpdate}>
                  Save Changes
                </button>
              )}

              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
