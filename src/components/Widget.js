import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    widget: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%'
    },
}))

const Widget = (props) => {
    const {children} = props;
    const classes = useStyles();

    return (
        <Paper className={classes.widget}>
            {children}
        </Paper>
    );
}

Widget.propTypes = {}

Widget.defaultProps = {}

export default Widget;