import SearchResultItem from "./SearchResultItem";
import "./style.css";

export default function SearchResults({ results, isSearching }) {
  return (
    <div className="list-result-personal">
      {!results?.length && isSearching && (
        <p className="non-exist">No existen resultados</p>
      )}
      {results?.map((value) => {
        return (
          <>
            <SearchResultItem key={value.id} {...value} />
          </>
        );
      })}
    </div>
  );
}
