import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import { GenreResponseProps } from "../App";

interface sideBarProps {
  selectedGenre: number;
  genres: Array<GenreResponseProps>;
  handleClickButton: (id: number) => void;
}

export function SideBar({
  selectedGenre,
  genres,
  handleClickButton,
}: sideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
