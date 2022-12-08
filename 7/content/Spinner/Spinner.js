import "./spinner.css";
function Spinner({isLoading}){
    return(
        <div>
            {isLoading ? <div className="spinner" /> : null}
        </div>
    )
}
export default Spinner