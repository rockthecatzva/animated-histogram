import React from "react";

const formatDollars = val => {
  // if (val >= 1000000) {
  //   return (val / 1000000).toFixed(1) + "M";
  // }
  // if (val >= 10000) {
  //   return (val / 1000).toFixed(1) + "K";
  // }

  // if (val >= 1000) {
  //   return (val / 1000).toFixed(2) + "K";
  // }

  return val.toFixed(2);
};

export default function SideBar(props) {
  const { data, showInstructions } = props;

  return (
    <div className="sidebar">
      <div
        className={`side-data ${showInstructions ? " --fadeout" : "--fadein"}`}
      >
        <p className="movie-name">{data ? data["name"] : ""}</p>
        <table>
          <tbody>
            <tr>
              <td>REVENUE:</td>
              <td>{data ? "$" + formatDollars(data["gross"]) : ""}</td>
            </tr>
            <tr>
              <td>YEAR:</td>
              <td>{data ? data["year"] : ""}</td>
            </tr>
            <tr>
              <td>GENRE:</td>
              <td>
                {data ? (
                  <span>
                    <div className={`legend-circle ${data["genre"]}`} />
                    {data["genre"]}
                  </span>
                ) : (
                  ""
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="side-instructs">
        <div
          className={`arrow-and-text ${
            !showInstructions ? " --fadeout" : "--fadein"
          }`}
        >
          <div className="arrow-left" />
          <p>Place your mouse over a circle to see details</p>
        </div>
      </div>
    </div>
  );
}
