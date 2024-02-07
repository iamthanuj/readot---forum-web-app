import { useSelector } from "react-redux";
import LandingPage from "../components/LandingPage"

function Dashboard() {
  const {user} = useSelector((state)=> state.auth)

  return (
   <div >
      {user ? <h1 className="pt-[80px]" >Logged Story feed</h1> :  <LandingPage />  }
   </div>
  );
}

export default Dashboard
