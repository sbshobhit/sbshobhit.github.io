import LogCard from "./LogCard";

const API_ENDPOINT = "https://dev.to/api/articles?username=ticatwolves";
const logs = [
	{
		type_of: "article",
		id: 2929512,
		title: "Understanding Django, Gunicorn, and Database Connections",
		description:
			"Today, I was investigating an error that drew my attention to Gunicorn workers and Django database...",
		readable_publish_date: "Oct 16 '25",
		slug: "understanding-django-gunicorn-and-database-connections-5g50",
		path: "/ticatwolves/understanding-django-gunicorn-and-database-connections-5g50",
		url: "https://dev.to/ticatwolves/understanding-django-gunicorn-and-database-connections-5g50",
		comments_count: 0,
		public_reactions_count: 1,
		collection_id: null,
		published_timestamp: "2025-10-16T10:29:31Z",
		language: "en",
		subforem_id: 1,
		positive_reactions_count: 1,
		cover_image:
			"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6v3fzcho3j8jttc24b47.png",
		social_image:
			"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6v3fzcho3j8jttc24b47.png",
		canonical_url:
			"https://dev.to/ticatwolves/understanding-django-gunicorn-and-database-connections-5g50",
		created_at: "2025-10-16T08:18:46Z",
		edited_at: "2025-10-16T10:36:18Z",
		crossposted_at: null,
		published_at: "2025-10-16T10:29:31Z",
		last_comment_at: "2025-10-16T10:29:31Z",
		reading_time_minutes: 3,
		tag_list: ["architecture", "django", "database", "performance"],
		tags: "architecture, django, database, performance",
		user: {
			name: "Ticat Wolves",
			username: "ticatwolves",
			twitter_username: null,
			github_username: "ticatwolves",
			user_id: 3524249,
			website_url: null,
			profile_image:
				"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
			profile_image_90:
				"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
		},
	},
	{
		type_of: "article",
		id: 2884984,
		title:
			"Automate Your Go Project: Best Practices & CI/CD with GitHub Actions",
		description:
			"You've built something cool in Go (Golang) — maybe a library, a CLI tool, or an API. Now you want to...",
		readable_publish_date: "Oct 5 '25",
		slug: "automate-your-go-project-best-practices-cicd-with-github-actions-4bo4",
		path: "/ticatwolves/automate-your-go-project-best-practices-cicd-with-github-actions-4bo4",
		url: "https://dev.to/ticatwolves/automate-your-go-project-best-practices-cicd-with-github-actions-4bo4",
		comments_count: 0,
		public_reactions_count: 0,
		collection_id: null,
		published_timestamp: "2025-10-05T14:42:12Z",
		language: "en",
		subforem_id: 1,
		positive_reactions_count: 0,
		cover_image: null,
		social_image:
			"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F55id1mo6o2radls6zrug.png",
		canonical_url:
			"https://dev.to/ticatwolves/automate-your-go-project-best-practices-cicd-with-github-actions-4bo4",
		created_at: "2025-10-02T11:21:34Z",
		edited_at: null,
		crossposted_at: null,
		published_at: "2025-10-05T14:42:12Z",
		last_comment_at: "2025-10-05T14:42:12Z",
		reading_time_minutes: 5,
		tag_list: ["cicd", "go", "githubactions", "programming"],
		tags: "cicd, go, githubactions, programming",
		user: {
			name: "Ticat Wolves",
			username: "ticatwolves",
			twitter_username: null,
			github_username: "ticatwolves",
			user_id: 3524249,
			website_url: null,
			profile_image:
				"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
			profile_image_90:
				"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
		},
	},
	{
		type_of: "article",
		id: 2884306,
		title: "Building, Testing, and Publishing Go Packages - Best Practices",
		description:
			"In my previous article, we created a self-deployable Go-based URL Shortener Service and deployed it...",
		readable_publish_date: "Oct 2 '25",
		slug: "building-testing-and-publishing-go-packages-best-practices-8k",
		path: "/ticatwolves/building-testing-and-publishing-go-packages-best-practices-8k",
		url: "https://dev.to/ticatwolves/building-testing-and-publishing-go-packages-best-practices-8k",
		comments_count: 0,
		public_reactions_count: 0,
		collection_id: 33531,
		published_timestamp: "2025-10-02T06:48:15Z",
		language: "en",
		subforem_id: 1,
		positive_reactions_count: 0,
		cover_image: null,
		social_image:
			"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnu234gpzb8adokibmnmt.png",
		canonical_url:
			"https://dev.to/ticatwolves/building-testing-and-publishing-go-packages-best-practices-8k",
		created_at: "2025-10-02T05:55:51Z",
		edited_at: "2025-10-02T11:13:45Z",
		crossposted_at: null,
		published_at: "2025-10-02T06:48:15Z",
		last_comment_at: "2025-10-02T06:48:15Z",
		reading_time_minutes: 2,
		tag_list: ["go", "packaging", "programming"],
		tags: "go, packaging, programming",
		user: {
			name: "Ticat Wolves",
			username: "ticatwolves",
			twitter_username: null,
			github_username: "ticatwolves",
			user_id: 3524249,
			website_url: null,
			profile_image:
				"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
			profile_image_90:
				"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
		},
	},
	{
		type_of: "article",
		id: 2874576,
		title: "Shorten URL Service with Go and AWS SAM",
		description:
			"In my previous article I explained how to structure a Golang project for better readability and...",
		readable_publish_date: "Sep 28 '25",
		slug: "shorten-url-service-with-go-and-aws-sam-24gn",
		path: "/ticatwolves/shorten-url-service-with-go-and-aws-sam-24gn",
		url: "https://dev.to/ticatwolves/shorten-url-service-with-go-and-aws-sam-24gn",
		comments_count: 0,
		public_reactions_count: 0,
		collection_id: 33531,
		published_timestamp: "2025-09-28T14:13:48Z",
		language: "en",
		subforem_id: 1,
		positive_reactions_count: 0,
		cover_image: null,
		social_image:
			"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnz3t4cxsitm44e5emmzk.png",
		canonical_url:
			"https://dev.to/ticatwolves/shorten-url-service-with-go-and-aws-sam-24gn",
		created_at: "2025-09-28T13:25:41Z",
		edited_at: "2025-09-28T14:29:12Z",
		crossposted_at: null,
		published_at: "2025-09-28T14:13:48Z",
		last_comment_at: "2025-09-28T14:13:48Z",
		reading_time_minutes: 2,
		tag_list: ["programming", "serverless", "go", "sam"],
		tags: "programming, serverless, go, sam",
		user: {
			name: "Ticat Wolves",
			username: "ticatwolves",
			twitter_username: null,
			github_username: "ticatwolves",
			user_id: 3524249,
			website_url: null,
			profile_image:
				"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
			profile_image_90:
				"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
		},
	},
	{
		type_of: "article",
		id: 2863464,
		title: "GoLang Project Template",
		description:
			"Starting a journey with a new programming language is always challenging — and I've been there...",
		readable_publish_date: "Sep 23 '25",
		slug: "golang-project-template-4iib",
		path: "/ticatwolves/golang-project-template-4iib",
		url: "https://dev.to/ticatwolves/golang-project-template-4iib",
		comments_count: 0,
		public_reactions_count: 0,
		collection_id: 33531,
		published_timestamp: "2025-09-23T14:02:12Z",
		language: "en",
		subforem_id: 1,
		positive_reactions_count: 0,
		cover_image: null,
		social_image:
			"https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flto53qvv7stny41vap27.png",
		canonical_url: "https://dev.to/ticatwolves/golang-project-template-4iib",
		created_at: "2025-09-23T13:18:04Z",
		edited_at: "2025-09-24T11:11:21Z",
		crossposted_at: null,
		published_at: "2025-09-23T14:02:12Z",
		last_comment_at: "2025-09-23T14:02:12Z",
		reading_time_minutes: 2,
		tag_list: ["go", "programming", "tutorial", "backend"],
		tags: "go, programming, tutorial, backend",
		user: {
			name: "Ticat Wolves",
			username: "ticatwolves",
			twitter_username: null,
			github_username: "ticatwolves",
			user_id: 3524249,
			website_url: null,
			profile_image:
				"https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
			profile_image_90:
				"https://media2.dev.to/dynamic/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F3524249%2Fff26cfa5-e573-454f-adef-c254baeeb5a2.jpg",
		},
	},
];

export default function BlogPage() {
	return (
		<div className="console">
			<div className="p-8 space-y-8">
				<div className="space-y-4">
					{logs.map((log) => (
						<LogCard key={log.id} item={log} />
					))}
				</div>
			</div>
		</div>
	);
}
