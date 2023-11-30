import "./Projects.css";
import { DataProjects } from "./DataProjects";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
// import ReactPaginate from "react-paginate";

export const Projects = () => {
  // codes for filter by search name
  const [input, setInput] = useState("");
  const handleInputeChange = (e) => {
    setInput(e.target.value);
  };
  // codes for filter by category skills
  const [selectedValue, setSelectedValue] = useState("");
  const hangleOption = (e) => {
    handleClearSearch();
    setSelectedValue(e.target.value);
  };
  // codes for cleaning the search box while you click on options
  const handleClearSearch = () => {
    setInput("");
  };

  // codes for condition
  const fitlterCondition = (val) => {
    if (input == "" && selectedValue === "") {
      return val;
    } else if (
      val.title
        .toLocaleLowerCase()
        .includes(input.toLocaleLowerCase() || selectedValue == "")
    ) {
      return val;
    } else if (val.skills == selectedValue && input == "") {
      return val;
    }
  };
  // this is all my projects that are filtred
  const allfiltredprojects = DataProjects.filter(fitlterCondition).map(
    (project, id) => {
      return <ProjectCard project={project} key={id} />;
    }
  );

  return (
    <section id="projects" className="pro-container">
      <h2 className="pro-title">Projects</h2>
      <div className="filter-container">
        <label className="filter-label" htmlFor="search">
          Project Name
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={handleInputeChange}
          className="filter-input"
        />
      </div>
      <div className="filter-container">
        <label htmlFor="option" className="filter-label">
          Filter By Skills
        </label>
        <select
          id="option"
          className="filter-input"
          value={selectedValue}
          onChange={hangleOption}
        >
          <option value="">All</option>
          <option value="Html & Css">Html & Css</option>
          <option value="Html, Css, JavaScript">Html, Css, JavaScript</option>
          <option value="Html, Css, React">Html, Css, React</option>
        </select>
      </div>
      <div className="pro">{allfiltredprojects}</div>
    </section>
  );
};
