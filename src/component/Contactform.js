import React, { useState } from "react";

const Contactform = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const getUserdata = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    let { name, email, phone, address, message } = user;
   if(name && email && phone && address && message)
   {
    const res = await fetch(
        "https://contactform-cc470-default-rtdb.firebaseio.com/contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message
          }),
        }
      );
      if(res){
          setuser({
              name: "",
              email: "",
              phone: "",
              address: "",
              message: "" 
          })
          alert("Your message submitted successfully");
      }
   }
   else{
    alert("Please fill all the fields");
   }
  };
  return (
    <>
    <center><h1>Contact us:</h1></center>
      < div className="container">
          <form method="POST">
            <label for="name"><b>Name:</b></label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserdata}
                autocomplete="off"
                required
              />
            
            <label for="email"><b>Email:</b></label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={getUserdata}
                autocomplete="off"
                required
              />


              <label for="phone"><b>Mobile number:</b></label>
              <input
                className="form-control"
                type="number"
                name="phone"
                placeholder="Enter your mobile number"
                value={user.phone}
                onChange={getUserdata}
                autocomplete="off"
                required
              />

              <label for="address"><b>Address:</b></label>
              <input
                className="form-control"
                type="text"
                name="address"
                placeholder="Enter your address"
                value={user.address}
                onChange={getUserdata}
                autocomplete="off"
                required
              />

              <label for="message"><b>Message:</b></label>
              <textarea
                className="form-control"
                name="message"
                placeholder="Enter your message"
                value={user.message}
                onChange={getUserdata}
                autocomplete="off"
                required
              /><br/>
               <center><button className="btn btn-primary" onClick={postData}>
                  Submit
              </button></center><br/>
          </form>
      </div>
    </>
  );
};
export default Contactform;
