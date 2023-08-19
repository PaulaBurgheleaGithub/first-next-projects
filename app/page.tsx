import { getProjects } from "@/sanity/sanity.utils";

export default async function Home() {
  //option 1
  // const projects = await getProjects();
  //option 2
  const projects = await getProjects();
  return (
    <main className="max-w-5xl mx-auto py-20">
      <header>
        <h1 className="text-7x1 font-extrabold">Hello I&apos;m{" "}
          <span className="bg-gradient-to-r from-slate-950 to-slate-400 bg-clip-text text-transparent">Paula</span>!
        </h1>
      </header>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </main>
  )
}

