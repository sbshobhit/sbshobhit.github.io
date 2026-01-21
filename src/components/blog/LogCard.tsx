import { motion } from "framer-motion";

export default function LogCard({ item }) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			className="
        bg-gradient-to-br from-slate-900 to-slate-950
        bg-white/5 backdrop-blur-xl
        border border-white/10 rounded-xl
        p-6 cursor-pointer
        hover:border-cyan-400/40 transition-all
      "
		>
			<a href={item.url}>
				<div className="flex items-center gap-3 mb-2">
					<span className="text-cyan-300 font-mono">[{item.tags}]</span>
					<span className="text-slate-400 text-sm">
						{item.readable_publish_date}
					</span>
				</div>

				<h2 className="text-lg text-white font-medium">{item.title}</h2>

				<p className="text-slate-400 mt-2">{item.description}</p>
			</a>
		</motion.div>
	);
}
