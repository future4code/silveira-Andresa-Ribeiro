import styled from "styled-components";

export const ContainerPage = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const ContainerHome = styled.div `
    border: 2px solid pink;
    width: 400px;
    height: 600px;
    border-radius: 7px;
    box-shadow: 1px 1px 6px silver;
    background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
`
export const ContainerProfileAndButtons = styled.div `
    display: flex;
    flex-direction: column;
    font-weight: bold;
    padding: 20px 20px 0px;
`

export const ContainerProfile = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    height: 450px;
    box-shadow: 0px 0px 4px 0px #848484;
    border-radius: 7px;
    img {
        height: 100%;
        border-radius: 7px;
    }
`
export const Infos = styled.div `
    display: flex;
    p:nth-child(2) {
        margin-left: 5px;
    }
`
export const Texto = styled.div `
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0px;
    padding: 10px;
    color: white;
    font-size: 18px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    width: -webkit-fill-available;
    border-radius: 7px;
`

export const Bio = styled.p `
    margin-top: 0px;
`

export const HeaderApp = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: #fffeff;
    height: 60px;
    border-bottom: 1px solid silver;
    padding: 0px 2px;
    img {
        height: 100%;
        border-radius: 7px;
    }
`

export const FooterApp = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ButtonLike = styled.button`
   border-radius: 50%;
   width: 70px;
   height: 70px;
   border: 2px solid green;
   color: green;
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   overflow: hidden;
   padding-bottom: 5px;
   cursor: pointer;
   
   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: green;
    color: white;
    transform: scale(0.8)
   }
   
   :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.5);
    		content: "";
			}
   }
`

export const ButtonDislike = styled.button`
   border-radius: 50%;
   width: 70px;
   height: 70px;
   border: 2px solid red;
   color: red;
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   overflow: hidden;
   cursor: pointer;
   
   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: red;
    color: white;
    transform: scale(0.8)
   }
   
   :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.5);
    		content: "";
			}
   }
`

export const MatchingImg = styled.img`
    width: 4vw;
    padding: 3px;
    transition: all 300ms;
    cursor: pointer;

    :hover {
        transform: scale(0.9);
    }
    :active {
        position: relative;
        top: 1px;
    }
`

export const BotaoResetar = styled.button`
   border-radius: 5%;
   width: 140px;
   height: 70px;
   border: 2px solid #ff3ab3;
   color: #ff3ab3;
   font-size: 35px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   margin-left: 8vw;
   box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
   overflow: hidden;
   padding-bottom: 5px;
   cursor: pointer;
   
   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: #ff3ab3;
    color: white;
    transform: scale(0.8)
   }
   
   :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.5);
    		content: "";
			}
   }
`