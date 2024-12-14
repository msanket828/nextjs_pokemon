import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <Link href={"/"}>Back to home</Link>
    </div>
  );
};

export default NotFound;
