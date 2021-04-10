import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";

const Contact = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    if (data.username && data.email && data.phone) {
      e.preventDefault();
      alert(
        `Dear ${data.username}. Your email address "${data.email}" and number "${data.phone}" has been send to the owner. Get ready to pay for it😈`
      );
    } 
    else {
      alert(`Please fill all the details or else get out from here!😡`);
    }
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="/reactwebsite" method="get" onSubmit={submitForm}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  UserName
                  <Tooltip title="mandatory">
                    <span style={{ color: "red", cursor: "pointer" }}> *</span>
                  </Tooltip>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="username"
                  value={data.username}
                  onChange={inputEvent}
                  placeholder="Enter Valid UserName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                  <Tooltip title="mandatory">
                    <span style={{ color: "red", cursor: "pointer" }}> *</span>
                  </Tooltip>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                  <Tooltip title="mandatory">
                    <span style={{ color: "red", cursor: "pointer" }}> *</span>
                  </Tooltip>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Your Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Send Me Anything!
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn_submit" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
