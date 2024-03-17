import UserLayout from "../user/[userId]/layout";


export default function Page() {

    let currentSessionUserId = '7a3162da-edee-4de8-a2c6-529397a16c4e';
    // let currentSessionUserId = 'userlayout'

    return (
        <UserLayout userId={currentSessionUserId}/>
    );
}
