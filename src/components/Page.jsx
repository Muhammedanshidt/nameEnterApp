import React, { useContext } from "react";
import context from "./context";
function Page() {

  const {name} = useContext(context)

  return (
    <div className="flex justify-center">
        <h1 className="mt-3 w-fit text-2xl font-semibold bg-stone-500 p-2 rounded-md text-white">my name is {name}</h1>
    </div>
  )
}

export default Page