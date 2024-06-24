import style from "styled-components"

export const Button = style.button`
    outline: none;
    border: none;
    cursor: pointer;
    margin: 10px;
    padding: 7px 15px;
    color: #fff;
    font-weight: bold;
    background-color: ${props => props.bg}
`

export const Container = style.div`
    display: flex;
    flex: ${props => props.flex};
    gap: 50px;
`
