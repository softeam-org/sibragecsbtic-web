import React from "react";
import { Link } from "react-router-dom";

const coursesData = [
  {
    id: 1,
    name: "Inteligência Artificial na Construção ( Prof. Dr. Marco Antônio Brasiel - UFS)",
    image: "https://biblus.accasoftware.com/ptb/wp-content/uploads/sites/5/2022/10/inteligencia-artificial-em-construcoes.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl sit amet nisl.",
    presenter: "Prof. Dr. Maurício Moreira e Silva Bernardes - UFRGS",
    link: "",
  },
  {
    id: 2,
    name: "A integração de tecnologias I4.0 (Indústria 4.0) e os Gêmeos Digitais  ( Prof. Dr. Fabiano Correa - USP)",
    image: "https://i0.wp.com/adsknews.autodesk.com/app/uploads/2021/02/ADK_DigitalTwin_Opt2_1920x1000.jpg?resize=658%2C342&ssl=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies ultricies, nunc nisl ultricies nisl, nec ultricies nisl nisl sit amet nisl.",
    presenter: "Prof. Dr. Maurício Moreira e Silva Bernardes - UFRGS",
    link: "",
  },
];

function Courses() {
  return (
    <div name="minicursos" className="bg-gray-50 py-20 px-3 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">MiniCursos</h2>
        </div>
        <div className="flex flex-col w-100 justify-center items-center gap-6">
          <p className="text-nord-0 text-xl mb-20">
            As opções de Minicursos serão realizadas simultaneamente. As
            inscrições nos minicursos estarão disponíveis para participantes
            inscritos no evento completo ou no Industry Day.
          </p>
          <div className="w-100 flex flex-col lg:flex-row justify-center items-center gap-12">
            {coursesData.map((course) => (
              <div className="flex flex-col items-center justify-center px-9 py-9 gap-5 shadow-lg rounded-lg bg-white">
                <img
                  src={course.image}
                  className="w-72 h-48 object-cover"
                  alt=""
                />

                <h3 className="text-lg text-nord0 font-bold">{course.name}</h3>
                <p className="text-zinc-400">{course.presenter}</p>
                <Link to="">
                  <button className="bg-orange-500 border-0 text-white font-bold py-3 px-16  shadow-md hover:shadow-lg rounded-md hover:bg-orange-400 transition-all ease-in">
                    Inscreva-se
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
