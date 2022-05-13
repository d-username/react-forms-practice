import { useState } from "react";
import "./App.css";

const initialData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contactBy: "",
  consent: "",
};

export default function App() {
  //TODO: Add your state fields here
  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "name") {
      setFormData({ ...formData, name: value });
    }
    if (name === "address") {
      setFormData({ ...formData, address: value });
    }
    if (name === "phone") {
      setFormData({ ...formData, phone: value });
    }
    if (name === "email") {
      setFormData({ ...formData, email: value });
    }
    if (name === "complaint") {
      setFormData({ ...formData, complaint: value });
    }
    if (name === "contact") {
      setFormData({ ...formData, contactBy: value });
    }
    if (name === "consent") {
      setFormData({ ...formData, consent: checked });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={formData.address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="telephone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              type="textarea"
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleChange}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleChange}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleChange}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleChange}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
