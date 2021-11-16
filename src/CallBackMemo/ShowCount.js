import React from "react";

export default React.memo(function ShowCount({ count, title }) {
    console.log("Hello World ShowCount")
  return (
    <div>
      <p className="bg-gray-300">
        {title} is {count}
      </p>
    </div>
  );
});
