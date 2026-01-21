import { motion } from "framer-motion";

export default function ArchitectureCase({
	title,
	subtitle,
	impact,
	tags,
	sections,
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			className="
      bg-gradient-to-br from-slate-900 to-slate-950
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl p-8
      "
		>
			<div className="mb-6">
				<h2 className="text-2xl text-white font-semibold">{title}</h2>
				<p className="text-slate-400 mt-1">{subtitle}</p>

				<div className="flex flex-wrap gap-2 mt-4">
					{tags.map((tag) => (
						<span
							key={tag}
							className="
                text-xs px-3 py-1 rounded-full
                bg-cyan-400/10 text-cyan-300
                border border-cyan-400/20
              "
						>
							{tag}
						</span>
					))}
				</div>
			</div>

			<p className="text-slate-300 mb-8">{impact}</p>

			<div className="grid md:grid-cols-2 gap-6">
				{sections.map((section) => (
					<div key={section.heading}>
						<h3 className="text-white font-medium mb-2">{section.heading}</h3>
						<p className="text-slate-400">{section.content}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
}
