import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  // eslint-disable-next-line no-unused-vars
  const [verify, setVerify] = useState(false);

  function onChange(value) {
    setVerify(true);
  }

  return (
    <div className="container">
      <form>
        <input id="first-name" placeholder="First Name" />
        <input id="last-name" placeholder="Last Name" />
        <input id="short-id" placeholder="Short ID" />
        <input id="phone" placeholder="Phone Number" />
        <input id="mail" placeholder="User ID" />
      </form>
      <select>
        <option value="">Select an option</option>
        <option value="antelias">Antelias</option>
        <option value="badaro">Badaro</option>
        <option value="tripoli">Tripoli</option>
      </select>
      <select>
        <option value="">How will you attend?</option>
        <option value="person">In Person</option>
        <option value="smart">Smart Class</option>
        <option value="online">Online</option>
      </select>
      <ReCAPTCHA
        id="not_robot"
        sitekey="6LdrLAwlAAAAAFQkh-PwwW4ngrInomVhXMIIC6Fw"
        onChange={onChange}
      />
      <button>Submit</button>
    </div>
  );
};

export default Form;
