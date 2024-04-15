
function Signin() {
    const handleGoogleLogin = async () => {
       window.open("http://localhost:8000/api/v1/auth/google/redirect","_self")
    };

    return (
        <>
            <button
                onClick={handleGoogleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Sign in with Google
            </button>
        </>
    )
}
export default Signin;
