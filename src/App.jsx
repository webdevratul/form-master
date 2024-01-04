import "./App.css";
/* import Reuseableform from "./components/reusaeableform/Reuseableform"; */
import Grandpa from "./components/grandpa/Grandpa";

function App() {
  /* const handleSignUpSubmit = (data) => {
    console.log("sign up data", data);
  };
  const handleUpdateProfileSubmit = (data) => {
    console.log("update profile data", data);
  }; */

  return (
    <>
      <h1>Form Master</h1>
      {/* <Reuseableform formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <p>Please sign up right now</p>
        </div>
      </Reuseableform>
      <Reuseableform
        formTitle={"Profile Update"}
        submitBtnTxt={"Update"}
        handleSubmit={handleUpdateProfileSubmit}
      >
        <div>
          <p>Alwayes keep your profile updated</p>
        </div>
      </Reuseableform> */}
      <Grandpa></Grandpa>
    </>
  );
}

export default App;
