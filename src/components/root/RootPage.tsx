import { motion } from "framer-motion";
import HeroTerminal from "./HeroTerminal";
import SystemStats from "./SystemStats";
import QuickActions from "./QuickActions";
import ActivityPreview from "./ActivityPreview";

export default function RootPage() {
	const professionalCareerStartDate = new Date("2018-06-18");
	var currentDate = new Date();
	var totalExp =
		currentDate.getFullYear() - professionalCareerStartDate.getFullYear();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.9 }}
			className="p-8 space-y-12"
		>
			<HeroTerminal totalExp={totalExp} />
			<SystemStats totalExp={totalExp} />
			<QuickActions />
			<ActivityPreview />
		</motion.div>
	);
}
