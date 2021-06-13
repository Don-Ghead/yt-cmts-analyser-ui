import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router";
import {AppBar, Box, makeStyles} from "@material-ui/core";
import {ReactComponent as LogoIcon} from "../resources/logoIcon.svg";
import {ReactComponent as LogoText} from "../resources/logoText.svg";
import DashboardGrid from "../components/DashboardGrid";

const useStyles = makeStyles(() => ({
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
    },
}))

const PrimaryDashboard = () => {
    const classes = useStyles();
    const {videoId} = useParams();

    return (
        <>
            <AppBar position="static">
                <Box padding={1} className={classes.logoContainer}>
                    <LogoIcon/>
                    <Box paddingLeft={1}>
                        <LogoText/>
                    </Box>
                </Box>
            </AppBar>
            <DashboardGrid  videoId={videoId}/>
        </>
    );
}

PrimaryDashboard.propTypes = {
    videoId: PropTypes.string,
}

PrimaryDashboard.defaultProps = {
    videoId: undefined
}

export default PrimaryDashboard;