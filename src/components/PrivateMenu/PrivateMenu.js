import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './PrivateMenu.module.css';

function PrivateMenu() {
  const name = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <div>Hello {name}!</div>;
}

export default PrivateMenu;
