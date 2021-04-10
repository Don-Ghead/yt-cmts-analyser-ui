import {Box, Button, Divider, makeStyles, Typography, withStyles} from "@material-ui/core";
import textConstants from "../textConstants";
import UrlSearchBar from "../components/UrlSearchBar";
import {useState} from "react";
import validator from "validator/es";
import {useHistory} from "react-router";
import { parse } from 'query-string';
import Url from 'url-parse';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        height: '2px',
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(1),
    },
    description: {
        width: '80%'
    }
}))

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

const HomePage = () => {
    const classes = useStyles();
    const history = useHistory();
    const [urlFieldValue, setUrlFieldValue] = useState(undefined);
    const [urlValidationString, setUrlValidationString] = useState(undefined);

    const onSearchConfirm = (urlValue) => {
        const isValid = validator.isURL(urlValue);
        if (isValid) {
            const parsed = new Url(urlValue)
            const queryString = parse(parsed.query);
            const videoId = queryString?.v;
            if(videoId) {
                history.push(`/rundown/${videoId}`);
            }
        } else {
            setUrlValidationString(isValid ? [] : [textConstants.urlIsInvalid])
        }
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box>
                    <WhiteTextTypography variant="h2" align='center'>
                        Youtube Rundown
                    </WhiteTextTypography>
                </Box>
                <Box className={classes.description}>
                    <Divider variant="middle" className={classes.divider}/>
                    <WhiteTextTypography variant="h4" align='center'>
                        {textConstants.homePageDescription}
                    </WhiteTextTypography>
                </Box>
                <UrlSearchBar onSearch={onSearchConfirm} onChange={setUrlFieldValue}
                              validationErrors={urlValidationString}/>
                <Button onClick={() => onSearchConfirm(urlFieldValue)}>
                    {textConstants.search}
                </Button>
            </Box>
        </Box>
    )
}

export default HomePage;