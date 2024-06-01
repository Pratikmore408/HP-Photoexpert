import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";

function Signup() {
  // State variables to hold user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Context to access shared state and functions
  const context = useContext(myContext);
  const { setLoading } = context;

  // Function to handle user signup
  const signup = async () => {
    setLoading(true); // Show loading state

    // Check if all fields are filled
    if (name === "" || email === "" || password === "") {
      setLoading(false); // Hide loading state
      return toast.error("All fields are required"); // Show error message
    }

    try {
      // Create user with Firebase Authentication
      const users = await createUserWithEmailAndPassword(auth, email, password);

      // Create user object to store in Firestore
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      // Reference to the 'users' collection in Firestore
      const userRef = collection(fireDB, "users");

      // Add user data to Firestore
      await addDoc(userRef, user);

      // Show success message
      toast.success("Signup Successfully");

      // Clear input fields
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false); // Hide loading state
    } catch (error) {
      console.log(error);
      setLoading(false); // Hide loading state
    }

    // Call login function to log in the user
    await login();
  };

  // Function to handle user login
  const login = async () => {
    try {
      // Sign in with Firebase Authentication
      const result = await signInWithEmailAndPassword(auth, email, password);

      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(result));

      // Navigate to the home page
      navigate("/");

      setLoading(false); // Hide loading state
    } catch (error) {
      console.log(error);
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center mb-3">
          <button
            onClick={signup}
            className="bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg"
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className="text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
