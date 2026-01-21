import { motion } from "framer-motion";

export default function ConnectPage() {
	return (
		<div className="flex items-center justify-center h-screen flex font-mono">
			<EndpointBlock />
		</div>
	);
}

function EndpointBlock() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className="
				bg-gradient-to-br from-slate-900 to-slate-950
				border border-cyan-400/20
				rounded-xl
				w-1/2
				p-6
				backdrop-blur-lg
      		"
		>
			<h2 className="text-cyan-300 mb-4">AVAILABLE ENDPOINTS</h2>

			<div className="space-y-3 text-slate-300">
				<Endpoint
					method="GET"
					label="/linkedin"
					href="https://www.linkedin.com/in/sbshobhit00"
				/>
				<Endpoint
					method="GET"
					label="/github"
					href="https://github.com/ticatwolves"
				/>
				<Endpoint
					method="GET"
					label="/dev.to"
					href="https://dev.to/sbshobhit/"
				/>
				<Endpoint
					method="GET"
					label="/instagram"
					href="https://www.instagram.com/raymon_batsy/"
				/>
				<Endpoint
					method="GET"
					label="/youtube"
					href="https://www.youtube.com/@sbshobhit"
				/>
				<Endpoint
					method="POST"
					label="/email"
					href="mailto:sbshobhit00@gmail.com"
				/>
			</div>
		</motion.div>
	);
}

function Endpoint({ method, label, href }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="
        flex items-center gap-4
        hover:text-white transition-colors
      "
		>
			<span className="text-cyan-400">{method}</span>
			<span>{label}</span>
		</a>
	);
}
