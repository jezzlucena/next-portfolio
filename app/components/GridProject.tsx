import { PortfolioProject } from '../project';

export type GridItemProps = {
    project: PortfolioProject
    onClick: () => void;
}

export default function GridProject(props: GridItemProps) {
    const project = props.project;

    return <div
        className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        onClick={props.onClick}
    >
        <h2 className={`mb-3 text-xl font-semibold`}>
        {`${project.name} `}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
        </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {project.description}
        </p>
    </div>
}