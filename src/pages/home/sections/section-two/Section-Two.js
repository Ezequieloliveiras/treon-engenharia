import ContainerTwo from './components/ContainerTwo'
import MechanicalTitle from './components/MechanicalTitle'
import CardPmoc from './components/CardPmoc'
import CardPrevIncendio from './components/CardPrevIncendio'
import CardAlvara from './components/CardAlvara'
import ButtonDialog from '../../../../partials/buttonDialogo/Button'

import './section_two.css'

const ContentSectionTwo = () => {

    return (
        <>
            <ContainerTwo >
                <MechanicalTitle />
                <CardPmoc />
                <CardPrevIncendio />
                <CardAlvara />
                <ButtonDialog />
            </ContainerTwo>
        </>
    )
}

export default ContentSectionTwo

