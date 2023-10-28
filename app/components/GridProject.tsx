import Image from 'next/image'

import { PortfolioProject } from '../project';

export type GridItemProps = {
    project?: PortfolioProject
    onClick?: () => void;
}

export default function GridProject(props: GridItemProps) {
    const project = props.project;

    return <div
        className="relative mb-3 mr-3 cursor-pointer group border border-gray-300 px-5 py-4 transition-colors hover:border-gray-700 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        onClick={props.onClick}
    >
        {project && <>
                <h2 className={`mb-3 text-xl font-semibold`}>
                    {`${project.name} `}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <div className="justify-items-center text-center">
                    <Image
                        className="m-auto mb-4 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src={project.thumbImgUrl}
                        alt="Logo"
                        height={180}
                        width={180}
                        priority
                    />
                </div>
                <p className={`m-0 text-sm opacity-50`}>
                    {project.description}
                </p>
            </>
        }
    </div>
}