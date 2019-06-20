import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

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

  return val
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function SideBar(props) {
  const { data, showInstructions } = props;
  console.log(data);
  return (
    <div className="sidebar">
      <div
        className={`side-data ${showInstructions ? " --fadeout" : "--fadein"}`}
      >
        <p className="movie-name">{data ? data["name"] : ""}</p>
        {data && (
          <table>
            <tbody>
              <tr>
                <td>REVENUE</td>
                <td>{"$" + formatDollars(data["gross"])}</td>
              </tr>
              <tr>
                <td>OPEN</td>
                <td>
                  {`${months[data.openDate.split("/")[0] - 1]} ${data["year"]}`}
                </td>
              </tr>
              <tr>
                <td>GENRE</td>
                <td>
                  {
                    <span>
                      <div className={`legend-circle ${data["genre"]}`} />
                      {data["genre"]}
                    </span>
                  }
                </td>
              </tr>
              <tr>
                <td>MPAA RATING</td>
                <td>{data.mpaaRating}</td>
              </tr>
            </tbody>
          </table>
        )}
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
