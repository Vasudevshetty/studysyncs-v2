/* eslint-disable react/no-unescaped-entities */
import UtilLayout from "./UtilLayout";

function Login() {
  return (
    <UtilLayout>
      <div className="flex  items-center justify-around h-full ">
        <div className="border-r p-4 ">
          <h1 className="">Welcome back to StudySyncs...</h1>
          <h2>Let's get logged in!</h2>
        </div>

        <div className="flex flex-col">
          <label>Enter email</label>
          <input />
          <label>Enter password</label>
          <input />
        </div>
      </div>
    </UtilLayout>
  );
}

export default Login;
