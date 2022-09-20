import { Button } from "antd";

function BtnAdd(props) {
  return (
    <div>
      <Button onClick={props.onClick} type="primary">{props.title}</Button>
    </div>
  );
}

export default BtnAdd;
