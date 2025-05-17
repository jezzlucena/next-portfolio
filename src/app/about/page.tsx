'use client'

import { useState } from "react"
import styles from "./About.module.scss"
import Link from "next/link";
import { PROFILE_KEYWORDS } from "../utils/constants";
import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import Keywords from "../components/Keywords/Keywords";
import Testimonial from "../components/Testimonial/Testimonial";

/**
 * Page that displays details about Jezz's career, including testimonials from former
 * coworkers and academic partners
 */
export default function About() {
  const [isTextCollapsed, setTextCollapsed] = useState(true);

  return (
    <div className={`${styles.content} relative bg-white`}>
      <div className={`${styles.anchor} absolute -top-[60px]`} id="content"></div>
        <div className="w-[100%] mx-auto py-[30px] px-[20px] md:px-[30px] lg:px-[50px]">
          <div className={`${styles.aboutContainer}`}>
            <div className={`${styles.description}`}>
              <Link className={`${styles.profilePicture}`} target="_blank" href="http://linkedin.com/in/jezzlucena" />
              <Link target="_blank" href="http://linkedin.com/in/jezzlucena">
                <div className={`${styles.profileName}`}>Jezz Lucena</div>
                <div className={`${styles.profileTitle}`}>Full Stack Engineer</div>
              </Link>
              
              <Keywords label="Keywords" keywords={PROFILE_KEYWORDS} />
            </div>
          </div>
          <div className={`${styles.textContainer} relative ${isTextCollapsed ? styles.collapsed : "" }`}>
            <p className={styles.paragraph}>Building magical end-user experiences is my true passion. I actively seek out new technologies, and stay up-to-date on the industry&apos;s most recent frameworks, languages and trends.</p>
            <p className={styles.paragraph}>With a Bachelor’s degree in Computer Engineering and a Master’s degree in Interactive Media & Game Development, continued education has allowed me to stay ahead of the curve and deliver exceptional work to each employer I’ve worked for - both full-time and contract.</p>
            <p className={styles.paragraph}>My technical expertise includes cross-platform proficiency (Mac OS, Unix, Linux and Windows); experience with 13 scripting/programming languages (including ES6, CSS3, HTML5, Phoenix/Elixir and PostgreSQL); and advanced knowledge of developer applications, tools, methodologies and best practices (including OOD, client/server architecture and self-test automation).</p>

            <div className={`${styles.readMoreContainer}`}>
              <Button
                className={ styles.button }
                onClick={() => setTextCollapsed(!isTextCollapsed)}
              >{isTextCollapsed ? "Read More" : "Collapse"}</Button>
            </div>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>

        <div className={ styles.testimonials }>
          <Heading>Testimonials</Heading>

          <div className={styles.container}>
            <Testimonial
              href="https://www.linkedin.com/in/chrisebennett/"
              author="Chris Bennet"
              role="CEO at Wonderschool, Inc."
              connection="Chris was senior to Jezz at Wonderschool"
            >
              <p className={styles.paragraph}>Working with Jezz was a pleasure. His creative, detail oriented approach was very valuable in the product creation process at Wonderschool. I found it rare and rewarding to work with engineer who could think about the full stack of development while also empathizing with the customers needs.</p>
            </Testimonial>

            <Testimonial
              href="https://www.linkedin.com/in/klewstill/"
              author="Klew Still"
              role="UX Designer at Finalize, Inc."
              connection="Jezz and Klew were grad students together at Worcester Polytechnic Institute"
            >
              <p className={styles.paragraph}>Jezz and I studied together at Worcester Polytechnic Institute for our MS in Interactive Media and Game Development where we worked together on projects.</p>
              <p className={styles.paragraph}>Jezz is a phenomenal worker and a phenomenal personality to work with. He has a broad base of talents, particularly engineering, writing, design, and criticism, and is a truly deep thinker who is easy to collaborate on and passionate about positivity, authenticity, and morality in the work place.</p>
              <p className={styles.paragraph}>The best thing about Jezz as a worker is that he has true, raw talent that he&apos;s honed with practice and that he is deeply focused on making positive changes in his community and his industry with that talent and practice. He seeks to learn about others, to understand the theory behind his work, and to act beyond himself. This reflects WPI&apos;s motto, &quot;Theory and Practice&quot; which Jezz has truly exemplified in his academic and personal projects.</p>
            </Testimonial>


            <Testimonial
              href="https://www.linkedin.com/in/chaima-jemmali-732a7655/"
              author="Chaima Jemmali"
              role="PhD Researcher at Northeastern University"
              connection="Jezz and Chaima were grad students together at Worcester Polytechnic Institute"
            >
              <p className={styles.paragraph}>Jezz is not only an excellent programmer with technical skills covering multiple languages, platforms and engines, he is also a creative thinker and designer always looking for new ideas and projects. As an active learner, he is continuously taking on new challenges to harness his skills and acquire new ones.</p>
            </Testimonial>
          </div>
      </div>
    </div>
  );
}
