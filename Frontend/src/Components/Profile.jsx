import { useParams } from "react-router-dom"

const Profile = () => {
    let {accessToken,refreshToken} = useParams();

    accessToken = accessToken ? accessToken.substring(0, 20) : '';
    refreshToken = refreshToken ? refreshToken.substring(0, 20) : '';
  return (
   <>
     <div className="h-screen w-full bg-orange-800 text-white flex flex-col items-center justify-center font-bold text-xl"><h1>HELLO PROFILE</h1>
     <p>Access Token: {accessToken}</p>
      <p>Refresh Token: {refreshToken}</p></div>
    
   </>
  )
}

export default Profile