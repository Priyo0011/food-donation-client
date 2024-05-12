import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { FaGithub,FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const{githubLogin,googleLogin} = useAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn =async ()=>{
      try {
        await googleLogin()
        toast.success('SignIn SuccessFul')
        navigate(-1)
      }catch (err){
        console.log(err);
        toast.error(err?.message)
      }
    }

  return (
    
      <div className="flex mt-8 gap-16 ml-96">
        <button className="btn btn-ghost bg-[#db4437] text-3xl rounded-lg"
        onClick={() => handleGoogleSignIn()}

        >
          <FaGoogle className="text-white"/>
          </button>
        <button
          onClick={() => githubLogin()}
          className="btn btn-ghost bg-[#db4437] text-3xl rounded-lg "
        >
          <FaGithub className="text-white" />
        </button>
        
      </div>

  );
};

export default SocialLogin;