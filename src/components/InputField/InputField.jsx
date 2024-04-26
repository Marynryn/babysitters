
import React from "react";
import { Field } from "formik";



const InputField = (props) => {
    return (
        <div className="flex flex-col gap-2">
            {props.label && (
                <label htmlFor={props.id} className="mb-2 text-base color-gray-900">
                    {props.label}
                </label>
            )}
            <Field
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
            />
        </div>
    );
}
export default InputField;