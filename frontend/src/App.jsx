import axios from "axios";
import { useEffect, useState } from "react";
function App() {
    const [usersData, setusersData] = useState([]);
    const getData = async () => {
        const res = await axios.get("http://localhost:4000/api/users");
        setusersData(res.data.users);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>Test 1</h1>
            <h1>List of users</h1>
            <h2>hello </h2>
            {usersData.map((user) => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}
export default App;

