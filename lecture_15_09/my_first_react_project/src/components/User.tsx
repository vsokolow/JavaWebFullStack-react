// import React from "react";

interface Props {
    name: string;
    age?: number;
    city?: string;
}

export default function User(props: Props) {

    console.log(props)

    return (
        <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age} y. o.</p>
        <p>City: {props.city}</p>
        </div>
    )
}