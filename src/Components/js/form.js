import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { firestore } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import Select from "react-select";
import "../css/form.css";

const Form = () => {
  const [verify, setVerify] = useState(false);

  const [selectedOption, setSelectedOption] = useState();

  const branch_options = [
    { value: "antelias", label: "Antelias" },
    { value: "badaro", label: "Badaro" },
    { value: "tripoli", label: "Tripoli" },
  ];

  const first_name = useRef(null);
  const last_name = useRef(null);
  const short_id = useRef(null);
  const mail = useRef(null);
  const phone = useRef(null);

  const reference = collection(firestore, "StudentsData");

  const handleSelect = (event) => {
    event.preventDefault();
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      Name: first_name.current.value + " " + last_name.current.value,
      ID: short_id.current.value,
      Email: mail.current.value + "lb@aou.edu.lb",
      Telephone: phone.current.value,
      Branch: selectedOption,
    };
    try {
      addDoc(reference, data);
      e.target.reset();
    } catch (e) {
      console.log(e);
    }
  };

  function onChange(value) {
    setVerify(true);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="fname"
          placeholder="First Name"
          type="text"
          ref={first_name}
          required
        />
        <br />
        <input id="lname" placeholder="Last Name" type="text" ref={last_name} />
        <br />
        <input
          id="id"
          placeholder="Short ID"
          type="int"
          pattern=".{6}"
          ref={short_id}
          required
        />
        <br />
        <label id="example">example: 123456</label>
        <br />
        <input
          id="uni-mail"
          placeholder="User ID"
          type="text"
          pattern="[a-z]{3}[0-9]{3}"
          ref={mail}
          required
        />
        <br />
        <label id="example">example: sam123</label>
        <br />
        <input
          id="phone"
          placeholder="Telephone"
          type="int"
          pattern="[0-9]{2} [0-9]{3} [0-9]{3}||[0-9]{2}-[0-9]{3}-[0-9]{3}||[0-9]{2}[0-9]{3}[0-9]{3}"
          ref={phone}
          required
        />
        <br />
        <br />
        <Select
          id="branch"
          placeholder="Branch..."
          options={branch_options}
          value={selectedOption}
          onChange={handleSelect}
          required
        />
        <br />
        <ReCAPTCHA
          id="not_robot"
          sitekey="6LdrLAwlAAAAAFQkh-PwwW4ngrInomVhXMIIC6Fw"
          onChange={onChange}
        />
        <br />
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
