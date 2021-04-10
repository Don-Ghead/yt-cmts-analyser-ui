import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Box, fade, makeStyles, TextField, Typography} from "@material-ui/core";
import textConstants from "../textConstants";

const useInputStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid #e2e2e1',
        borderRadius: 4,
        backgroundColor: 'white',
        overflow: 'hidden',
        fontsize: 50,
        '&:hover': {
            backgroundColor: 'white'
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: '#25e9c1'
        }
    },
    focused: {}
}))

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    searchBar: {
        width: '50vh'
    },
    margin: {
        margin: theme.spacing(2, 0, 1, 0),
    }
}))

const StyledTextField = (props) => {
    const classes = useInputStyles();

    return (<TextField fullWidth InputProps={{classes, disableUnderline: true}} {...props}/>)
}

const UrlSearchBar = (props) => {
    const {onSearch, onChange, validationErrors} = props;
    const classes = useStyles();
    const [fieldValue, setFieldValue] = useState('');
    const [fieldValidationElems, setFieldValidationElems] = useState(undefined);

    const onFieldChange = (event) => {
        setFieldValue(event.target.value);
        if(onChange) {
            onChange(event.target.value);
        }
    }

    React.useEffect(() => {
        const validationStrings = () => {
            let validationElements = undefined;
            if (validationErrors?.length === 0) {
                validationElements = (<Typography color="primary" align="center">{textConstants.urlIsValid}</Typography>)
            } else if (validationErrors?.length > 0) {
                validationElements = validationErrors.map((errorMessage) => (
                    <Typography key={errorMessage} color="error" align="center">{errorMessage}</Typography>))
            }
            setFieldValidationElems(validationElements);
        }
        validationStrings()
    }, [validationErrors])

    return (
        <Box className={classes.root}>
            <Box className={classes.searchBar}>
                <StyledTextField
                    className={classes.margin}
                    variant="filled"
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
            </Box>
            <Box>
                {fieldValidationElems}
            </Box>
        </Box>
    );
}

UrlSearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    validationErrors: PropTypes.arrayOf(PropTypes.string),
}

UrlSearchBar.defaultProps = {}

export default UrlSearchBar;