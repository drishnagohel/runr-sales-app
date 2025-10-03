import moment from "moment";

export function getDateTab(date, tooltitle, extra = "") {
  let timestr = moment(date).format("DD MMM YYYY hh:mm A");
  let dateOnly = moment(date).format("DD MMM YYYY");
  let datetime = timestr.split(" ");
  let tooltip = tooltitle ? `${tooltitle} : ${timestr}` : timestr;

  if (extra === "theme-primary-date" || extra === "theme-date-follow-up" || extra === "theme-date-orange") {
    return (
      <div className={`theme-date ${extra}`} data-tooltip={tooltip}>
        <div className="theme-date-content">
          <small>{datetime[1]}</small> <span>{datetime[0]}</span>
        </div>
        <span className="theme-date-footer">{datetime[3]} {datetime[4]}</span>
      </div>
    );
  }

  if (extra === "Date") {
    return (
      <div className={`theme-date ${extra}`} data-tooltip={tooltip}>
        <div className="theme-date-content">
          <small>{datetime[1]}</small> <span>{datetime[0]}</span>
        </div>
        <span className="theme-date-footer">{datetime[2]}</span>
      </div>
    );
  }

  return (
    <div className={`theme-date ${extra}`} data-tooltip={tooltip}>
      <div className="theme-date-content">
        <small>{datetime[1]}</small> <span>{datetime[0]}</span>
      </div>
      <span className="theme-date-footer">{datetime[2]}</span>
    </div>
  );
}


export function Textcapitalize(string = "") {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function getNameAvtarSingle(name = "NA") {
  name = name.trim();
  if (name.length === 0) name = "NA";
  const chr = name.charAt(0).toUpperCase();
  return `<span class='user-name-latter latter-${chr.toLowerCase()}'>${chr}</span>`;
}
