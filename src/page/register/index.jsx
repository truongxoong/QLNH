import FormLogin from "../../component/loginForm";

function Register() {
  return (
    <div className="w-full h-[100vh] bg-slate-300 pt-9">
      <div className="w-[450px] h-[550px] bg-white border mx-auto  rounded-2xl flex flex-col text-center">
        <FormLogin title="Register" BtnLogin="Register" />
      </div>
    </div>
  );
}

export default Register;
