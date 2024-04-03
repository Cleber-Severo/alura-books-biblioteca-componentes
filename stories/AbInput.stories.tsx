import React from "react";
import { AbInput, AbInputProps } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'; 

export default {
    title: 'Componentes/AbInput',
    component: AbInput
} as ComponentMeta<typeof AbInput>

const Template: ComponentStory<typeof AbInput> = (args) => <AbInput {...args} />

export const Padrao = Template.bind({})

Padrao.args = {
    label: 'E-mail',
    placeholder: 'mail@mail.com'
} as AbInputProps
