import UserTableRow from "./userTableRow";

export default function UserTableBody({ users, selectedRows, selectRow, deselectRow }) {
    // console.log(users);
    // console.log(`TableBody user: -----> ${users}`);
    
    const allRows = users.map((user) => (
        <UserTableRow
            key={user.id} 
            id={user.id}
            name={user.name}
            email={user.email}
            signup_date={user.signup_date}
            last_login_date={user.last_login_date}
            blocked={user.blocked}
            admin={user.admin}

            selectRow={selectRow}
            deselectRow={deselectRow}
            selectedRows={selectedRows}
        />
    ));

    return <tbody>{allRows}</tbody>;
}

// user: {
//     id: "string",
//     name: "string",
//     email: "string",
//     password: "string",
//     signup_date: "date",
//     last_login_date: "date",
//     authenticated: "boolean",
//     blocked: "boolean",
//     admin: "boolean",
//     personal_page: "string",
//     language: "string",
//     collections: ["collectionId1", "collectionId2", "collectionId3"],
//     items: ["itemId1", "itemId2", "itemId3"],
//     comments: ["commentId1", "commentId2", "commentId3"],
//     likes: ["likeId1", "likeId2", "likeId3"]
// },