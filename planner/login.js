import React from "react";

function login(){
    return <div className="login">
        <input type ="text" placeholder="username"/>
        <input type=" password" placeholder="password"/>
        <button type="submit">Login</button>
    </div>
}

export default login;