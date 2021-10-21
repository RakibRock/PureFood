import Button from "@restart/ui/esm/Button";
import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const {signInUsingGoogle} = useFirebase();
  return (
    <div>
      <Button
        onClick={signInUsingGoogle}
        className="btn-custom"
        variant="primary"
        type="submit"
      >
        Sign In With Google
      </Button>
    </div>
  );
};

export default Login;
