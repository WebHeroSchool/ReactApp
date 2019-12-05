import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const style = {
    done: {
        textDecoration: 'line-through'
    }
};

const Item = ( {value, isDone, classes, onClickDone, id, onClickDelete} ) => (
    <ListItem fullWidth className={styles.item}>
            <Checkbox
                checked={ isDone }
                tabIndex={-1}
                onClick={() => onClickDone(id)}
            />
        <ListItemText primary={value} classes={{
            root: isDone && classes.done
        }} />
        <ListItemSecondaryAction>
            <IconButton aria-label="Comments">
                <DeleteIcon
                    onClick={() => onClickDelete(id)}
                />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>);

Item.defaultProps = {
    value: 'Our goal is to conquer the world!',
};

Item.propTypes = {
    value: PropTypes.oneOfType ([
    PropTypes.string,
    PropTypes.number
])
};

export default withStyles(style)(Item);
