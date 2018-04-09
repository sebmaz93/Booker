import React from "react";
import { hot } from "react-hot-loader";

import "./App.scss";
import Flex from "./Flex/Flex";

const App = () => {
	return (
		<div>
			<Flex />
		</div>
	);
};

export default hot(module)(App);
