import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

import './app.css'
import styled from 'styled-components';

const AppBlock = styled.div`
    mragin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`

const App = () => {

    const data = [
        {label: 'Going to a learn React', important : true, id : 1},
        {label: 'Going to a learn JS', important : false, id : 2},
        {label: 'Going to a Python', important : false, id : 3}
    ];

    return (
    <StyledAppBlock>
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data} />
        <PostAddForm/>
    </StyledAppBlock>
    )
}

export default App