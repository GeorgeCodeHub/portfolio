import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Palette from "./utils/Palette";

ReactDOM.render(
	<React.StrictMode>
		<Palette>
			<App />
		</Palette>
	</React.StrictMode>,
	document.getElementById("root")
);
