import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerPage, ContainerProfile, Infos, Texto, Bio, HeaderApp, FooterApp, 
        ContainerHome, ContainerProfileAndButtons, BotaoResetar, ButtonLike, ButtonDislike, MatchingImg } from './styles'
import logo from '../../imgs/astromatch.gif'
import matching from '../../imgs/matching.png'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andresa-ribeiro-silveira/person'
const url1 = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andresa-ribeiro-silveira/choose-person'


function Home(props) {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])


    const getProfileToChoose = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            alert(err)
        })
    }

    const choosePerson = (boolean) => {
        const headers = {
            headers: 
                { 
                    "Content-Type": "application/json" 
                }
        }

        const body = 
            {
                "id": profile.id,
                "choice": boolean
            }
        
        axios.post(url1, body, headers)
        .then((res) => {
            console.log(res)
            getProfileToChoose()
        })
        .catch((err) => {
            alert(err)
        })

        
    }

    return (
        <ContainerPage>
            <ContainerHome>
                <HeaderApp>
                    <img src={logo} alt="Logo do Aplicativo AstroMatch"/>
                    <MatchingImg src={matching} onClick={props.nextPage}></MatchingImg>
                </HeaderApp>
                    {profile ? 
                    <ContainerProfileAndButtons>
                        <ContainerProfile>
                            <img src={profile.photo} alt={profile.name}/>
                            <Texto>
                                <Infos>
                                    <p><b>{profile.name}, </b></p>
                                    <p>{profile.age}</p>
                                </Infos>
                                <Bio>{profile.bio}</Bio>
                            </Texto>
                        </ContainerProfile>
                        <FooterApp>
                            <ButtonDislike onClick={() => choosePerson(false)}>X</ButtonDislike>
                            <ButtonLike onClick={() => choosePerson(true)}>✔</ButtonLike>
                        </FooterApp> 
                    </ContainerProfileAndButtons> : 
                    <ContainerProfileAndButtons>
                        <p>Não existe mais perfis! Que tal você ver seus Matches para ver quem te curtiu também?</p>
                        <p>Se preferir você também pode limpar suas preferências para ter novas chances:</p>
                        <BotaoResetar onClick={props.limpar}>Limpar</BotaoResetar>
                    </ContainerProfileAndButtons> }
            </ContainerHome>
        </ContainerPage>
    )
}

export default Home