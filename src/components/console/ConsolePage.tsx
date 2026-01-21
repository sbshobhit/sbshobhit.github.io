import { motion } from "framer-motion";

export default function ConsolePage() {
	return (
		<div className="console">
			<div className="p-8 space-y-8 font-mono">
				<ConsoleBlock
					title="SYSTEM STATUS"
					lines={[
						"STATUS: ACTIVE",
						"ROLE: Staff Backend Engineer | Platform Architect",
						"FOCUS: Cloud-native SaaS & Platform Systems",
						"LOCATION: India | Global collaboration",
					]}
				/>

				<div className="grid md:grid-cols-2 gap-6">
					<ConsoleBlock
						title="KEY METRICS"
						lines={[
							"EXPERIENCE_YEARS: 7+",
							"PERFORMANCE_GAIN: 50%+",
							"CI_CD_COST_REDUCTION: 80%",
							"PLATFORMS_OWNED: MULTIPLE",
						]}
					/>

					<ConsoleBlock
						title="RECENT LOGS"
						lines={[
							"[ARCH] Designed multi-tenant RBAC platform",
							"[OPT] Reduced CI/CD pipeline cost by ~80%",
							"[SYS] Led Clean Architecture migration",
							"[SEC] Contributed to SOC 2 compliance",
						]}
					/>
				</div>

				<ConsoleBlock
					title="AVAILABILITY"
					lines={[
            "ORIENTATION: Long-term platform ownership",
            "COLLABORATION: Cross-team technical leadership",
            "PRINCIPLE: Build once. Scale calmly."

					]}
				/>
			</div>
		</div>
	);
}

function ConsoleBlock({ title, lines }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
			className="
        bg-gradient-to-br from-slate-900 to-slate-950
        bg-black/40
        border border-cyan-400/20
        rounded-xl
        p-6
        backdrop-blur-lg
      "
		>
			<h2 className="text-cyan-300 mb-3">{title}</h2>
			<div className="space-y-1 text-slate-300 text-sm">
				{lines.map((line) => (
					<div key={line}>{line}</div>
				))}
			</div>
		</motion.div>
	);
}
