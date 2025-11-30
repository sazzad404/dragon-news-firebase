import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";
const SocialLogin = () => {
  const { signInWithGoogle } = use(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-secondary w-full"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
