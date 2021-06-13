import React, {useState} from 'react';
import {bool, func, string} from 'prop-types';
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
    const {onSearch, onChange, isValid, value} = props;
    const classes = useStyles();

    const validationText = isValid ? (
            <Typography color="primary" align="center">{textConstants.urlIsValid}</Typography>) :
        <Typography color="error" align="center">{textConstants.urlIsInvalid}</Typography>


    return (
        <Box className={classes.root}>
            <Box className={classes.searchBar}>
                <StyledTextField
                    className={classes.margin}
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    placeholder="Search..."
                    inputProps={{
                        onKeyDown: (event) => {
                            if (event.key === 'Enter') {
                                onSearch();
                            }
                        }
                    }}/>
            </Box>
            <Box>
                {isValid !== null && validationText}
            </Box>
        </Box>
    );
}

UrlSearchBar.propTypes = {
    value: string.isRequired,
    onSearch: func.isRequired,
    onChange: func.isRequired,
    isValid: bool
}

UrlSearchBar.defaultProps = {
    onChange: () => {
    },
    isValid: true
}

export default UrlSearchBar;