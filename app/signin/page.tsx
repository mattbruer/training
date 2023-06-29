"use client";
import { useState } from "react";
import signIn from "../firebase/auth/signin";
import { useRouter } from "next/navigation";
import { UserCredential } from "firebase/auth";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState<UserCredential | null>(null);
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);
    if (error) {
      return console.log(error);
    }

    // else successful
    setRes(result);
    console.log(result);
    // return router.push("/admin");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign In</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
        <p>{JSON.stringify(res?.user.email)}</p>
      </div>
    </div>
  );
}

export default Page;
