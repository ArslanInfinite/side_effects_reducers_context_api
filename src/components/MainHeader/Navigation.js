import classes from './Navigation.module.css'
import AuthContext from '../../store/AuthContext'

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {contextData => {
        return <nav className={classes.nav}>
        <ul>
          {props.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {contextData.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {props.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      }}
    </AuthContext.Consumer>
  )
}

export default Navigation
