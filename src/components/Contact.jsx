import React, { useState } from "react";
import { contacts } from "../constant";
import axios from "axios";
function Contact() {
  const [formState, setFormState] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  //   const config = {
  //     SecureToken:"420db492-d2cb-49d8-9803-8db19bf1df01",
  //     To : 'them@website.com',
  //     From : "you@isp.com",
  //     Subject : "This is the subject",
  //     Body : "And this is the body",
  // }
  // const submitHandler = (event) => {
  //   console.log(formState.email);
  //   event.preventDefault()
  //   const config = {
  //     SecureToken: "420db492-d2cb-49d8-9803-8db19bf1df01",
  //     To: "ishnoorisworking@gmail.com",
  //     From: formState.email,
  //     Subject: "This is the subject",
  //     Body: "And this is the body",
  //   };
  //   if (window.Email) {
  //     window.Email.send(config).then(()=>alert("email sent"));
  //   }
  // };
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   window.Email.send({
  //     // SecureToken:"82f327e2-b337-419a-91f2-8ac4e9f9d0a8",
  //     Host:"smtp.elasticemail.com",
  //     // Username:"ishnoorisworking@gmail.com",
  //     // Password:"7EFD276A9AD8C32735171D75F9E54A62B8EE",
  //     // To : 'ishnoorisworking@gmail.com',
  //     // From : "Ishnoor Singh ishnoorisworking@gmail.com",
  //     To:"blockchainethereum0411@gmail.com",
  //     From:"blockchainethereum0411@gmail.com",
  //     Subject: "This is the email now7 ",
  //     Username:"blockchainethereum0411@gmail.com",
  //     Password:"207B1EF7CD73F48360CDDDB91EF3325CD236",
  //     Body: `${formState.name}, ${formState.email}. ${formState.message}`
  //     }).then(
  //       (message) => alert(message)
  //     );
  // }
  const submitHandler = async (event) => {
    console.log(email, name);
    event.preventDefault();
    const response = await fetch("https://email-backend-r8co.onrender.com/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email,message }),
    });
    const data = await response.json();
    console.log(data.messageId)  };

  return (
    <div className="py-10 w-full">
      <div className="w-full px-10 border-b-[1px] border-zinc-700">
        <h1 className="text-[5vw] tracking-tight">Contact Me</h1>
      </div>
      <div className="flex sm:flex-row flex-col sm:m-24 m-12  ">
        <div className="flex flex-col sm:w-1/3 w-full justify-center items-center">
          <h1 className="sm:text-[3vw] text-[6vw]">Get in Touch</h1>
          <div>
            {contacts.map((contact, index) => {
              return (
                <div key={index} className="sm:text-[1.5vw] my-10">
                  <a href={contact.link} target="_blank">
                    <span className="text-[#CDEA67]">{contact.title}:</span>{" "}
                    {contact.content}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="form sm:w-2/3 w-full flex justify-between items-center">
          <form action="" className="w-full">
            <div className="flex justify-evenly w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name || ""}
                required
                className="sm:mx-10 mr-5 sm:h-[5vw] h-[7vw] w-1/2 p-4 bg-zinc-600 sm:text-[1.5vw] text-[2.5vw] rounded-2xl text-white"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="email"
                value={email || ""}
                placeholder="Email"
                required
                className="sm:h-[5vw] h-[7vw] w-1/2 p-4 bg-zinc-600 sm:text-[1.5vw] text-[2.5vw] rounded-2xl text-white"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              value={message || ""}
              className="my-10 sm:mx-10 h-[15vw] w-full p-4 bg-zinc-600 sm:text-[1.5vw] text-[2.5vw] rounded-2xl text-white"
              onChange={(e) => setMessage(e.target.value)}
            />
            <input
              type="Submit"
              className="border p-4 sm:text-[1.5vw] text-[2.5vw] sm:mx-10 rounded-2xl"
              onClick={submitHandler}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
