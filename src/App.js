import './App.css';
import ReactPlayer from 'react-player'
import React, {useState} from 'react';

function App() {

  const [user_url, set_user_video_url] = useState("https://www.youtube.com/watch?v=SXTGtNa3tB8");

  const handleSubmit=(e)=>{
    set_user_video_url(e.target.value)
  }

  return ( 
     <div className='container'>
      <div className='row'>
        <div className='col-11 mt-5'>
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={handleSubmit} placeholder='paste here video url'  aria-describedby="button-addon2" />
            <button className="btn btn-primary" type="button" id="button-addon2">Play</button>
          </div>
          </form>

           <div className='youtube-box'>
            <ReactPlayer url={user_url} className="video" />
           </div>
        </div>
      </div>
   
   </div>
  );
}

export default App;
