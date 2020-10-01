import React from 'react';

import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    aling-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = () => {
    return (
        <Header>
            <h1>Vitalii Losyakov</h1>
            <h2>5 записей, из них поравилось 0</h2>
        </Header>
    )
}

export default AppHeader;