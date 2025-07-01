const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
    { name: "Card1", score: 10 },
    { name: "Card2", score: 20 },
    { name: "Card3", score: 30 },
    { name: "Card4", score: 40 },
    { name: "Card5", score: 50 },
    { name: "Card6", score: 60 },
];

const Card = (props) => {
    const { name, score } = props;
    return (
        <div className="card" >
            <h1>{name}</h1>
            <p>Score: {score}</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            {arr.map((elem)=>{
                return <Card name={elem.name} score={elem.score} />;
            })}
           
        </div>
    );
};

reactRoot.render(<App />);

