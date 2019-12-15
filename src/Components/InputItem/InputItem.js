import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from './InputItem.module.css';


class InputItem extends React.Component {
    componentDidMount() {
        console.log('componentDidMount in InputItem');
    };

    componentDidUpdate() {
        console.log('componentDidUpdate in InputItem');
    };

    componentWillUnmount() {
        console.log('componentWillUnmount in InputItem');
    }

    state = {
        inputValue: '',
        inputError: false,
    };

        onButtonClick = () => {
            if (this.state.inputValue == false) {
                this.setState({
                    inputError: true,
                })
            } else {
                this.setState({
                    inputValue: '',
                    inputError: false,
                });
                this.props.onClickAdd(
                    this.state.inputValue
                );
            }
        };

    render() {
        const { onClickAdd } = this.props;
        let inputField;

        if (this.state.inputError == false) {
            inputField = <TextField
                label="What should be done?"
                style={{ margin: 8 }}
                placeholder="Todo"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                className={styles.input}

                value={this.state.inputValue.toUpperCase()}
                onChange={event => this.setState({inputValue: event.target.value})}
            />
        } else {
            inputField =  <TextField
                label="I can not add an empty case :("
                style={{ margin: 8 }}
                placeholder="What do we do?"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                className={styles.input}

                value={this.state.inputValue.toUpperCase()}
                onChange={event => this.setState({inputValue: event.target.value})}
            />
        }

        return (
            <div className={styles.textField}>
                { inputField }
                <Button variant="outlined"
                        href="#outlined-buttons"
                        className={styles.button}
                        onClick = { this.onButtonClick }>
                    Add
                </Button>
            </div>
        )
    }
}


export default InputItem;