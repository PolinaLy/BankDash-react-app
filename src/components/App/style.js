import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        font-family: ${props => props.theme.fontInter};
        font-size: ${props => props.theme.fontSize};
        font-weight: 400;
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.backColorSecondary};
    }

    ul {
        list-style-type: none;
    }
    
    img {
        display: block;
    }
    
    a {
        text-decoration: none;
        color: ${props => props.theme.colorBasic};
    
        &:focus-visible {
        outline: 0;
        }
    }
    
    ::-webkit-scrollbar {
        width: 0;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }
    
    input[type="number"] {
        appearance: textfield;
    }
    

    .visually-hidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
`
