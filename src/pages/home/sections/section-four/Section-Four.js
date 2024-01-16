import ContainerFour from './components/ContainerFour'
import TitleLautoTec from './components/TitleLaudo'
import CardAr from './components/CardAr'
import CardPpci from './components/CardPpci'
import CardMachines from './components/CardMachines'
import ButtonDialogue from '../../../../partials/button_dialogue/ButtonDialogue'

import './section_four.css'

const ContentSectionFour = () => {

    return (
        <>
            <ContainerFour >
                <TitleLautoTec />
                <CardAr />
                <CardPpci />
                <CardMachines />
                <ButtonDialogue />
            </ContainerFour>
        </>
    )
}

export default ContentSectionFour