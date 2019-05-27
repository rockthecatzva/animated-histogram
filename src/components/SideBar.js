import React from "react";

export default function SideBar(props) {
  const { data, showInstructions } = props;

  return (
    <div className="sidebar">
      <div className="side-instructs">
        <div
          className={`arrow-and-text ${!showInstructions ? " --fadeout" : "--fadein"}`}
        >
          <div className="arrow-left" />
          <p>Place your mouse over a circle to see details</p>
        </div>
      </div>

      <div className="side-data">
        <p className="movie-name">{data ? data.name : ""}</p>
        <table>
          <tbody>
            <tr>
              <td>REVENUE:</td>
              <td>{data ? "$"+data.ticket_sales / 1000 : ""}</td>
            </tr>
            <tr>
              <td>YEAR:</td>
              <td>{data ? data.year : ""}</td>
            </tr>
            <tr>
              <td>GENRE:</td>
              <td>{data ? <span><div className={`legend-circle ${data.type}`}/>{data.type}</span> : ""}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
