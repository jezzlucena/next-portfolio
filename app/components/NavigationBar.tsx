import { PageType } from "../page";

export type NavigationBarProps = {
    selectedPage: PageType;
    onSelectPage: (page: PageType) => void;
};

export default function NavigationBar(props: NavigationBarProps) {
    const { selectedPage } = props;

    return (
        <div className="bg-white top-0 left-0 fixed w-full text-right px-24 py-5 border border-gray-700 border-x-transparent">
            <a className="px-4 underline cursor-pointer" style={{ textDecoration: selectedPage === 'about' ? 'underline' : 'inherit' }} onClick={() => props.onSelectPage("about")}>About Me</a>
            <a className="px-4 underline cursor-pointer" style={{ textDecoration: selectedPage === 'portfolio' ? 'underline' : 'inherit' }} onClick={() => props.onSelectPage("portfolio")}>Portfolio</a>
            <a className="px-4 underline cursor-pointer" style={{ textDecoration: 'inherit' }} href="/resource/JezzLucenaResume2023.pdf" target="_blank">Resumé</a>
        </div>
    )
}