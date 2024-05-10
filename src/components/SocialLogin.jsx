import useAuth from "../hooks/useAuth";
import { FaGithub,FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    const{githubLogin,googleLogin} = useAuth();
  return (
    
      <div className="flex mt-8 gap-16 ml-96">
        <button className="btn btn-ghost bg-[#db4437] text-3xl rounded-lg"
        onClick={() => googleLogin()}
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