import React from 'react'
import Header from '../component/Header'
import SearchField from '../component/SearchField'
import Images from '../component/Images'
import useAxios from '../hooks/useAxios'

const Home = () => {
 const{isLoading ,fetchData,response,error }= useAxios(``);
  return (
    <div>
        <Header>
          <SearchField />
       </Header>
       <Images />

    </div>
  )
}

export default Home
