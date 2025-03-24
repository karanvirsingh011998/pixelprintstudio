'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const mazeSize = 10;
const initialPlayerPos = { x: 0, y: 0 };
const exitPos = { x: mazeSize - 1, y: mazeSize - 1 };
const walls = new Set([
  "1-0", "1-1", "1-3", "2-3", "3-1", "3-3", "4-2", "4-4", "5-1", "5-3", "6-2",
  "2-5", "3-5", "3-6", "5-5", "6-4", "7-1", "7-3", "7-5", "8-2", "8-4", "8-6",
  "1-7", "2-7", "3-8", "4-6", "5-8", "6-7", "7-8", "8-8", "9-5", "9-7"
]);

export default function NotFound() {
  const router = useRouter();
  const [playerPos, setPlayerPos] = useState(initialPlayerPos);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    const handleMove = (e: KeyboardEvent) => {
      if (hasWon) return;
      let { x, y } = playerPos;
      if (e.key === "ArrowUp" && y > 0 && !walls.has(`${x}-${y - 1}`)) y--;
      if (e.key === "ArrowDown" && y < mazeSize - 1 && !walls.has(`${x}-${y + 1}`)) y++;
      if (e.key === "ArrowLeft" && x > 0 && !walls.has(`${x - 1}-${y}`)) x--;
      if (e.key === "ArrowRight" && x < mazeSize - 1 && !walls.has(`${x + 1}-${y}`)) x++;
      setPlayerPos({ x, y });
      if (x === exitPos.x && y === exitPos.y) setHasWon(true);
    };
    document.addEventListener("keydown", handleMove);
    return () => document.removeEventListener("keydown", handleMove);
  }, [playerPos, hasWon]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <motion.h1
        className="text-8xl font-bold tracking-widest relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        4<span className="text-primary">0</span>4
      </motion.h1>
      <p className="text-lg mt-4">Oops! This maze is even tougher. Can you escape?</p>

      <div className="grid grid-cols-10 gap-1 mt-6 border-2 border-foreground p-2">
        {[...Array(mazeSize)].map((_, row) =>
          [...Array(mazeSize)].map((_, col) => {
            const isWall = walls.has(`${col}-${row}`);
            const isPlayer = playerPos.x === col && playerPos.y === row;
            const isExit = exitPos.x === col && exitPos.y === row;
            return (
              <div
                key={`${col}-${row}`}
                className={`w-6 h-6 flex items-center justify-center text-sm font-bold rounded-md
                  ${isWall ? "bg-gray-500" : "bg-gray-200 dark:bg-gray-800"}
                  ${isPlayer ? "bg-primary" : ""}
                  ${isExit ? "bg-green-500" : ""}`}
              >
                {isPlayer ? "🧑" : isExit ? "🏁" : ""}
              </div>
            );
          })
        )}
      </div>

      {hasWon && <p className="text-lg mt-4 text-green-500">Amazing! You solved the hardest maze! 🎉</p>}

      <div className="mt-4 flex gap-4">
        <Button onClick={() => setPlayerPos(initialPlayerPos)} className="px-6 py-3 text-lg">
          Reset
        </Button>
        <Button onClick={() => router.push("/")} className="px-6 py-3 text-lg">
          Go Home
        </Button>
      </div>
    </div>
  );
}