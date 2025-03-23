// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { cityAreas, cities } from "../data/areaOptions";
// import InputField from "../components/InputField";

// const SignupPage = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [area, setArea] = useState("");
//   const [subArea, setSubArea] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (!email || !name || !password || !area || !subArea) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Save user for dummy flow
//     localStorage.setItem("user", JSON.stringify({ name, area, subArea }));
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-primary">
//       {/* Left Form */}
//       <div className="md:w-1/2 flex items-center justify-center bg-white px-10 py-16 shadow-lg rounded-r-3xl">
//         <form onSubmit={handleSignup} className="w-full max-w-md space-y-5">
//           <h2 className="text-3xl font-bold text-dark">
//             Sign Up for NoiseWatch
//           </h2>

//           <InputField
//             label="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />

//           <InputField
//             label="Username"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your username"
//           />

//           <InputField
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />

//           <div>
//             <label className="block text-dark mb-1 font-medium">
//               Select City
//             </label>
//             <select
//               className="w-full border-2 border-dark px-4 py-2 rounded-lg"
//               value={area}
//               onChange={(e) => {
//                 setArea(e.target.value);
//                 setSubArea("");
//               }}
//             >
//               <option value="">Choose city</option>
//               {cities.map((city) => (
//                 <option key={city}>{city}</option>
//               ))}
//             </select>
//           </div>

//           {area && (
//             <div>
//               <label className="block text-dark mb-1 font-medium">
//                 Select Sub-Area
//               </label>
//               <select
//                 className="w-full border-2 border-dark px-4 py-2 rounded-lg"
//                 value={subArea}
//                 onChange={(e) => setSubArea(e.target.value)}
//               >
//                 <option value="">Choose area</option>
//                 {cityAreas[area].map((sa) => (
//                   <option key={sa}>{sa}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-dark text-white py-2 rounded-lg hover:opacity-90"
//           >
//             Sign Up
//           </button>

//           <p className="text-sm text-center text-dark">
//             Already have an account?{" "}
//             <Link to="/" className="underline">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>

//       {/* Right Info */}
//       <div className="hidden md:flex md:w-1/2 bg-dark text-white items-center justify-center p-12">
//         <div>
//           <h1 className="text-4xl font-bold mb-4">Join NoiseWatch 🚨</h1>
//           <p className="text-lg opacity-80">
//             Track urban noise and receive instant alerts in your area.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { cityAreas, cities } from "../data/areaOptions";
// import InputField from "../components/InputField";

// const SignupPage = () => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [area, setArea] = useState("");
//   const [subArea, setSubArea] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (!email || !username || !password || !area || !subArea) {
//       alert("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, username, password, area, subArea }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Signup successful. Redirecting to login...");
//         navigate("/");
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       alert("Error occurred while signing up.", err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-primary">
//       {/* Left Form */}
//       <div className="md:w-1/2 flex items-center justify-center bg-white px-10 py-16 shadow-lg rounded-r-3xl">
//         <form onSubmit={handleSignup} className="w-full max-w-md space-y-5">
//           <h2 className="text-3xl font-bold text-dark">
//             Sign Up for NoiseWatch
//           </h2>

//           <InputField
//             label="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />

//           <InputField
//             label="Username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your username"
//           />

//           <InputField
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />

//           <div>
//             <label className="block text-dark mb-1 font-medium">
//               Select City
//             </label>
//             <select
//               className="w-full border-2 border-dark px-4 py-2 rounded-lg"
//               value={area}
//               onChange={(e) => {
//                 setArea(e.target.value);
//                 setSubArea("");
//               }}
//             >
//               <option value="">Choose city</option>
//               {cities.map((city) => (
//                 <option key={city}>{city}</option>
//               ))}
//             </select>
//           </div>

//           {area && (
//             <div>
//               <label className="block text-dark mb-1 font-medium">
//                 Select Sub-Area
//               </label>
//               <select
//                 className="w-full border-2 border-dark px-4 py-2 rounded-lg"
//                 value={subArea}
//                 onChange={(e) => setSubArea(e.target.value)}
//               >
//                 <option value="">Choose area</option>
//                 {cityAreas[area].map((sa) => (
//                   <option key={sa}>{sa}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-dark text-white py-2 rounded-lg hover:opacity-90"
//           >
//             Sign Up
//           </button>

//           <p className="text-sm text-center text-dark">
//             Already have an account?{" "}
//             <Link to="/" className="underline">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>

//       {/* Right Info */}
//       <div className="hidden md:flex md:w-1/2 bg-dark text-white items-center justify-center p-12">
//         <div>
//           <h1 className="text-4xl font-bold mb-4">Join NoiseWatch 🚨</h1>
//           <p className="text-lg opacity-80">
//             Track urban noise and receive instant alerts in your area.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { cityAreas, cities } from "../data/areaOptions";
import InputField from "../components/InputField";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const [area, setArea] = useState("");
  const [subArea, setSubArea] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError("server", {
          type: "manual",
          message: result.message || "Registration failed",
        });
      } else {
        clearErrors("server");
        alert("Signup successful. Redirecting to login...");
        navigate("/");
      }
    } catch (err) {
      setError("server", {
        type: "manual",
        message: "Server error. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-primary">
      <div className="md:w-1/2 flex items-center justify-center bg-white px-10 py-16 shadow-lg rounded-r-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-5"
        >
          <h2 className="text-3xl font-bold text-dark">
            Sign Up for NoiseWatch
          </h2>

          <div>
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              onChange={(e) => {
                setValue("email", e.target.value);
                clearErrors("server");
              }}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <InputField
              label="Username"
              type="text"
              placeholder="Enter your username"
              {...register("username", { required: "Username is required" })}
              onChange={(e) => {
                setValue("username", e.target.value);
                clearErrors("server");
              }}
            />
            {errors.username && (
              <p className="text-sm text-red-600">{errors.username.message}</p>
            )}
          </div>

          <div>
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              onChange={(e) => {
                setValue("password", e.target.value);
                clearErrors("server");
              }}
            />
            {errors.password && (
              <p className="text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block text-dark mb-1 font-medium">
              Select City
            </label>
            <select
              className="w-full border-2 border-dark px-4 py-2 rounded-lg"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
                setSubArea("");
                setValue("area", e.target.value);
              }}
            >
              <option value="">Choose city</option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>

          {area && (
            <div>
              <label className="block text-dark mb-1 font-medium">
                Select Sub-Area
              </label>
              <select
                className="w-full border-2 border-dark px-4 py-2 rounded-lg"
                value={subArea}
                onChange={(e) => {
                  setSubArea(e.target.value);
                  setValue("subArea", e.target.value);
                }}
              >
                <option value="">Choose area</option>
                {cityAreas[area].map((sa) => (
                  <option key={sa}>{sa}</option>
                ))}
              </select>
            </div>
          )}

          {errors.server && (
            <p className="text-sm text-red-600">{errors.server.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-dark text-white py-2 rounded-lg hover:opacity-90"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-dark">
            Already have an account?{" "}
            <Link to="/" className="underline">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right Info */}
      <div className="hidden md:flex md:w-1/2 bg-dark text-white items-center justify-center p-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Join NoiseWatch 🚨</h1>
          <p className="text-lg opacity-80">
            Track urban noise and receive instant alerts in your area.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
