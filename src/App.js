import React, {useState} from 'react';
import Header from './containers/Header';
import Contents from './containers/Contents';

function App() {
  const [videoId, setVideoId] = useState('');
  return (
    <>
      {console.log("videoID:: "+videoId)}
      <Header setVideoId={setVideoId}/>
      <Contents videoId={videoId}/>
    </>
  );
}

export default App;
