import React from "react";
import { AbCard } from '../src/componentes/AbCard'
import { ComponentMeta, ComponentStory } from '@storybook/react'; 

export default {
    title: 'Componentes/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>

const Template: ComponentStory<typeof AbCard> = () => <AbCard>
    <h1>Card teste</h1>
</AbCard>

export const Primario = Template.bind({})