import React from 'react';
import styles from './About.module.css';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from "@material-ui/core/CircularProgress";
import Octokit from '@octokit/rest';
import classnames from 'classnames';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    errorText: '',
    User: [],
    repoList: []
  };

  componentDidMount() {
    octokit.repos.listForUser({
          username: 'SveSvet',
        }).then(({ data }) => {
          this.setState({
            repoList: data,
          });
        }).catch(() => {
          this.setState({
            isLoading: false,
            isError: true,
            errorText: 'User is not found',
          });
    });

    octokit.users.getByUsername({
      username: 'SveSvet',
    }).then (({ data }) => {
      this.setState({
        User: data,
        isLoading: false,
      });
      }).catch(() => {
        this.setState({
          isLoading: false,
          isError: true,
          errorText: 'User is not found',
        });
    });
  };

  render() {
    const { isLoading, repoList, isError, ErrorText, User } = this.state;

    return (
        <CardContent className={styles.container}>
          { isLoading ? <CircularProgress color="secondary"/> :
              <div>
                { isError ? <div className={styles.error}>{ErrorText}</div> :
                    <div className={styles.wrap}>
                      <div className={styles.user}>
                        <img className={styles.avatar} src={User.avatar_url} alt = 'avatar' />
                        <div className={styles.info}>
                          <p>Name: {User.login}</p>
                          <p>Status: {User.bio}</p>
                        </div>
                      </div>
                      <h2 className={styles.subtitle}>My repositories:</h2>
                      <div>
                        <li  className={styles.repo}>
                          {repoList.map(repo => (
                              <li key={repo.id}>
                                <a href={repo.svn_url} className={styles.ropo_link}>{repo.name}</a>
                              </li>
                          ))}
                        </li>
                      </div>
                    </div>
                }
              </div>
          }
        </CardContent>
    );
  };
};

export default  About;

