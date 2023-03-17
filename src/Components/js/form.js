import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { firestore } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import "../css/style.css";

const Form = () => {
  const [verify, setVerify] = useState(false);

  const [selectedOption, setSelectedOption] = useState();

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
      <form onSubmit={handleSubmit}>
        <h1 className="text">Tech Fusion Club</h1>
        <div className="box">
          <div className="form">
            <h2>Fill The Form</h2>
            <div className="inputBox">
              <input type="text" required="required" ref={first_name} />
              <span>First Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" required="required" ref={last_name} />
              <span>Last Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" required="required" ref={short_id} />
              <span>Short ID</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" required="required" ref={mail} />
              <span>User ID</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="tel" required="required" ref={phone} />
              <span>Telephone</span>
              <i></i>
            </div>
            <div className="inputBox">
              <select
                className="select"
                value={selectedOption}
                onChange={handleSelect}
              >
                <option selected disabled>
                  Branch...
                </option>
                <option value="Badaro">Badaro</option>
                <option value="Tripoli">Tripoli</option>
                <option value="Antelias">Antelias</option>
              </select>
              <i></i>
            </div>
            <br />
            <ReCAPTCHA
              id="not_robot"
              sitekey="6LdrLAwlAAAAAFQkh-PwwW4ngrInomVhXMIIC6Fw"
              onChange={onChange}
            />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
