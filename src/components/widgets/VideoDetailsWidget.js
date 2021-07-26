import React from 'react';
import Widget from "../Widget";
import {bool} from "prop-types";
import {Box, CircularProgress, makeStyles, Typography} from "@material-ui/core";
import textConstants from "../../textConstants";
import VideoDetail from "../VideoDetail";
import {videoDetails} from "../../proptypes/widgetdata";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        padding: theme.spacing(0.5, 2),
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(0.5),
    },
    alignEndColumn: {
        alignItems: "flex-end"
    }
}))

const VideoDetailsWidget = (props) => {
    const classes = useStyles();
    const {loading, videoDetails} = props;

    if (loading) return (
        <Widget>
            <CircularProgress/>
        </Widget>
    )

    const formatDateTimeString = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("default", {
            year: "2-digit", month: "numeric", day: "2-digit",
        }).format(date)
    }

    const {
        subscribers,
        videoViews,
        channelViews,
        numComments,
        uploadDate,
        channel
    } = videoDetails;

    return (
        <Widget title={textConstants.details}>
            <Box className={classes.gridContainer}>
                <Box>
                    <VideoDetail title={textConstants.channel} value={channel.name} url={channel.url}/>
                    <VideoDetail title={textConstants.subscribers} value={subscribers}/>
                    <VideoDetail title={textConstants.total_channel_views} value={channelViews}/>
                </Box>
                <Box>
                    <VideoDetail title={textConstants.video_views} alignItems='flex-end' value={videoViews}/>
                    <VideoDetail title={textConstants.num_comments} alignItems='flex-end' value={numComments}/>
                    <VideoDetail title={textConstants.upload_date} alignItems='flex-end' value={formatDateTimeString(uploadDate)}/>
                </Box>
            </Box>
        </Widget>
    );
}

VideoDetailsWidget.propTypes = {
    videoDetails: videoDetails,
    loading: bool
}

VideoDetailsWidget.defaultProps = {
    videoDetails: undefined
}

export default VideoDetailsWidget;
