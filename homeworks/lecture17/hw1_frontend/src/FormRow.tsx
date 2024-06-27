import { useDispatch } from "react-redux";
import "./FormRow.css"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type FormRowPropType = {
    labelname: string,
    input_placeholder: string
    input_type: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch_action: ActionCreatorWithPayload<string, any>
    input_value: string
}

export default function FormRow(props: FormRowPropType) {
    const dispatch = useDispatch();
    const handleChange = (value: string) => {
        dispatch(props.dispatch_action(value));
    }

    return <div className="formrow">
        <div>{props.labelname}</div>
        <input type={ props.input_type } placeholder={ props.input_placeholder } 
        value={ props.input_value } onChange={(e) => handleChange(e.target.value)}/>
    </div>
}