import { motion } from "framer-motion";

function WordReveal({ text, delay = 0 }) {
	const words = text.split("");
	return (
		<div className="overflow-hidden">
			{words.map((word, i) => (
				<motion.span
					key={i}
					initial={{ opacity: 0, y: 6 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: delay + i * 0.06,
						duration: 0.25,
						ease: "easeOut",
					}}
					className=""
				>
					{word}
				</motion.span>
			))}
		</div>
	);
}
export default function HeroTerminal(props) {
	const lines = [
		"Primary Responsibility: Designing and owning backend platforms",
		"Experience: " +
			props.totalExp +
			"+ years building cloud-native SaaS systems",
		"Focus: Distributed systems, multi-tenant platforms, developer productivity",
		"Impact: Performance, cost, security, and scale",
		"Orientation: Long-term platform ownership and system evolution",
		"Operating Principle: Build once. Scale calmly.",
		"> █",
	];
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-gradient-to-br from-slate-900 to-slate-950
                 border border-cyan-500/30 rounded-2xl mt-18 -8
                 font-mono text-cyan-400 shadow-xl"
		>
			{lines.map((line, index) => (
				<WordReveal
					key={line}
					text={line}
					delay={index === lines.length ? index * 0.2 : index * 0.2}
				/>
			))}
		</motion.div>
	);
}
