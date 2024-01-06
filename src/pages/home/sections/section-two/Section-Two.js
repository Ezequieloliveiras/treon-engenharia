import ContainerTwo from '../section-two/ContainerTwo'
import MechanicalTitle from './MechanicalTitle'
import CardPmoc from './CardPmoc'
import CardPrevIncendio from './CardPrevIncendio'
import CardAlvara from './CardAlvara'
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

