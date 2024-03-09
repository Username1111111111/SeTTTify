import styles from './searchBar.module.css';

export default function SearchBar() {
    return (<input id={`searchBar`} type="text" className={`form-control border border-secondary ${styles.srch}`} placeholder={`🔍 Search...`}/>);
}