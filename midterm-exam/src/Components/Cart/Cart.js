

const image = {text:localStorage.getItem("image")}
console.log(image)
function cart(){
    return(
        <div>{image}</div>
    )
}

export default cart;