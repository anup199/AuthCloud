import { useState } from "react";
import axios from "axios";
import "./apply.css";

const ApplyForm = () => {

  const [form, setForm] = useState({
    name: "",
    number: "",
    pannumber: "",
    mobileno: "",
    address: "",
    gender: "",
    dob: "",
    city: "",
    state: "",
    email: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.mobileno) {
      alert("Please fill required fields");
      return;
    }

    console.log("Form Data:", form);

    // API call yaha kar sakte ho
    // axios.post("/api/apply", form)
    try{
        const res = await axios.post("http://localhost:5000/api/applynow", form);

        if(res.data.success){
            alert("Data Saved")
            setForm({
              name: "",
              number: "",
              pannumber: "",
              mobileno: "",
              address: "",
              gender: "",
              dob: "",
              city: "",
              state: "",
              email: "",
              pincode: ""
            });
        }
        
        else{
            alert("Data Not Saved")
        }
    }

    catch(e){
        // Show backend error message if available
        if (e.response && e.response.data && e.response.data.error) {
          alert("Error: " + e.response.data.error);
        } else {
          alert("Something Wrong");
        }
    }

    // alert("Application Submitted Successfully");

    // Reset form
    setForm({
      name: "",
      number: "",
      pannumber: "",
      mobileno: "",
      address: "",
      gender: "",
      dob: "",
      city: "",
      state: "",
      email: "",
      pincode: ""
    });
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h2>Apply Now</h2>

        <form onSubmit={handleSubmit}>
          
          <input type="text" name="name" placeholder="Full Name"
            value={form.name} onChange={handleChange} required />

          <input type="text" name="number" placeholder="ID Number"
            value={form.number} onChange={handleChange} />

          <input type="text" name="pannumber" placeholder="PAN Number"
            value={form.pannumber} onChange={handleChange} />

          <input type="text" name="mobileno" placeholder="Mobile Number"
            value={form.mobileno} onChange={handleChange} required />

          <input type="email" name="email" placeholder="Email"
            value={form.email} onChange={handleChange} required />

          <textarea name="address" placeholder="Address"
            value={form.address} onChange={handleChange} />

          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input type="date" name="dob"
            value={form.dob} onChange={handleChange} />

          <input type="text" name="city" placeholder="City"
            value={form.city} onChange={handleChange} />

          <input type="text" name="state" placeholder="State"
            value={form.state} onChange={handleChange} />

          <input type="text" name="pincode" placeholder="Pincode"
            value={form.pincode} onChange={handleChange} />

          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;