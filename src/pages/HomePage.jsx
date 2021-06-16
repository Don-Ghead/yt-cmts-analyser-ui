import {Box, Button, Divider, makeStyles, Typography, withStyles} from "@material-ui/core";
import textConstants from "../textConstants";
import UrlSearchBar from "../components/UrlSearchBar";
import {useState} from "react";
import {useHistory} from "react-router";
import {parse} from 'query-string';
import Url from 'url-parse';
import useYoutubeUrlValidation from "../hooks/useYoutubeUrlValidation";

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
    },
    searchButton: {
        backgroundColor: '#2F80ED',
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
    // While the URL is validated each time it updates, the error message is only shown
    // to the user once they enter/search. Validation is driven by explicit actions
    const [validationErrorMessage, setValidationErrorMessage] = useState('');
    const {urlValue, onChange, validationText} = useYoutubeUrlValidation('');

    const onSearchConfirm = () => {
        if (!validationText) {
            const parsed = new Url(urlValue)
            const queryString = parse(parsed.query);
            const videoId = queryString?.v;
            if (videoId) {
                history.push(`/rundown/${videoId}`);
            } else {
                // The URL is valid but there is an empty videoId for example
                setValidationErrorMessage(textConstants.unableToFindVideoId)
            }
        } else {
            setValidationErrorMessage(validationText)
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
                <UrlSearchBar
                    data-testid="search-bar"
                    value={urlValue}
                    onSearch={onSearchConfirm}
                    onChange={onChange}
                    validationError={validationErrorMessage}
                />
                <Button onClick={onSearchConfirm}
                        data-testid="confirm-button"
                        variant="contained"
                        className={classes.searchButton}>
                    {textConstants.search}
                </Button>
            </Box>
        </Box>
    )
}

export default HomePage;