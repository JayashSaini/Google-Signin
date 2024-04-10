import axios from 'axios'

function Signin() {
    const handleGoogleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/auth/google');
            console.log(response);
        } catch (error) {
            console.error('Error logging in with Google:', error);
            // Handle error, e.g., display an error message to the user
        }
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
