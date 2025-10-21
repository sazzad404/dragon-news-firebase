import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate()

  const hanldeRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("name should be more than 5 character");
      return;
    } else {
      setNameError("");
    }

    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // console.log({ name, email, photo, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURl: photo })
          .then(() => {
            setUser({...user, displayName: name, photoURl: photo});
            navigate("/")
          })
          .catch(error=>{
            setUser(user)
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 py-5 shadow-2xl">
          <h2 className="font-semibold text-2xl text-center">
            Register Your Account
          </h2>
          <form onSubmit={hanldeRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter Your Name"
                required
              />

              {nameError && <p className="text-xs text-red-400">{nameError}</p>}
              {/* Photo Url */}
              <label className="label">Photo Url</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo Url"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              {/* .............................................................. */}

              <button type="submit" className="btn btn-neutral mt-4">
                Register Now
              </button>
              <p className="font-semibold text-center pt-5 ">
                Already you have an account ?{" "}
                <Link className="text-secondary " to={"/auth/login"}>
                  Log in
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
