import React from "react";
function Button({style="", onClick, children}){
  return(
    <button 
    className={`px-6 py-3 bg-gradient-to-r from-[#B700A5] to-[#510049] hover:from-[#510049] hover:to-[#B700A5] rounded-md transition cursor-pointer ${style}`}
    onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;