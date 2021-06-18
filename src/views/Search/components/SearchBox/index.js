import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose, isSearching }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    //Limpiamos Input
    setSearchText("");
    onClose();
  };

  return (
    <div className="search-box">
      <h2 className="search-box-title">Buscador de Personal</h2>
      <div className="search-box-buttons">
        <label>
          <input
            className="search-box-input font"
            value={searchText}
            onChange={({ target: { value } }) => setSearchText(value)}
          />
        </label>
        <button
          className="btn-buscar font"
          onClick={() => onSearch(searchText)}
          disabled={!searchText.length}
        >
          {" "}
          Buscar{" "}
        </button>
        {isSearching && (
          <button
            className="btn-cerrar font"
            onClick={handleSearchClick}
            disabled={!searchText.length}
          >
            {" "}
            Cerrar{" "}
          </button>
        )}
      </div>
    </div>
  );
}
