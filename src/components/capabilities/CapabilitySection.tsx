import { motion } from "framer-motion";

export default function CapabilitySection({ title, items }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="
        bg-gradient-to-br from-slate-900 to-slate-950
        bg-white/5 backdrop-blur-xl
        border border-white/10 rounded-2xl
        p-6
      "
		>
			<h2 className="text-xl font-medium text-white mb-4">{title}</h2>

			<ul className="space-y-2 text-slate-300">
				{items.map((item) => (
					<li key={item} className="flex gap-2">
						<span className="text-cyan-300">▸</span>
						{item}
					</li>
				))}
			</ul>
		</motion.div>
	);
}
