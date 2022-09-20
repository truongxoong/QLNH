import { Form, Input } from "antd"

function InputAntd (props) {
    return <div >
        <Form.Item
            label = {props.label}
            name = {props.name}
            rules={props.rules}      
        >
            <Input  />
        </Form.Item>
    </div>
}
export default InputAntd