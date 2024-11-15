import React, { memo } from "react";

const IconArrowRight = memo((props) => {
  const { width = 26, height = 26 } = props;
  return (
    <svg
      t="1731300750270"
      viewBox="0 0 1024 1024"
      version="1.1"
      p-id="3835"
      style={{
        width: width,
        height: height,
        background: "#fff",
        borderRadius: "50%",
      }}
    >
      <path
        d="M512 0C229.216 0 0 229.216 0 512c0 282.768 229.216 512 512 512 282.752 0 512-229.232 512-512C1024 229.216 794.752 0 512 0zM512 992C246.896 992 32 777.088 32 512 32 246.896 246.896 32 512 32c265.056 0 480 214.896 480 480C992 777.088 777.056 992 512 992z"
        fill="#ccc"
        p-id="3836"
      ></path>
      <path
        d="M430.88 251.632c-6.256-6.256-16.368-6.256-22.624 0s-6.256 16.384 0 22.624L646 512l-237.744 237.76c-6.256 6.256-6.256 16.368 0 22.624s16.368 6.256 22.624 0l248.912-248.912c3.168-3.152 4.704-7.328 4.656-11.456 0.048-4.144-1.488-8.304-4.656-11.472L430.88 251.632z"
        fill="#18191E"
        p-id="3837"
      ></path>
    </svg>
  );
});

export default IconArrowRight;
