import React from 'react';
import styles from './Contact.module.css';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from "@material-ui/core/CircularProgress";
import classnames from 'classnames';

class Contacts extends React.Component {
  render() {
    return (
        <CardContent>
          <h1 className={styles.title}>Contacts</h1>
        </CardContent>
    );
  }
}
export default Contacts;