import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: 's6280wn5',
	dataset: 'production',
	title: "My first next project",
	apiVersion: "2023-03-04",
	basePath: "/admin",
	plugins: [deskTool()],
	schema: {types: schemas}
});

export default config;
