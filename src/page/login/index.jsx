import { Button, Form, Input } from "antd";
import FormLogin from "../../component/loginForm";
import { useNavigate } from "react-router-dom";

function LoginFireBase() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] bg-slate-300 pt-9">
      <div className="w-[450px] h-[550px] bg-white border mx-auto  rounded-2xl flex flex-col text-center">
        <FormLogin title="Login" BtnLogin="Login" />
        <div className="mt-5">
          <p>
            Ban chua co tai khoan?
            <Button onClick={() => navigate("/register")} type="link">
              Dang ky tai day
            </Button>
          </p>
        </div>
        <div className="mt-5">
          <Button className="">Sign up with Facebook</Button>
          <Button className="ml-3">Sign up with Phone</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginFireBase;
