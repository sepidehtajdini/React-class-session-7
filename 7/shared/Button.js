import "./button.css"
function Button({ text, type, className, onClick}) {
    return (
        <div>
            <button type={type} className={`btn ${className}`} onClick={onClick}>{text}</button>
        </div>
    )
}
export default Button