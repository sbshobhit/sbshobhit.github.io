import ArchitectureCase from "./ArchitectureCase";

export default function ArchitecturePage() {
	return (
		<div className="p-8 space-y-12">
			<ArchitectureCase
				title=""
				subtitle=""
				impact=""
				tags={[""]}
				sections={[
					{
						heading: "Context",
						content: "",
					},
					{
						heading: "Constraints",
						content: "",
					},
					{
						heading: "Architecture",
						content: "",
					},
					{
						heading: "Impact",
						content: "",
					},
				]}
			/>
		</div>
	);
}
