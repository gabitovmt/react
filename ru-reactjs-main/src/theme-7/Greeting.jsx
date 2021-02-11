import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

export default function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}
