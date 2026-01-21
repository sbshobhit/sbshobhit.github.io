import { motion } from "framer-motion";

export default function SystemStats(props) {
	const stats = [
		{ label: "Experience", value: props.totalExp + "+ Years" },
		{ label: "Performance Gains", value: "50%+" },
		{ label: "CI/CD Cost Reduction", value: "80%" },
		{ label: "Platforms Owned", value: "Multiple SaaS" },
	];

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
			{stats.map((stat, i) => (
				<motion.div
					key={stat.label}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: i * 0.1 }}
					whileHover={{ y: -4 }}
					className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center
                     hover:border-cyan-400/50 transition-all"
				>
					<div className="text-2xl font-bold text-white">{stat.value}</div>
					<div className="text-sm text-slate-400 mt-1">{stat.label}</div>
				</motion.div>
			))}
		</div>
	);
}
