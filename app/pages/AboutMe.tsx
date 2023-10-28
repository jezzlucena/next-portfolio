import Image from 'next/image'

export default function AboutMe() {
    return (<>
        <div className="mt-1 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/img/common/memoji.png"
                alt="Jezz's Memoji"
                width={280}
                height={280}
                priority
            />
        </div>

        <div className="content">
			<div id="about" className="section about">
				<div className="textContainer">
					<div className="description">
						<a className="profilePicture Jezz" target="_blank" href="http://linkedin.com/in/jezzlucena"></a>
						
                        <h2 className="text-2xl text-bold text-center">Jezz Lucena</h2>
						<h4 className="text-xl text-bold text-center mb-10">Full Stack Software Engineer</h4>
						
                        <span className="leading-10 text-xs">
							<span className="label">Keywords: </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">JavaScript</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">ReactJS</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">Tailwind CSS</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">NextJS</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">NuxtJS</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">HTML 5</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">CSS 3</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">Ruby on Rails</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">Redux</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">Agile Software Engineering</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">UX/UI Design</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">REST APIs</span><span>, </span>
							<span className="whitespace-nowrap bg-white border border-gray-700 py-2 px-3">i18n</span>
						</span>
						<div className="mt-5 text-center">
							<a 
								href="/resource/JezzLucenaResume2023.pdf"
								target="_blank"
								className="text-lg px-20 py-4 hover:border-gray-700 hover:bg-gray-100 whitespace-nowrap bg-white border border-gray-500 py-2 px-3 leading-10"
							>
								View Resumé
							</a>
						</div>
					</div>
				</div>
                <p className="pt-10 indent-10">Building magical end-user experiences is my true passion. I actively seek out new technologies, and stay up-to-date on the industry's most recent frameworks, languages and trends.</p>
				<details className="pb-10">
					<p className="indent-10">With a Bachelor’s degree in Computer Engineering and a Master’s degree in Interactive Media & Game Development, continued education has allowed me to stay ahead of the curve and deliver exceptional work to each employer I’ve worked for - both full-time and contract.</p>
					<p className="indent-10">My technical expertise includes cross-platform proficiency (Mac OS, Unix, Linux and Windows); expertise in 13 scripting/programming languages (including ES6, CSS3, HTML5, Phoenix/Elixir and PostgreSQL); and advanced knowledge of developer applications, tools, methodologies and best practices (including OOD, client/server architecture and self-test automation).</p>
				</details>
			</div>

			<div className="section testimonials">
				<h2 className="text-2xl text-center">Testimonials</h2>

				<div className="testimonialsContainer">
					<div className="bg-white border border-gray-700 py-6 px-4 bg-white border border-gray-700 my-5">
						<div className="quote">
							<p>"Working with Jezz was a pleasure. His creative, detail oriented approach was very valuable in the product creation process at Wonderschool. I found it rare and rewarding to work with engineer who could think about the full stack of development while also empathizing with the customers needs."</p>
						</div>
                        <div className="mt-10 w-full text-right">
                            <a href="https://www.linkedin.com/in/chrisebennett/" target="_blank">
                                <div className="author">Chris Bennet</div>
                                <div className="role">CEO at Wonderschool, Inc.</div>
                            </a>
						    <div className="connection">Chris was senior to Jezz at Wonderschool</div>
                        </div>
					</div>

					<div className="bg-white border border-gray-700 py-6 px-4 bg-white border border-gray-700 my-5">
						<div className="quote">
							<p>"Jezz and I studied together at Worcester Polytechnic Institute for our MS in Interactive Media and Game Development where we worked together on projects. Jezz is a phenomenal worker and a phenomenal personality to work with. He has a broad base of talents, particularly engineering, writing, design, and criticism, and is a truly deep thinker who is easy to collaborate on and passionate about positivity, authenticity, and morality in the work place.</p>
							<p>The best thing about Jezz as a worker is that he has true, raw talent that he's honed with practice and that he is deeply focused on making positive changes in his community and his industry with that talent and practice. He seeks to learn about others, to understand the theory behind his work, and to act beyond himself. This reflects WPI's motto, "Theory and Practice" which Jezz has truly exemplified in his academic and personal projects."</p>
						</div>
                        <div className="w-full text-right">
                            <a href="https://www.linkedin.com/in/klewwilliams/" target="_blank">
                                <div className="author">Klew Williams</div>
                                <div className="role">UX Designer at Finalize, Inc.</div>
                            </a>
                            <div className="connection">Jezz and Klew were grad students together at Worcester Polytechnic Institute</div>
					    </div>
					</div>

					<div className="bg-white border border-gray-700 py-6 px-4 bg-white border border-gray-700 my-5">
						<div className="quote">
							<p>"Jezz is not only an excellent programmer with technical skills covering multiple languages, platforms and engines, he is also a creative thinker and designer always looking for new ideas and projects. As an active learner, he is continuously taking on new challenges to harness his skills and acquire new ones."</p>
						</div>
                        <div className="w-full text-right">
                            <a href="https://www.linkedin.com/in/chaima-jemmali-732a7655/" target="_blank">
                                <div className="author">Chaima Jemmali</div>
                                <div className="role">PhD Researcher at Northeastern University</div>
                            </a>
                            <div className="connection">Jezz and Chaima were grad students together at Worcester Polytechnic Institute</div>
					    </div>
					</div>
				</div>
            </div>
        </div>
    </>);
}