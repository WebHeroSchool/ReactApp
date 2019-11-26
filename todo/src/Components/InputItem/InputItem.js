import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classnames from 'classnames';
import styles from './InputItem.module.css'

const InputItem = () => (
    <div className={styles.textField}>
        <TextField
            label="What should be done?"
            style={{ margin: 8 }}
            placeholder="Todo"
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
        />
    </div>
);

export default InputItem;