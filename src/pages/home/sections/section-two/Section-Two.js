import ContainerTwo from './components/ContainerTwo'
import MechanicalTitle from './components/MechanicalTitle'
import CardPmoc from './components/CardPmoc'
import CardPrevIncendio from './components/CardPrevIncendio'
import CardAlvara from './components/CardAlvara'
import ButtonDialogue from '../../../../partials/buttonDialogue/ButtonDialogue'

import './section_two.css'

const ContentSectionTwo = () => {

    return (
        <>
            <ContainerTwo >
                <MechanicalTitle />
                <CardPmoc />
                <CardPrevIncendio />
                <CardAlvara />
                <ButtonDialogue />
            </ContainerTwo>
        </>
    )
}

export default ContentSectionTwo

