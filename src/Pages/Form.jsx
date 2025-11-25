 
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addproduct } from '../redux/action/productActions';
export default function Form() {
    document.title = "Form";
    let dispatch = useDispatch()
    let [loading, setLoading] = useState(false)
    let [inputdata, setinputdata] = useState({
        name: "", price: "",description: "", width: "",  clickedBy: ""
    })
    let [image, setImage] = useState("")
 
    let submithandler = async (e) => {
        e.preventDefault();
        dispatch(addproduct({ ...inputdata, image }))
    }
 
    let inputhandler = (e) => {
        e.preventDefault();
        setinputdata({ ...inputdata, [e.target.name]: e.target.value });
    }
 
    return (
       <div className=" p-5 vw-100">
  <div className="form-wrapper d-flex justify-content-center">
    <div className="form-card p-5 shadow-lg rounded-4 bg-white w-75">
      
      <h2 className="text-center mb-4 fw-bold form-title">
        📷 Add New Image
      </h2>

      <form onSubmit={submithandler}>
        
        <div className="mb-3">
          <label className="form-label fw-semibold">Name of Image</label>
          <input type="text" className="form-control input-style" name="name" onChange={inputhandler} />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Description</label>
          <textarea className="form-control input-style" rows="3" name="description" onChange={inputhandler}></textarea>
        </div>

        <div className="row">
          <div className="mb-3 ">
            <label className="form-label fw-semibold">Width</label>
            <input type="text" className="form-control input-style" name="width" onChange={inputhandler} />
          </div>
         
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Clicked By</label>
          <input type="text" className="form-control input-style" name="clickedBy" onChange={inputhandler} />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Price</label>
          <input type="text" className="form-control input-style" name="price" onChange={inputhandler} />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Upload Image</label>
          <input type="file" className="form-control input-style"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-submit px-5 py-2 rounded-pill">
            Submit
          </button>
        </div>

      </form>
    </div>
  </div>
</div>

    )
}
 
 