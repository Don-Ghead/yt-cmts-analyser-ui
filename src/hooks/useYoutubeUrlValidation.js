import {useState, useEffect} from "react";
import validator from "validator/es";
import textConstants from "../textConstants";

/**
 * The most concrete way of checking whether the entered value is a valid youtube video URL
 * is to query the API to see if we got any results. However it is a good idea to do some initial
 * validation client side before we query the API.
 * @param initialValue The initial value of the URL, this value is validated on call
 * @returns {{validationText: string, onChange: function, urlValue: string}}
 */
const useYoutubeUrlValidation = (initialValue) => {
    const [urlValue, setUrlValue] = useState(initialValue);
    const [validationText, setValidationText] = useState(null);

    useEffect(() => {
        validate(initialValue);
    },[initialValue])

    /**
     * This should be passed to the text field so it gets called for the onChange event.
     * Will update the URL value and validate it on each change.
     * @param event the event fired onChange
     */
    const onChange = (event) => {
        const {value} = event.target;
        validate(value);
    }

    /**
     * validate the URL for URL correctness and that it adheres to youtube format.
     * This will update the validationText with an error message if it encounters any
     * validation problems, otherwise it will be an empty string.
     * @param value the URL value to validate
     */
    const validate = (value) => {
        setUrlValue(value);
        const isValidUrl = validator.isURL(value);
        if (isValidUrl) {
            const regex = new RegExp(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?\s]*).*/,);
            const isValidYoutubeUrl = regex.test(value);
            if (isValidYoutubeUrl) {
                setValidationText('');
            } else {
                setValidationText(textConstants.invalidYoutubeVideo);
            }
        } else {
            setValidationText(textConstants.urlIsInvalid);
        }
    }

    return {urlValue, onChange, validationText}
}

export default useYoutubeUrlValidation;