import React from 'react';
import {string} from 'prop-types'
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    widget: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%'
    },
    widgetContent: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
    widgetTitle: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

const Widget = (props) => {
    const {children, title} = props;
    const classes = useStyles();

    return (
        <Paper className={classes.widget}>
            <Box className={classes.widgetContent}>
                {title && (
                    <Typography variant="h3">
                        <Box color="text.primary" className={classes.widgetTitle}>
                            {title}
                        </Box>
                    </Typography>)}
                {children}
            </Box>
        </Paper>
    );
}

Widget.propTypes = {
    title: string
}

Widget.defaultProps = {
    title: undefined
}

export default Widget;
