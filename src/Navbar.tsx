import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
	{ path: "/", label: "root" },
	{ path: "/capabilities", label: "capabilities" },
	// { path: "/architecture", label: "architecture" },
	{ path: "/engineering-logs", label: "logs" },
	{ path: "/console", label: "console" },
	{ path: "/connect", label: "connect" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="bg-slate-900 border border-slate-800 text-center fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between font-mono">
				<span className="text-cyan-300">~/portfolio</span>

				{/* Desktop */}
				<div className="hidden md:flex gap-6 text-sm">
					{navItems.map((item) => (
						<NavItem key={item.path} {...item} />
					))}
				</div>

				{/* Mobile button */}
				<button
					onClick={() => setOpen(true)}
					className="md:hidden text-slate-300"
				>
					☰
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="md:hidden bg-slate-900 border border-slate-800 border-t border-white/10"
					>
						<div className="px-6 py-6 space-y-4">
							{navItems.map((item) => (
								<NavLink
									key={item.path}
									to={item.path}
									onClick={() => setOpen(false)}
									className={({ isActive }) =>
										`block ${isActive ? "text-cyan-300" : "text-slate-400"}`
									}
								>
									{item.label}
								</NavLink>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}

function NavItem({ path, label }) {
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive ? "text-cyan-300" : "text-slate-400 hover:text-white"
			}
		>
			{label}
		</NavLink>
	);
}
