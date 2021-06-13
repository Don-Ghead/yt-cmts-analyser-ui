import React from 'react';
import Widget from "../Widget";
import {string} from "prop-types";
import {Box, makeStyles} from "@material-ui/core";

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
        left: 0,
        width: '100%',
        height: '100%',
        padding: theme.spacing(0, 1, 0, 1),
    }
}))

const VideoEmbedWidget = (props) => {
    const {videoId} = props;
    const classes = useStyles();

    return (
        <Widget>
            <Box className={classes.videoContainer}>
                <iframe
                    title='embedded Video'
                    className={classes.innerWrapper}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allowFullScreen/>
            </Box>

        </Widget>
    );
}

VideoEmbedWidget.propTypes = {
    videoId: string.isRequired
}

VideoEmbedWidget.defaultProps = {}

export default VideoEmbedWidget;