import React from "react";
import { AbTag, AbTagProps } from '../src/componentes/AbTag'
import { ComponentMeta, ComponentStory } from '@storybook/react'; 

export default {
    title: 'Componentes/AbTag',
    component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args}/>

export const TagTxt = Template.bind({})

TagTxt.args = {
    texto: "Tag",
} as AbTagProps
