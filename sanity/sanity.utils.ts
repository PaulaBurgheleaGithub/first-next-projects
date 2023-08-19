import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
	const client = createClient({
		projectId: 's6280wn5',
		dataset: 'production',
		apiVersion: "2023-03-04"
	});

	return client.fetch(
		groq `*[_type == "project"]{
			_id,
			_createdAt,
			name,
			"slug":slug.current,
			"image": image.asset->url,
			url,
			content
		}`
	)
}
