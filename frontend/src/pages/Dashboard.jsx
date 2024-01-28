import LandingPage from "../components/LandingPage"

function Dashboard() {

  const user = localStorage.getItem("user");

  return (
   <>
    <LandingPage/>
   </>
  )
}

export default Dashboard;
