import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

const skillsData = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 75 },
  { name: 'React', value: 80 },
  { name: 'Nodejs', value: 90 },
  { name: 'Vuejs', value: 55 },
];

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Um pouco das minhas Skills</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          {skillsData.map((skill, index) => (
            <div className="col-lg-6" key={index}>
              <div className="progress">
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.value}%` }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
