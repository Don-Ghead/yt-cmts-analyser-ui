import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TextField} from "@material-ui/core";
import textConstants from "../textConstants";

const SearchBar = (props) => {
    const {onSearch} = props;
    const [fieldValue, setFieldValue] = useState('');

    const onFieldChange = (event) => {
        setFieldValue(event.target.value);
    }

    return (
        <>
            <TextField variant="outlined"
                       value={fieldValue}
                       onChange={onFieldChange}
                       placeholder="Search..."
                       inputProps={{
                           onKeyDown: (event) => {
                                if (event.key === 'Enter') {
                                    onSearch(fieldValue);
                                }
                           }
                       }}/>
        </>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func,
}

SearchBar.defaultProps = {}

export default SearchBar;