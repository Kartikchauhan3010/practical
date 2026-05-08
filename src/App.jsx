import React, { useState, useEffect } from "react";

function App() {

  // Like Button State
  const [liked, setLiked] = useState(false);

  // API Data State
  const [users, setUsers] = useState([]);

  // Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
     

      {/* Like Button Section */}
      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          marginBottom: "30px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <h2>Like Button</h2>

        <button
          onClick={() => setLiked(!liked)}
          style={{
            fontSize: "30px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>

      {/* API Fetch Section */}
      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>User Data from API</h2>

        {users.map((user) => (
          <div
            key={user.id}
            style={{
              borderBottom: "1px solid lightgray",
              marginBottom: "15px",
              paddingBottom: "10px",
            }}
          >
            <h3>Name: {user.name}</h3>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
