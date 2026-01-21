import { useNavigate } from "react-router-dom";

const actions = [
	{ label: "Architecture & Platforms", path: "/capabilities" },
	{ label: "Engineering Logs", path: "/engineering-logs" },
	{ label: "System Console", path: "/console" },
];

export default function QuickActions() {
	  const navigate = useNavigate();

	return (
		<div className="grid md:grid-cols-3 gap-4">
			{actions.map((action) => (
				<button
					key={action.label}
					  onClick={() => navigate(action.path)}
					className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-left
                     hover:border-cyan-400 hover:shadow-cyan-500/10 hover:shadow-lg
                     transition-all"
				>
					<div className="text-white font-semibold text-lg">{action.label}</div>
					<div className="text-slate-400 text-sm mt-1">Navigate →</div>
				</button>
			))}
		</div>
	);
}
