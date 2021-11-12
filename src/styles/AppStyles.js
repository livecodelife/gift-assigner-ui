import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    height: 100vh;
    padding-top: 10rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
`

export const GiftAssignForm = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 15rem;
    justify-content: space-evenly;
    height: 15%;
    padding: 1rem;
    border: #a30303 3px solid;
    border-radius: 22px;
    box-sizing: content-box;
    box-shadow: 5px 5px 5px #066014;
    background-color: #db1212;
`
GiftAssignForm.displayName = 'GiftAssignForm'

export const FamilyIdInput = styled.input`
    max-width: 2rem;
    padding-left: 1.5rem;
    border-radius: 6px;
    border-color: #1E792C;
    align-self: center;
    height: 2rem;
    border-width: 2.5px;
`
FamilyIdInput.displayName = 'FamilyIdInput'

export const AssignGiftsButton = styled.button`
    background-color: #1E792C;
    height: 2rem;
    color: white;
    border-radius: 8px;
    font-size: large;
    font-weight: bold;
    box-shadow: 0px 1px 5px #000000;
`
AssignGiftsButton.displayName = 'AssignGiftsButton'
