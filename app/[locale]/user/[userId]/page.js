export default function UserPage({params}) {
    const userId = params.userId;

    return (
        <div>Current userId: {userId}</div>
    );
}
