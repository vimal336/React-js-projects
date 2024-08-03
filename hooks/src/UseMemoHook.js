import React, { useState } from "react";

export const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const [dark, SetDark] = useState(false);
  return (
    <>
      <p>UseMemoHook</p>
    </>
  );
};
