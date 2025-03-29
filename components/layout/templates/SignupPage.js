import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function signupHandler() {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      router.push("/signin");
    }
  }
  return (
    <div className="signin-form">
      <he>Registration Form</he>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signupHandler}>Register</button>
      <div>
        <p>Have an account ?</p>
        <Link href="/signin">Sign in</Link>
      </div>
    </div>
  );
}

export default SignupPage;
