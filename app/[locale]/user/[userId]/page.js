export default function UserPage({params}) {
    const userId = params.userId;

    return (
        <div className="text-center">Current userId: {userId}</div>
    );
}
