import { Button, Form, Input } from "antd";

function FormLogin(props) {
  const { title, BtnLogin } = props;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="w-full pt-10 text-[40px] font-semibold font-serif">
        {title}
      </div>
      <div className="pt-10 m-5">
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Truong bat buoc",
              },
              {
                min: 6,
                message: "UseNames phai lon hon 6 ky tu",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "khong duoc bo trong" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full mt-5">
              {BtnLogin}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default FormLogin;
