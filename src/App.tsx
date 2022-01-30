import React from "react";

import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import NavBar from "./components/NavBar";

import "./styles/App.scss";
import ExperienceView from "./components/ExperienceView";

function App() {
	return (
		<div className="App">
			<HomeView />
			<AboutView />
			<ExperienceView />
			<NavBar />
		</div>
	);
}

export default App;
