import React from "react";

export interface NameContextProtocol {
    userName:string;
    setUserName:React.Dispatch<React.SetStateAction<string>>
}