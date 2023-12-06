import { proxy } from "valtio";
import { useNavigate } from "react-router-dom";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth();

const state = proxy({
  //   user: JSON.parse(localStorage.getItem("newsusers")) || [],
  //for logedinUser
  // loggedUser: JSON.parse(localStorage.getItem("loggedUser")) || null,
  loggedUser: (() => {
    const storedUser = localStorage.getItem("loggedUser");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing loggedUser:", error);
      return null;
    }
  })(),
});

// export const signup = (email, password) => {
//   // Validate input (add more validation as needed)
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((value) => {
//       state.loggedUser = value.user;
//     })
//     .catch((err) => {
//       console.log(err);
//       state.loggedUser = null;
//     });

//   // Save user to local storage using Valtio
//   localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));

//   // Return the newly created user
//   return state.loggedUser;
// };

export const signin = (email, password) => {
  // if(state.users.length>0 )
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((value) => {
  //     state.loggedUser = value.user;
  //     localStorage.setItem("loggetUser", state.loggedUser);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     state.loggedUser = null;
  //   });
  // // {
  // return state.loggedUser;
};

//Log Out
export const logOut = () => {
  state.loggedUser = null;
  localStorage.setItem("loggedUser", null);
};

export default state;
