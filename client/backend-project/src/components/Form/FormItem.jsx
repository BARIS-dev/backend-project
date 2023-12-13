import "./FormStyle.scss";

const FormItem = () => {
  function submitHandler(e) {
    e.preventDefault();
    console.log("hello");
  }

  return (
    <form className="form" action="" method="POST">
      <input
        type="text"
        placeholder="Create a username"
        name="username"
        id="username"
      />
      <div className="input-row">
        <input
          type="text"
          placeholder="Your firstname"
          name="firstname"
          id="firstname"
        />
        <input
          type="text"
          placeholder="Your lastname"
          name="lastname"
          id="lastname"
        />
      </div>
      <input
        type="email"
        placeholder="Your email adress"
        name="email"
        id="email"
      />
      <div className="input-row">
        <input
          type="password"
          placeholder="Your password"
          name="password"
          id="password"
        />
        <input
          type="password"
          placeholder="Confirm your password"
          name="password-confirm"
          id="password-confirm"
        />
      </div>
      <small>
        By pressing the button you agree that you have been warned and the
        values you typed in will be shown on this website.
      </small>
      <button onClick={submitHandler}>Beam me up!</button>
    </form>
  );
};

export default FormItem;
