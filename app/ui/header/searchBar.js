import styles from './searchBar.module.css'

export default function SearchBar() {
    return (<input type="text" className={`form-control`}style={{maxWidth: 30+"%", minWidth: 90+"px"}} placeholder="Search..." />);
}