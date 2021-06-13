import {Box, Button, Divider, makeStyles, Typography, withStyles} from "@material-ui/core";
import textConstants from "../textConstants";
import UrlSearchBar from "../components/UrlSearchBar";
import {useState} from "react";
import {useHistory} from "react-router";
import {parse} from 'query-string';
import Url from 'url-parse';
import useUrlValidation from "../hooks/useUrlValidation";

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
    // We use this as an intermediary, which only gets set once the Search
    // Button has been clicked. Essentially validation is driven by explicit actions
    const [eventDrivenIsValid, setEventDrivenIsValid] = useState(null);
    const {urlValue, isValid, onChange} = useUrlValidation('');

    const onSearchConfirm = () => {
        setEventDrivenIsValid(isValid);
        if (isValid) {
            const parsed = new Url(urlValue)
            const queryString = parse(parsed.query);
            const videoId = queryString?.v;
            if (videoId) {
                history.push(`/rundown/${videoId}`);
            }
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
                    value={urlValue}
                    onSearch={onSearchConfirm}
                    onChange={onChange}
                    isValid={eventDrivenIsValid}/>
                <Button onClick={onSearchConfirm}>
                    {textConstants.search}
                </Button>
            </Box>
        </Box>
    )
}

export default HomePage;