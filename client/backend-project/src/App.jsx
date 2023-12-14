import "./App.css";
import FormItem from "./components/Form/FormItem.jsx";

function App() {
  return (
    <>
      <h2>
        <span>Welcome</span> to my project for the end of the backend module at
        the <span>DCI</span>.
      </h2>
      <h3>What is this site about?</h3>
      <p>
        As you can see, there is only a form with a few input fields and a
        button for submitting the input values.
      </p>
      <p>
        Pressing the button will save the data into my MongoDB database and you
        will be able to see the data sent into the database directly under the
        form.
      </p>
      <div className="warning">
        <small>
          Please do not send any sensitive data! <br />
          This is just a small project of mine for testing purposes.
        </small>
      </div>
      <FormItem />
    </>
  );
}

export default App;
