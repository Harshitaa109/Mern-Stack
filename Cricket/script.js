const { useState, useEffect } = React;

function CricketMatches() {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live", {
        method: "GET",
        headers: {
          "x-rapidapi-key": "6a4ce8ecf2msh911535f4bbf4866p175d1djsnf76e8f829618",
          "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com"
        }
      })
        .then((res) => res.json())
        .then((data) => {
          const grouped = data?.typeMatches?.map((type) => {
            const matches = type.seriesMatches
              ?.filter((series) => series.seriesAdWrapper)
              .map((series) =>
                series.seriesAdWrapper.matches?.map((match) => ({
                  type: type.matchType,
                  seriesName: series.seriesAdWrapper.seriesName,
                  team1: match.matchInfo?.team1?.teamName || "Team 1",
                  team2: match.matchInfo?.team2?.teamName || "Team 2",
                  status: match.matchInfo?.status || "Unknown",
                  score: match.matchScore?.team1Score?.inngs1 || null
                }))
              )
              .flat();

            return {
              type: type.matchType,
              matches: matches || []
            };
          });

          setMatches(grouped || []);
        })
        .catch((err) => {
          console.error("Fetch Error:", err);
          setError("Failed to fetch matches");
        });
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const children = [];

  children.push(
    React.createElement("h2", null, " Live Cricket Matches")
  );

  if (error) {
    children.push(
      React.createElement("p", { style: { color: "red" } }, error)
    );
  }

  if (matches.length === 0) {
    children.push(React.createElement("p", null, "Loading..."));
  } else {
    matches.forEach((group, i) => {
      children.push(
        React.createElement("h3", {
          key: `group-${i}`,
          style: { color: "#2c3e50", marginTop: "2rem" }
        }, group.type)
      );

      if (group.matches.length === 0) {
        children.push(React.createElement("p", null, "No matches in this category."));
      } else {
        group.matches.forEach((match, j) => {
          const matchChildren = [
            React.createElement("h4", null, match.seriesName),
            React.createElement("p", null, `${match.team1} vs ${match.team2}`),
            React.createElement("p", null, `Status: ${match.status}`)
          ];

          if (match.score) {
            matchChildren.push(
              React.createElement(
                "p",
                null,
                `Score: ${match.score.runs}/${match.score.wickets} in ${match.score.overs} overs`
              )
            );
          }

          children.push(
            React.createElement("div", { className: "card", key: `match-${i}-${j}` }, matchChildren)
          );
        });
      }
    });
  }

  return React.createElement("div", null, children);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(CricketMatches));
