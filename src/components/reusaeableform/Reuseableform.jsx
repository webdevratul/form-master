const Reuseableform = ({
  handleSubmit,
  submitBtnTxt = "submit",
  formTitle,
}) => {
  const handleLocalsubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={handleLocalsubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="text" name="phone" id="" />
        <br />
        <input type="submit" value={submitBtnTxt} />
      </form>
    </div>
  );
};

export default Reuseableform;
