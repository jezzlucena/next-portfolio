import Image from 'next/image'
import { PortfolioProject } from "../project";
import GridProject from "../components/GridProject";
import { useEffect, useState } from 'react';
import ProjectModal from '../components/ProjectModal';

export default function Portfolio() {
    const [projects, setProjects] = useState<PortfolioProject[]>();

    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const projects = await response.json();
      setProjects(projects);
    };

    useEffect(() => {
        if (!projects)
            fetchProjects();
    });

    const [selectedProject, setSelectedProject] = useState<PortfolioProject>();

    return (<>
            <div className="absolute bg-slate-100/80 w-full text-center uppercase text-black py-4 mt-28">
                <div className="text-2xl">Jezz Lucena</div>
                <div className="text-l">Full Stack Engineer</div>
            </div>
        
            <div className="mt-6 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/img/common/logo.png"
                    alt="Logo"
                    width={280}
                    height={280}
                    priority
                />
            </div>
        
            <div className="mt-24 mb-32 grid text-center md:text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 md:grid-cols-2 lg:text-left">
                {projects ? projects.map(project => {
                        return (
                            <GridProject
                                project={project}
                                key={project.key}
                                onClick={() => setSelectedProject(project)}
                            />
                        );
                    }
                ) : (
                    <>
                        <GridProject />
                        <GridProject />
                        <GridProject />
                    </>
                )}
            </div>
            
            {selectedProject ? 
                <ProjectModal
                    project={selectedProject} 
                    onClose={() => setSelectedProject(undefined)}
                />
                : null
            }
        </>
    )
}