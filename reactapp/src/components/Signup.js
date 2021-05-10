export function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // validate input data.get("email");
    // validate passwords match
    const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

    fetch(process.env.REACT_APP_API_URL+'/api/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((res) => res.json())
      .then((err) => console.error(err));
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputName">Name</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputPassword2">Retype Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            name="password2"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create Account
      </button>
    </form>
  );
}
