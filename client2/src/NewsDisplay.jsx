import React, { useEffect, useState } from "react";
export default function NewsDisplay(props) {
  return(
    <div>
      <h3>{props.title}</h3>
    </div>
    <div>
      <h3>{props.content}</h3>
    </div>
  );
}
