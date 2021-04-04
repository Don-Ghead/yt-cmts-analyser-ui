import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router";
import {Box, Typography} from "@material-ui/core";

const PrimaryDashboard = () => {
    const {videoId} = useParams();

    return (
        <Box>
            <Typography>
                Primary Dashboard: Video Id {videoId}
            </Typography>
        </Box>
    );
}

PrimaryDashboard.propTypes = {
    videoId: PropTypes.string,
}

PrimaryDashboard.defaultProps = {
    videoId: undefined
}

export default PrimaryDashboard;