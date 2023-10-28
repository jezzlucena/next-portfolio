export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (<>
        <div className="w-full mt-6 border-t-2">
            <div className="text-center mt-6">
                <a className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3 mx-2" target="_blank" href="https://linkedin.com/in/jezzlucena">View LinkedIn</a>
                <a className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3 mx-2" target="_blank" href="/resource/JezzLucenaResume2023.pdf">View Resumé</a>
                <br/>
                <br/>
                <a className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3 mx-2" href="mailto:jezzlucena@gmail.com">Email Me (jezzlucena@gmail.com)</a>
                <br/>
                <br/>
            </div>
        </div>
        <div className="disclaimer">{`Creative Commons Attribution-ShareAlike License ${year}. `}<a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/2.0/">Some Rights Reserved</a>.</div>
    </>);
}