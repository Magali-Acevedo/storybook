import { userEvent, within } from "@storybook/testing-library";
import { createButton } from "./button";
import ButtonDocumentation from "./button.md";
import { expect } from "@storybook/jest";
export default {
    title:"Desing System/Atoms/Button",
    decorators:[(story)=> {
        const decorator = document.createElement("div")
        decorator.style.margin = "24px"
        decorator.appendChild(story())
        return decorator
    }] ,
    parameters:{
        docs:{
            page:null,
            description:{
                component:ButtonDocumentation
            }
        },
        actions: {
            handles: ['mouseover']
        },
        backgrounds:{
            default:"blackfriday",
            values:[
                {
                    name:"blackfriday",
                    value:"#000000"
                },
                {
                    name:"default",
                    value:"#FFFFFF"
                },
            ]
        }
    },
    argTypes:{
        label:{
            name:"label",
            control:{
                type:"text"
            }
        },
        style:{
            name:"style",
            options:["filled","outlined"],
            control:{
                type:"radio"
            }
        },
        size:{
            name:"size",
            options:["small","medium","large"],
            control:{
                type:"radio"
            }
        },
        onClick:{
            description:"Event",
            action:"clicked"
        }
    },
    tags:["autodocs"],
}
const Template = ( {label, ...args} ) =>{
    return createButton({label, ...args})
}

export const Default = Template.bind({})
Default.args = {
    label:"Boton"
}

Default.play = async ({ args, canvasElement }) =>{
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole("button"))
    await expect(canvas.getByText("Boton")).toBeInTheDocument()
}