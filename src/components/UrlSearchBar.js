import React from 'react';
import {arrayOf, func, string} from 'prop-types';
import {Box, fade, makeStyles, TextField, Typography} from "@material-ui/core";

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
    const {onSearch, onChange, validationError, value} = props;
    const classes = useStyles();

    const validationText = !validationError ? <></> : (
        <Typography color="error" align="center" variant="h6">
            <Box fontWeight="fontWeightBold" data-testid="validation-text">
                {validationError}
            </Box>
        </Typography>
    )

    return (
        <Box className={classes.root}>
            <Box className={classes.searchBar}>
                <StyledTextField
                    data-testid="search-field"
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
                {validationText}
            </Box>
        </Box>
    );
}

UrlSearchBar.propTypes = {
    value: string.isRequired,
    onSearch: func.isRequired,
    onChange: func.isRequired,
    validationError: string,
}

UrlSearchBar.defaultProps = {
    onChange: () => {
    },
    validationError: ''
}

export default UrlSearchBar;