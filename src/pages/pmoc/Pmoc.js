import React, { useEffect } from 'react';
import Container from "./components/containers/Container"
import Content from "./components/content/Content"
import Text from "./components/text/Text"
import ButtonDialogo from '../../partials/buttonDialogo/Button' 
import BannerPmoc from './components/banner/pmoc.png'


function Pmoc() {

    // O conteúdo do componente
    return (
        <>
            <Container>
                <Content>

                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                        <div
                            style={{
                                height: '500px',
                                width: '100%',
                                overflow: 'hidden'
                            }}>
                            <img src={BannerPmoc}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }} />
                        </div>
                        <Text />
                    </div>
                    <ButtonDialogo />
                </Content>
            </Container>
        </>
    );
}

export default Pmoc;
