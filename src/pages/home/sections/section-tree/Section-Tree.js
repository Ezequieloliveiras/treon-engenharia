import StyledSectionTree from './components/ContainerTree'
import EletricalTitle from './components/EletricalTitle'
import CardEletrical from './components/CardElectrical '
import CardSolar from './components/CardSolar'
import CardSpda from './components/CardSpda'
import ButtonDialogue from '../../../../partials/buttonDialogue/ButtonDialogue'

import './section_tree.css'

const ContentSectionTree = () => {

    return (
        <>
            <StyledSectionTree>
                <EletricalTitle />
                <CardEletrical />
                <CardSolar />
                <CardSpda />
                <ButtonDialogue />
            </StyledSectionTree>
        </>
    )
}

export default ContentSectionTree