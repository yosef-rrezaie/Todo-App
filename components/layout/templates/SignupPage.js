import Link from "next/link";

function SignupPage() {
  return (
    <div className="signin-form">
      <he>Registration Form</he>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <div>
        <p>Have an account ?</p>
        <Link href="/signin">Sign in</Link>
      </div>
    </div>
  );
}

export default SignupPage;
