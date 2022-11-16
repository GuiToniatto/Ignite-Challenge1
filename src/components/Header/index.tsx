import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

export function Header() {
    return (
        <header className={ styles.content }>
            <img src={ logo } alt="Rocket logo" />
            <h1><span className={ styles.textBlue }>to</span><span className={ styles.textPurple }>do</span></h1>
        </header>
    )
}