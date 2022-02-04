import React from "react";

import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ExperienceView from "./components/ExperienceView";
import SkillView from "./components/SkillView";
import NavBar from "./components/NavBar";

import "./styles/App.scss";
import "./styles/3d-styles.scss";

function App() {
	return (
		<>
			<div style={{ position: "fixed", height: "100%", width: "100%", zIndex: -1 }}>
				<div className="stars"></div>
				<div className="twinkling"></div>
			</div>
			<HomeView />
			<AboutView />
			<SkillView />
			<NavBar />
		</>
	);
}

export default App;
