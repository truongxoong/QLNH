import { Button } from "antd";

function BtnAdd(props) {
  return (
    <div>
      <Button type="primary">{props.title}</Button>
    </div>
  );
}

export default BtnAdd;
