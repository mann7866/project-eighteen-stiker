import { useState, useEffect } from "react";
import mp3 from "../../public/assets/musics/Tyla - Water.mp3"
// kalau taruh di src/assets → import musicFile from "./assets/music.mp3";

export default function FloatingMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [audio] = useState(() => new Audio(mp3)); // file dari public

  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [dir, setDir] = useState({ dx: 2, dy: 2 });

  useEffect(() => {
    if (!isFloating) return;

    const move = () => {
      setPos((prev) => {
        let newX = prev.x + dir.dx;
        let newY = prev.y + dir.dy;

        const width = window.innerWidth - 60;
        const height = window.innerHeight - 60;

        let newDx = dir.dx;
        let newDy = dir.dy;

        if (newX <= 0 || newX >= width) newDx = -newDx;
        if (newY <= 0 || newY >= height) newDy = -newDy;

        setDir({ dx: newDx, dy: newDy });

        return { x: newX, y: newY };
      });
    };

    const interval = setInterval(move, 16);
    return () => clearInterval(interval);
  }, [isFloating, dir]);

  const handleClick = () => {
    if (!isFloating) {
      setIsFloating(true);
      setIsPlaying(true);
      audio.play();
    } else {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {!isFloating ? (
        <button
          onClick={handleClick}
          className="fixed top-0 z-10 left-0 w-full h-full bg-blue-600/25 text-white text-1xl md:text-2xl font-bold flex justify-center items-center"
        >
          🎵 Play Music
        </button>
      ) : (
        <button
          onClick={handleClick}
          style={{
            left: pos.x,
            top: pos.y,
          }}
          className="fixed w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-red-500 text-white flex items-center justify-center md:shadow-lg"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
      )}
    </>
  );
}
