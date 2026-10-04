const experience = [
	{
		company: 'Bank of America',
		location: 'Mumbai, MH',
		dates: '2019 – Present',
		roles: [
			{
				title: 'Software Engineer — Trade Surveillance, DQD, GM Supervisory',
				dates: 'Jun 2024 – Present',
				achievements: [
					'Enhanced and maintained a rule engine for data quality and market surveillance checks, detecting spoofing, ramping, frontrunning, and other forms of market misconduct across 100+ trading venues, involving large-scale data normalization.',
					'Built and delivered end-to-end surveillance rules for SOFR/SORA benchmark manipulation, FX fixing front-running, FX price ramping, and abusive squeezes under Market Abuse Regulation (MAR), translating Business Requirement Documents (BRDs) from Business Control Officers (BCOs) into production rule logic and reports.',
					'Reduced false-positive alert rates from 50–60% to 5–10% through iterative rule tuning and improved data quality logic, significantly cutting manual review workload for the compliance team.',
					'Built and maintained the API layer exporting venue orders and trades data to TradingHub for third-party trade surveillance and regulatory reporting.',
					'Led migration of orders and trades data from Sandra (NoSQL) to MongoDB, improving data accessibility and system scalability.',
				],
			},
			{
				title: 'Software Engineer — Chatbot Optimus',
				dates: '2023 – 2024',
				achievements: [
					'Contributed to an intent-based AI chatbot built with Python, Rasa NLP, and React, improving automated user query handling.',
					'Developed and enhanced backend RESTful APIs using the Tornado framework, improving service reliability and response handling.',
					'Improved NLP model accuracy by refining and expanding Rasa training intents.',
				],
			},
			{
				title: 'Software Engineer — Trade Capture, FICC EM',
				dates: '2019 – 2024',
				achievements: [
					'Delivered end-to-end software solutions for Raiden, an LCT trade capture application developed in Python using the Quartz framework, supporting FX currency funding, swaps, and bond trade blotting.',
					'Designed and built core components of the LCT currency funding process, contributing to system design and application development across the trade lifecycle.',
					'Built and maintained the trade delivery and integration system routing trades to Bloomberg, Sierra, and MarkitWire, ensuring data accuracy and operational stability.',
				],
			},
		],
	},
	{
		company: 'Trimax IT Solutions and Infrastructures Ltd',
		location: 'Bangalore, KT',
		dates: 'Jun – Jul 2018',
		roles: [
			{
				title: 'Software Engineering Intern',
				achievements: [
					'Developed a Customer Feedback System using Core Java and Java Web Services, applying object-oriented design principles.',
				],
			},
		],
	},
	{
		company: 'Goa Angels Accelerators',
		location: 'Verna, GA',
		dates: 'Jun – Jul 2017',
		roles: [
			{
				title: 'Backend Developer Intern',
				achievements: [
					'Built backend functionality for “Bid in Goa,” a web platform, using PHP, JavaScript, and AJAX for dynamic client-server interaction.',
				],
			},
		],
	},
];

export default function Experience() {
	return (
		<div className="flex flex-col gap-6 w-full">
			<h2 className="text-2xl font-bold text-ivory font-mono">/ experience</h2>
			<div className="flex flex-col">
				{experience.map((position) => (
					<article key={position.company} className="relative ml-1 border-l border-teal-border pb-10 pl-6 last:pb-0">
						<span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-mint-bright ring-4 ring-teal-page" />
						<header className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className="text-xl font-semibold text-ivory">{position.company}</h3>
							<p className="font-mono text-sm text-ivory/75 sm:text-right">
								{position.location} <span className="px-1">|</span> {position.dates}
							</p>
						</header>
						<div className="flex flex-col gap-6">
							{position.roles.map((role) => (
								<section key={role.title} className="border-t border-teal-border/70 pt-5 first:border-t-0 first:pt-0">
									<div className="mb-3 flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between">
										<h4 className="font-semibold text-ivory">{role.title}</h4>
										{role.dates && <p className="font-mono text-sm text-ivory/75 lg:shrink-0">{role.dates}</p>}
									</div>
									<ul className="list-disc space-y-2 pl-5 leading-relaxed text-ivory marker:text-mint-bright">
										{role.achievements.map((achievement) => (
											<li key={achievement}>{achievement}</li>
										))}
									</ul>
								</section>
							))}
						</div>
					</article>
				))}
			</div>
		</div>
	);
}
