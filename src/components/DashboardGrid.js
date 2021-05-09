import React from 'react';
import {string} from 'prop-types';
import RGL, {WidthProvider} from "react-grid-layout";
import {dashboardGridLayout} from "./DashboardGridLayout";
import VideoEmbedWidget from "./VideoEmbedWidget";
import {gridIds} from "../textConstants";
import VideoDetailsWidget from "./VideoDetailsWidget";
import VideoRatingWidget from "./VideoRatingWidget";
import {Box} from "@material-ui/core";
import TopCommentsPanel from "./TopCommentsPanel";
import SentimentAnalysisPanel from "./SentimentAnalysisPanel";

const ReactGridLayout = WidthProvider(RGL);

const DashboardGrid = (props) => {
    const {videoId} = props;

    const defaultProps = {
        className: "layout",
        isDraggable: false,
        isResizable: false,
        cols: 16,
        rowHeight: 30,
        items: dashboardGridLayout.length
    }

    return (
        <ReactGridLayout layout={dashboardGridLayout} {...defaultProps}>
            <div key={gridIds.videoEmbed}>
                <VideoEmbedWidget/>
            </div>
            <div key={gridIds.videoDetails}>
                <VideoDetailsWidget/>
            </div>
            <div key={gridIds.videoRating}>
                <VideoRatingWidget/>
            </div>
            <div key={gridIds.topComments}>
                <TopCommentsPanel/>
            </div>
            <div key={gridIds.sentimentAnalysis}>
                <SentimentAnalysisPanel/>
            </div>
        </ReactGridLayout>
    );
}

DashboardGrid.propTypes = {
    videoId: string.isRequired
}

export default DashboardGrid;