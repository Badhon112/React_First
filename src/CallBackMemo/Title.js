import React from "react";

export default React.memo(function Title() {
    console.log("Hello World title")
  return (
    <div>
      <p className="text-blue-500">Use Call Back Hook Tutorial </p>
    </div>
  );
});
