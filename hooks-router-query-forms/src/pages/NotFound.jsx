import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, [navigate]);

  return <div>Page NotFound</div>;
}

export default NotFound;
