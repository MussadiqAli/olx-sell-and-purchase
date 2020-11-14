import React from 'react';
import Seach from '../header/SearchBar'
import Nav from '../header/navbar'
import Slider from '../header/Slider'
import UseApp from '../UseApp/index'
import Footer from '../Footer/footer'


class Home extends React.Component{
    render(){
      return(
        <div>
  
          <Seach />
          <Nav />
          <Slider />
          <h3>content</h3>
          <UseApp />
          <Footer />
          
          
        </div>
      )
    }
  }
  
  export default Home;