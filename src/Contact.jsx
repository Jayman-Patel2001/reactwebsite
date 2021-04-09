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
        `Your data has been send to the owner and get ready to pay for it 😈`
      );
    } else {
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
            <form onSubmit={submitForm}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  UserName
                  <Tooltip title="mandatory">
                    <span style={{ color: "red", cursor: "pointer" }}> *</span>
                  </Tooltip>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="username"
                  value={data.username}
                  onChange={inputEvent}
                  placeholder="Enter Valid UserName"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                  <Tooltip title="mandatory">
                    <span style={{ color: "red", cursor: "pointer" }}> *</span>
                  </Tooltip>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                  <Tooltip title="mandatory">
                    <span style={{ color: "red", cursor: "pointer" }}> *</span>
                  </Tooltip>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Your Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Send Me Anything!
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn_submit" type="submit">
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
