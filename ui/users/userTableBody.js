import UserTableRow from "./userTableRow";

export default function UserTableBody({ users, selectedRows, selectRow, deselectRow }) {
    // console.log(users);
    // console.log(`TableBody user: -----> ${users}`);
    
    const allRows = users.map((user, index) => (
        <UserTableRow
            key={user.id} 
            id={user.id}
            index={index}
            name={user.name}
            email={user.email}
            signupDate={user.signupDate}
            lastLoginDate={user.lastLoginDate}
            blocked={user.blocked}
            admin={user.admin}

            selectRow={selectRow}
            deselectRow={deselectRow}
            selectedRows={selectedRows}
        />
    ));

    return <tbody className="rounded">{allRows}</tbody>;
}