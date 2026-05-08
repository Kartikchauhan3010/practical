function Fetchapi() {
          useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h2>User Info</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Website: {user.website}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default Fetchapi