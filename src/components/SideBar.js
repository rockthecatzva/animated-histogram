import React from "react";

export default function SideBar(props) {
    console.log(props)
    const {data}=props;

  return (
    <div className="sidebar">
      {props.data!==undefined ? (
        <div id="side-tooltip" className="dnone">
          <table>
            <tbody>
              <tr>
                <td>TICKET SALES</td>
                <td >{(data.ticket_sales/1000)}k</td>
              </tr>
              <tr>
                <td>YEAR</td>
                <td  >{data.year}</td>
              </tr>
              <tr>
                <td>GENRE</td>
                <td >{data.type}</td>
              </tr>
            </tbody>
          </table>
          <p className="tool-label">MOVIE NAME</p>
          <p className="movie-name" >{data.name}</p>
          <div>
            <div className="legend-circle" />
            <p className="rfloat"  />
          </div>
        </div>
      ) : (
        <div className="side-instructs">
          <div className="arrow-and-text">
            <div className="arrow-left" />
            <p>Place your mouse over a circle to see details</p>
          </div>
        </div>
      )}
    </div>
  );
}
