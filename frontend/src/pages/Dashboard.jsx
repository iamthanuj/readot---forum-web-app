function Dashboard() {
  const user = localStorage.getItem("user");

  return <main>
    {user ? <h1>hehe</h1> : <h1>Dashboard</h1>}
  </main>
}

export default Dashboard;
