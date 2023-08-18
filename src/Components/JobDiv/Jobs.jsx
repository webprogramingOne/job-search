import { BiTimeFive } from "react-icons/Bi";
import Logo1 from "../../assets/1.png";
import Logo2 from "../../assets/2.png";
import Logo3 from "../../assets/3.png";
import Logo4 from "../../assets/4.png";
import Logo5 from "../../assets/5.png";
import Logo6 from "../../assets/6.png";
import Logo7 from "../../assets/7.png";
import Logo8 from "../../assets/8.png";
const Data = [
  {
    id: 1,
    image: Logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, obcaecati!",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    image: Logo2,
    title: "Content Creator",
    time: "18 June",
    location: "Jakarta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, obcaecati!",
    company: "Majoe jaya Co.",
  },
  {
    id: 3,
    image: Logo3,
    title: "Analyst Kimia",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, obcaecati!",
    company: "Novac Linus Co.",
  },
  {
    id: 4,
    image: Logo4,
    title: "UI UX Desaigner",
    time: "Now",
    location: "South Africa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, obcaecati!",
    company: "Sir Nurdian co.",
  },
  {
    id: 5,
    image: Logo5,
    title: "Ai Enginer",
    time: "12 Juni",
    location: "Los Angeles",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci?",
    company: "Evolution Co.",
  },
  {
    id: 6,
    image: Logo6,
    title: "Data Science",
    time: "12 June",
    location: "Costarica",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, rem!",
    company: "Scien exact Po.",
  },
  {
    id: 7,
    image: Logo7,
    title: "Mobile Developer",
    time: "10 May",
    location: "Luxemburg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, obcaecati!",
    company: "Jaya Indo Net.",
  },
  {
    id: 8,
    image: Logo8,
    title: "IOS Developer",
    time: "05 May",
    location: "Singkut",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, obcaecati!",
    company: "One Dev Nur.",
  },
];

const Jobs = () => {
  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {Data.map(({ id, image, title, time, location, desc, company }) => {
        return (
          <div
            key={id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueIs shadow-lg shadow-grey-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="Company Logo" className="w-[10%]" />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {company}
              </span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[10px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor ">
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
