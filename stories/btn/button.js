import "./button.css"
export const createButton = ({
    style = "filled",
    size = "small",
    label,
    onClick
}) =>{
    const button = document.createElement("button");
    button.type = "submit"
    button.role = "button"
    button.innerText = label
    button.addEventListener("click",onClick)
    button.className = [
        "btn",
        `btn--${size}`,
        `btn--${style}`
    ].join(' ')
    return button
}