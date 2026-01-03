"use client";

import TsParticles from "../clientcomponents/TsParticles";

export default function WTR() {
	const factCards = [
		{
			title: "Role",
			value: "Customer Experience Analyst Co-op",
		},
		{
			title: "Duration",
			value: "4-months (Fall 2025)",
		},
		{
			title: "Mission",
			value: "Support for customer care teams",
		},
		{
			title: "Focus",
			value: "Microsoft Power Platform",
		},
	];

	const sections = [
		{
			heading: "Introduction",
			paragraphs: [
				"My Fall 2025 co-op work term was spent at Stryker, one of the world’s leading medical technology companies. I worked as a Customer Experience Analyst Co-op, a role focused on supporting Customer Service Teams by creating technical solutions that improved workflows and reduced day-to-day friction. This report serves as an overview of my four-month work term experience, the projects I contributed to, and the skills I developed during my time at Stryker.",
			],
		},
		{
			heading: "Goals",
			paragraphs: [
				"At the beginning of this work term, my primary goal was to apply my academic knowledge in a way that created real value for the company. I aimed to be a reliable and proactive team member while building meaningful professional relationships that would support my long-term career growth.",
				"Throughout the term, I worked on several projects and internal solutions, most of which centered around Microsoft Power Platform. These solutions were designed as quality-of-life improvements for Customer Service Teams, allowing them to spend less time navigating tools and more time focusing on customers.",
				"The Customer Experience Team’s broader goal was to provide tools and support that addressed the challenges faced by Customer Service Team members. In alignment with this, my goal was to learn as much as possible from my team and supervisors while contributing solutions that made a tangible impact.",
				"One challenge I was particularly aware of was the gap between theoretical knowledge and practical application. I aimed to reduce this gap by adapting my problem-solving skills to real-world constraints, improvising when necessary, and delivering solutions that were both functional and easy to use.",
				"I intentionally focused on learning tools that are widely used in corporate environments rather than technologies that only look impressive on a résumé. Microsoft Power Platform stood out due to its prevalence in enterprise environments and its flexibility across a wide range of use cases.",
				"From a technical standpoint, I developed skills in Power Apps, Power Automate, and Power BI. I was surprised by how many meaningful improvements could be achieved simply by replacing manual spreadsheets with automated workflows and user-friendly applications. On the soft skills side, I learned how to listen carefully to user concerns, ask the right questions, and remain patient when addressing issues.",
				"A key lesson I learned was how to refine solutions through iteration. Many ideas worked well in theory but required adjustments to be practical for daily use. By gathering user feedback and continuously improving my work, I learned how to accept criticism constructively and prioritize the user experience over technical elegance.",
				"Looking back on my initial goals, I believe I was successful. I built a strong, respectful relationship with my manager, delivered projects that were well received by users, and gained experience across the entire project lifecycle—from ideation and prototyping to testing, demonstrations, revisions, and final rollout.",
			],
		},
		{
			heading: "Job Experience",
			paragraphs: [
				"As a Customer Experience Analyst Co-op, my primary responsibility was to design and implement technical solutions that reduced friction for Customer Service Teams and enabled them to focus on delivering high-quality customer care.",
				"One of the main projects I led involved modernizing a manual Excel-based process used by both Customer Service Representatives and Supply Planners. The spreadsheet acted as a shared workspace for tracking inquiries, but it suffered from performance issues, version conflicts, and poor readability due to simultaneous access by multiple users.",
				"My solution was to replace this process with a Power App connected to a SharePoint backend. The application provided a centralized and role-based interface where Customer Service Representatives could create inquiries, Supply Planners could update records, and automated notifications kept both parties informed. This significantly improved reliability, performance, and usability compared to the original spreadsheet.",
				"Another project I worked on was an automated reminder flow that sent weekly emails containing tables of pending billing orders to Sales Representatives, Managers, and BUDs. Each group received reminders based on how long records had remained open, improving transparency, accountability, and follow-through across teams.",
				"The technologies used during my work term were largely new to me and not directly taught in my academic courses. While my programming background helped with problem-solving, most of what I learned came from hands-on experimentation, testing, and adapting to real business requirements.",
				"The most rewarding aspect of this role was seeing how even small automations could have a meaningful impact on users. This was my first experience where my work directly affected how people did their jobs on a daily basis, and it reinforced my interest in building practical, user-focused solutions.",
			],
		},
		{
			heading: "Conclusion",
			paragraphs: [
				"Overall, my co-op work term at Stryker was an extremely valuable and rewarding experience. I developed both technical and interpersonal skills, contributed solutions that addressed real business challenges, and gained a deeper understanding of how technology is applied in a corporate environment. This experience strengthened my interest in pursuing a career in development and gave me confidence in my ability to adapt, learn quickly, and make a meaningful impact in future professional roles.",
			],
		},
	];

	return (
		<section
			id="wtr"
			className="relative overflow-hidden bg-secondaryBackground text-slate-50 px-6 md:px-12 2xl:px-32 py-16 md:py-24 min-h-screen"
		>
			<TsParticles />

			<div className="max-w-6xl mx-auto flex flex-col gap-4">
				<p className="text-sm uppercase tracking-[0.2em] text-orange-200">
					Co-op Work Term Report
				</p>
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-orange-50">
					Stryker — Customer Experience Analyst Co-op
				</h1>
			</div>

			<div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-12">
				{factCards.map((item) => (
					<div
						key={item.title}
						className="rounded-2xl border border-orange-200/20 bg-orange-50/5 px-5 py-6 backdrop-blur"
					>
						<p className="text-xs uppercase tracking-[0.18em] text-orange-200 mb-2">
							{item.title}
						</p>
						<h3 className="text-xl font-semibold text-orange-100 leading-snug">
							{item.value}
						</h3>
					</div>
				))}
			</div>

			<div className="max-w-6xl mx-auto mt-12 space-y-8">
				{sections.map((section) => (
					<div
						key={section.heading}
						className="rounded-2xl border border-slate-800 bg-slate-900 px-6 md:px-8 py-8 shadow-lg shadow-black/30"
					>
						<h2 className="text-base md:text-lg font-semibold uppercase tracking-[0.18em] leading-tight text-orange-200">
							{section.heading}
						</h2>
						<div className="mt-4 space-y-4">
							{section.paragraphs.map((text, idx) => (
								<p
									key={idx}
									className="text-sm md:text-base text-slate-200 leading-relaxed"
								>
									{text}
								</p>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
