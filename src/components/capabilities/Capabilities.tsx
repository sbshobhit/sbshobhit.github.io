import CapabilitySection from "./CapabilitySection";

export default function SkillsPage() {
	return (
		<div className="console">
			
		<div className="p-8 space-y-10">
			<CapabilitySection
				title="Architecture & Backend Systems"
				items={[
					"Python, Django, DRF",
					"Clean Architecture & Platform Design",
					"Microservices & Event-Driven Systems",
					"Multi-Tenant SaaS & RBAC",
				]}
			/>

			<CapabilitySection
				title="Cloud & Infrastructure"
				items={[
					"AWS (ECS, S3, CloudFront, Kinesis, Glue, Athena)",
					"Terraform & Infrastructure as Code",
					"Cost Optimization & Scalability",
				]}
			/>

			<CapabilitySection
				title="Data, Streaming & Real-Time"
				items={[
					"PostgreSQL, MongoDB",
					"WebSockets at scale",
					"Kinesis Streams & Pipelines",
				]}
			/>

			<CapabilitySection
				title="Quality, Security & Compliance"
				items={[
					"CI/CD Architecture & Optimization",
					"Static Analysis & Testing (90%+ coverage)",
					"RBAC, SOC 2, Secure System Design",
				]}
			/>

			<CapabilitySection
				title="Leadership & Org Impact"
				items={[
					"Architecture Ownership",
					"R&D Leadership",
					"Mentorship & Technical Strategy",
				]}
			/>
		</div>
				</div>

	);
}
