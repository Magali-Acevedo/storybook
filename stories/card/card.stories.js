import { createCard } from "./card.js";

export default {
    title:"Desing System/Atoms/Card"
}
const Template = ( {label, ...args} ) =>{
    return createCard({label, ...args})
}

export const Default = Template.bind({})
Default.args = {
    title:"Title",
    description:"Description"
}