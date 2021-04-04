import {Box, Divider, makeStyles, Typography, withStyles} from "@material-ui/core";
import textConstants from "../textConstants";
import SearchBar from "../components/SearchBar";

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

    const onSearchConfirm = () => {
        console.log('boop');
    }

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
                <SearchBar onSearch={onSearchConfirm}/>
            </Box>
        </Box>
    )
}

export default HomePage;