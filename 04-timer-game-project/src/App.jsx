import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title={"easy"} targetTime={1} />
        <TimerChallange title={"not easy"} targetTime={5} />
        <TimerChallange title={"getting tought"} targetTime={10} />
        <TimerChallange title={"pro"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
