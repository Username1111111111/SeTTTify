import styles from './searchBar.module.css'

export default function SearchBar() {
    return (<input id={`searchBar`} type="text" className={`form-control ${styles.srch}`} placeholder="Search..." />);
}