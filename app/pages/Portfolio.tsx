import Image from 'next/image'
import { PortfolioProject } from "../project";
import GridProject from "../components/GridProject";
import { useEffect, useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import LogoSvgComponent from '../components/Logo';
import $ from 'jquery';

export default function Portfolio() {
    const [projects, setProjects] = useState<PortfolioProject[]>();
    const [selectedProject, setSelectedProject] = useState<PortfolioProject>();

    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const projects = await response.json();
      setProjects(projects);
    };

    const Main: { computedColors: string[] } = {
        computedColors: []
    };
    
    const SHIMMER_WAVE_1 = "SHIMMER_WAVE_1";
    const SHIMMER_WAVE_2 = "SHIMMER_WAVE_2";
    const SHIMMER_WAVE_CHAOS = "SHIMMER_WAVE_CHAOS";
    const SHIMMER_RAINBOW_1 = "SHIMMER_RAINBOW_1";
    const SHIMMER_RAINBOW_2 = "SHIMMER_RAINBOW_2";
    
    const MAX_COMPUTED_COLORS = 474;
    var GLOBAL_COLOR_INDEX = 0;
    
    for(let i = 0; i < MAX_COMPUTED_COLORS; i++) {
        Main.computedColors.push(getRandomColor());
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var colorString = '#';
        
        for (var i = 0; i < 6; i++) {
            colorString += letters[Math.floor(Math.random() * 16)];
        }
        
        var randZero = Math.random();
        const color = Array.from(colorString);
        
        if (randZero < 0.33) {
            color[0] = '0'
            color[1] = '0'
        } else if (randZero < 0.66) {
            color[2] = '0'
            color[3] = '0'
        } else {
            color[4] = '0'
            color[5] = '0'
        }
        
        return color.join('');
    }
    
    function getComputedColor() {
        GLOBAL_COLOR_INDEX = (GLOBAL_COLOR_INDEX + 1) % MAX_COMPUTED_COLORS;
        return Main.computedColors[GLOBAL_COLOR_INDEX];
    }

    var cycle = 1;
    
    function animateSVGs (mode: "SHIMMER_WAVE_1" | "SHIMMER_WAVE_2" | "SHIMMER_WAVE_CHAOS" | "SHIMMER_RAINBOW_1" | "SHIMMER_RAINBOW_2") {
        let delayAcc = 0;
        
        if (mode == SHIMMER_RAINBOW_1 || mode == SHIMMER_RAINBOW_2) {
            $('svg svg').css('opacity', 1);
            
            if (mode == SHIMMER_RAINBOW_2) {
                cycle = 1;
                
                setInterval(() => {
                    $('svg path').each(function(index) {
                        if (cycle == 0) {
                            var color = getComputedColor();
                            
                            $(this).css('fill', color)
                            .css('stroke', color)
                            .css('opacity', 1);
                        } else if (cycle == 1) {
                            $(this).css('opacity', 0);
                        } else if (cycle == 2) {
                            $(this).css('fill', 'white')
                            .css('stroke', 'black')
                            .css('opacity', 1);
                        }
                    });
                    
                    cycle = (cycle + 1) % 3;
                }, 4000);
            }
        } else {
            $('svg svg path').css('animation', '100s logoShimmer infinite');
        }
        
        $('svg path').each(function(index) {
            var delay = 0;
            
            if (mode == SHIMMER_WAVE_1) {
                delayAcc -= 0.05;
                delay = delayAcc;
            } else if (mode == SHIMMER_WAVE_2) {
                delayAcc -= 5;
                delay = delayAcc;
            } else if (mode == SHIMMER_WAVE_CHAOS) {
                delayAcc -= (0.5 + Math.random() * 30);
                delay = delayAcc;
            } else if (mode == SHIMMER_RAINBOW_1) {
                delayAcc += 0.005;
                delay = delayAcc;
                
                $(this)
                    .css('animation', 'none')
                    .css('opacity', 1)
                    .css('transition-duration', (Math.random() * 2) + "s")
                    .css('transition-delay', delay + "s")
                    .css('fill', getComputedColor());
                
                setInterval(() => {
                    $(this).css('fill', getComputedColor())
                }, 3500);
            } else if (mode == SHIMMER_RAINBOW_2) {
                delayAcc += 0.005;
                delay = delayAcc;
                
                var color = getComputedColor();
                
                $(this)
                .css('animation', 'none')
                .css('opacity', 1)
                .css('transition-duration', (Math.random() * 2) + "s")
                .css('transition-delay', delay + "s")
                .css('stroke', color)
                .css('fill', color);
            } else {
                if (Math.random() > 0.4) {
                    $(this).css('display', 'none');
                }
                delay = Math.random() * -30;
            }
            
            if ($(this).css('animation-delay') == '0s') {
                $(this).css('animation-delay', delay + 's');
            }
        });
    };

    useEffect(() => {
        animateSVGs(SHIMMER_RAINBOW_2);

        if (!projects)
            fetchProjects();
    }, []);

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
                <LogoSvgComponent
                    className="absolute"
                />
            </div>
        
            <div className="mt-24 mb-32 grid text-center md:text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 md:grid-cols-2 lg:text-left lg:px-24 md:px-12 px-6">
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
                    size={selectedProject.key === 'dxma' ? 'small' : 'large'}
                    onClose={() => setSelectedProject(undefined)}
                />
                : null
            }
        </>
    )
}