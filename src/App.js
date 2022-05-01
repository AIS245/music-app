import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Song 1",
      artist: "artist 1",
      img_src: "./images/song1.jpeg",
      src: "./songs/song_1.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song2.jpeg",
      src: "./songs/song_2.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song3.jpg",
      src: "./songs/song_3.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song4.jpg",
      src: "./songs/song_4.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
