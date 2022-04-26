import React, { useState, useEffect} from "react";
import { ContainerPage, ContainerMatches, HeaderApp, ContainerList, MatchesList, PersonImage, PersonMatch, HomeImg, SemMatches, NoMatches } from './styles'
import logo from '../../imgs/astromatch.gif'
import axios from "axios";
import home from '../../imgs/tinder.png'
import heart from '../../imgs/sem-matches.png'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andresa-ribeiro-silveira/matches'

function Matches(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [matches])

    const getMatches = () => {
        axios.get(url)
        .then((res) => {
            setMatches(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const matchesList = matches.map((person) => {
        return (
            <MatchesList>
                <PersonMatch>
                    <PersonImage src={person.photo} alt={person.name}/>
                    <p>{person.name}</p>
                </PersonMatch>
            </MatchesList>
        )
    })

    return (
        <div>
            <ContainerPage>
                <ContainerMatches>
                    <HeaderApp>
                        <img src={logo} alt="Logo do Aplicativo AstroMatch"/>
                        <HomeImg src={home} onClick={props.backPage} />
                    </HeaderApp>
                    <ContainerList>
                        {matchesList.length > 0 ? matchesList : 
                        <NoMatches>
                            <SemMatches src={heart}/>
                            <p>Ainda nenhum match? Veja mais perfils!</p>
                        </NoMatches>}
                    </ContainerList>
                </ContainerMatches>
            </ContainerPage>
        </div>
    )
}

export default Matches