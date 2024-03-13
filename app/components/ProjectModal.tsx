import Image from 'next/image'
import { PortfolioProject } from '../project';

export type ProjectModalProps = {
    size?: 'small' | 'large';
    project: PortfolioProject;
    onClose: () => void;
}

export default function ProjectModal(props: ProjectModalProps) {
    const project = props.project;
    const size = props.size || 'large';
    
    return <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            {project.name}
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={props.onClose}
                        >
                            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                        {project.thumbVideoUrl ? 
                            <video autoPlay loop muted className={`bg-slate-500 ${size === 'large' ? "w-8/12" : "w-4/12"} m-auto`}>
                                <source src={project.thumbVideoUrl} />
                            </video>
                        : <Image
                            className="m-auto mb-4 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src={project.thumbImgUrl}
                            alt="Logo"
                            height={380}
                            width={380}
                            priority
                        />
                        }
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            {project.description}
                        </p>

                        <span className="leading-10 text-xs">
                            <span className="label">Stack: </span>
                            {project.stack.map(techName => {
                                return <><span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">{techName}</span><span>, </span></>
                            })}
                            <span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">JavaScript</span><span>, </span>
                        </span>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        {project.videoLinkUrl && (
                            <a href={project.videoLinkUrl} target="_blank">
                                <button
                                    className="active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    View Video
                                </button>
                            </a>
                        )}  
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank">
                                <button
                                    className="active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    View on GitHub
                                </button>
                            </a>
                        )}
                        {project.behanceUrl && (
                            <a href={project.behanceUrl} target="_blank">
                                <button
                                    className="active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    View on Behance
                                </button>
                            </a>
                        )}
                        <a href={project.liveUrl} target="_blank">
                            <button
                                className={`${project.liveUrl ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-white cursor-not-allowed'} active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                type="button"
                            >
                                Live Demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
}