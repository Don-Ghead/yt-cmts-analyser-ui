import React from 'react';
import {string, number, oneOfType} from 'prop-types';
import {Box, Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    textPairContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: ({alignItems}) => alignItems
    }
}))

const VideoDetail = (props) => {
    const {title, value, url} = props;
    const classes = useStyles(props);

    return (
        <Box className={classes.textPairContainer}>
            <Typography color="text.primary" variant="h5">{title}</Typography>
            {url ? <Link color="#1976d2" href={url} variant="h4" rel="noopener noreferrer" target="_blank">{value}</Link> :
                <Typography color="textSecondary" variant="h4">{value}</Typography>}
        </Box>
    );
}

VideoDetail.propTypes = {
    title: string.isRequired,
    value: oneOfType([string, number]).isRequired,
    alignItems: string,
    url: string
}

VideoDetail.defaultProps = {
    url: undefined,
    alignItems: 'flex-start'
}

export default VideoDetail;
