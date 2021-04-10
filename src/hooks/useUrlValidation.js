import {useEffect, useState} from "react";
import validator from "validator/es";

const useUrlValidation = (initialValue) => {
    const [isValid, setIsValid] = useState(false);
    const [fieldValue, setFieldValue] = useState(initialValue);

    const onChange = (event) => {
        const { value } = event.target;
        setIsValid(validator.isURL(value));
    }
}