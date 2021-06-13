import {useState} from "react";
import validator from "validator/es";

const useUrlValidation = (initialValue) => {
    const [isValid, setIsValid] = useState(validator.isURL(initialValue));
    const [urlValue, setUrlValue] = useState(initialValue);

    const onChange = (event) => {
        const { value } = event.target;
        setUrlValue(value);
        setIsValid(validator.isURL(value));
    }

    return {urlValue, isValid, onChange}
}

export default useUrlValidation;