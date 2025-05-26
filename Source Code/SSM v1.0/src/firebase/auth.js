import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import app from "./Config";


const auth = getAuth(app);
const db = getFirestore(app);

export const registerUser = async (email, password, role = "user") => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  await setDoc(doc(db, "users", uid), {
    email,
    role,
  });

  return userCredential.user;
};

export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  const userDoc = await getDoc(doc(db, "users", uid));
  if (!userDoc.exists()) {
    throw new Error("Data user tidak ditemukan");
  }

  const userData = userDoc.data();

  console.log("Role user login:", userData.role);  // Ini penting, cek di console browser

  return {
    user: userCredential.user,
    role: userData.role,
  };
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error("Logout gagal: " + error.message);
  }
};