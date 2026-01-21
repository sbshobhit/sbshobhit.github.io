const activity = [
	// {
	// 	type: "ARCH",
	// 	text: "Designed multi-tenant RBAC & feature access platform",
	// 	time: "recent",
	// },
	{
		type: "OPT",
		text: "Reduced CI/CD pipeline cost by ~80%",
		time: "recent",
	},
];

export default function ActivityPreview() {
	return (
		<div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-6">
			<h2 className="text-white font-semibold mb-4">Recent Acticles</h2>

			<div className="space-y-2 font-mono text-sm">
				{activity.map((item, i) => (
					<div key={i} className="text-slate-300">
						<span className="text-cyan-400">[{item.type}]</span> {item.text}
						<span className="text-slate-500 ml-2">({item.time})</span>
					</div>
				))}
			</div>
		</div>
	);
}
