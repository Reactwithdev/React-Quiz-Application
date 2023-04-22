

function TotelResult(props){
    return(
        <>
            <div className="show-score">
          Your-score: {props.score}
          Totel-score: {props.totelScore}
            </div>
            <button id="next-button" onClick={props.tryAgain}></button>
        </>
    )
}
export default TotelResult