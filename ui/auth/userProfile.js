export default function UserProfile({name}) {
    return (<div className="btn btn-none border border-0 m-1"><b>{name ? name : null}</b></div>);
}