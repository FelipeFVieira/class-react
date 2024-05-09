import "./style.css"

function LogButton(properties){
    return(
        <div>
            <button>
                {properties.description}
            </button>
        </div>
    )
}

export default LogButton;