import React from "react";
import { userAge, username } from "./App";

function ChildC() {
	return (
		<>
			<username.Consumer>
				{(name) => {
					return (
						<userAge.Consumer>
							{(age) => {
								return (
									<h1 style={{ fontFamily: "monospace" }}>
										My name is {name} & my age is {age}
									</h1>
								);
							}}
						</userAge.Consumer>
					);
				}}
			</username.Consumer>
		</>
	);
}

export default ChildC;
