import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootPage from "./components/root/RootPage";
import CapabilitiesPage from "./components/capabilities/Capabilities";
import BlogPage from "./components/blog/BlogPage";
// import ArchitecturePage from "./components/architecture/ArchitecturePage";
import ConsolePage from "./components/console/ConsolePage";
import ConnectPage from "./components/connect/ConnectPage";
import Navbar from "./Navbar";
import backgroundImage from "./assets/bg.webp";

function App() {
	const divStyle = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
	return (
		<>
			<div style={divStyle}>
				<div className="blurred-box">
					<Navbar />
					<Routes>
						<Route path="/" element={<RootPage />} />
						<Route path="/capabilities" element={<CapabilitiesPage />} />
						{/* <Route path="/architecture" element={<ArchitecturePage />} /> */}
						<Route path="/engineering-logs" element={<BlogPage />} />
						<Route path="/console" element={<ConsolePage />} />
						<Route path="/connect" element={<ConnectPage />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
