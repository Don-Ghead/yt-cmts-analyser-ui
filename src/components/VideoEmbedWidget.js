import React from 'react';
import Widget from "./Widget";
import {string} from "prop-types";
import YouTube from "react-youtube";
import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    videoContainer: {
        height: 0,
        width: '100%',
        paddingBottom: '56.25%',
        position: 'relative'
    },
    innerWrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    }
}))

const VideoEmbedWidget = (props) => {
    const {videoId} = props;
    const classes = useStyles();

    return (
        <Widget>
            <Box className={classes.videoContainer}>
                <Box className={classes.innerWrapper}>
                    <YouTube videoId={videoId} opts={{height: '100%', width: '100%'}}/>
                </Box>
            </Box>
        </Widget>
    );
}

VideoEmbedWidget.propTypes = {
    videoId: string.isRequired
}

VideoEmbedWidget.defaultProps = {}

export default VideoEmbedWidget;