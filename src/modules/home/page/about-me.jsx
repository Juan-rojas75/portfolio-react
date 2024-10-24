// AnotherComponent.js
import React, { Component } from "react";

export default class PageHome extends Component {
  handleFirstButtonClick = () => {
    alert("Primera acción ejecutada!");
  };
  render() {
    const skills = ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "MySQL", "PostgreSQL" , "GIT", "GitHub", "Java" , "SpringBoot", "Nextjs", "Nestjs", "C#", ".Net", "Angular", "Python", "Django", "Flask", "VueJs" , "Tailwind CSS"];
    const listSkills = skills.map((skill) =>
      <span class="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-pink-900 dark:text-pink-300">
                {skill}
      </span>
    );
    return (
      <div className="">
        <section className="flex flex-row flex-wrap justify-center gap-40 mb-8">
          <div className="flex flex-col gap-6 max-w-lg">
            <span className="font-rubik font-bold text-4xl">
              I'm passionate about being a developer!
            </span>
            <p className="font-rubik text-xl">
              Hi, I'm Juan. At 28 years old, I work as a backend developer. My
              journey into programming began in 2018, and I started to
              specialize in backend development in 2020. Nowadays, in addition
              to coding, I immerse myself in studying startups and business
              strategies. Outside of my professional interests, I enjoy playing
              volleyball and catching up on my favorite TV series. I'm dedicated
              to my craft and continually strive to learn and grow both in
              technology and in life.
            </p>
          </div>
          <img
            width="400px"
            // height="100px"
            src={process.env.PUBLIC_URL + "/fotos/Señalando izquierda.png"}
            alt="Foto"
          />
        </section>
        <section className="flex flex-row justify-center">
          <div className="flex flex-col flex-wrap gap-4 w-full">
            <span className="font-rubik font-bold text-4xl">Skills</span>
            <p className="font-rubik text-xl">
              Hey there! Just wanted to share a bit about what I can do as a
              developer. Below, you’ll find a list of my key skills and
              expertise. From backend development to working with various
              programming languages, I’ve got a solid toolkit that I’m always
              expanding. Check it out!
            </p>
            <div className="flex flex-row justify-center flex-wrap gap-1">
              {listSkills}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
