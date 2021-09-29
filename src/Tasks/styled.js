import styled, { css } from "styled-components"

export const List = styled.ul`
    margin-top: 2px;
    padding-left: 0px;
`;


export const Item = styled.li`
  
    background-color: white;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid hsl(0, 0%, 93%);
    word-break: break-all;

    ${({ hidden }) => hidden & css`
    display: none;
    `
    };
    
`;


export const Content = styled.span`
${({ done }) => done && css`

    text-decoration: line-through;
}

`};
`;

export const RemoveButton = styled.button`
width: 30px;
    height: 30px;
    background-color: hsl(0, 100%, 50%);
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: hsl(0, 100%, 60%);
    }

    &:active {
        background-color: hsl(0, 100%, 70%);
    }
`;

export const ToggleButton = styled(RemoveButton)`
background-color: hsl(120, 100%, 25%);
&:hover {
        background-color: hsl(120, 100%, 35%);
    }

    &:active {
        background-color: hsl(120, 100%, 45%);
    }

    ${({ done }) => !done && css`

color: green;
`}
        
`;