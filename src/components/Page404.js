import React from "react";

const Page404 = () => {

  const style={
    margin: "15rem 0",
    textAlign:"center",
    fontSize: "3rem",
    fontWeight: "bold"
  }
  const iframeStyle = {
    margin: "3rem 0",
    pointerEvents: "none"
  }
  return(
    <div style={style}>
      Ooops! We haven't built this page yet...dispatching monkeys to begin coding immediately! 
      <iframe style={iframeStyle} title="404" src="https://giphy.com/embed/5Zesu5VPNGJlm" width="480" height="270" frameBorder="0" allowFullScreen></iframe>
      
      </div>
  )
};

export default Page404;