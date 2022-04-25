import { ListAlbums } from "./components/ListAlbums";
import { useGetAlbum } from "./hooks/useGetAlbum";

export const App = () => {
  const [loading, albums, currentYear, years, setCurrentYear, currentAlbums] =
    useGetAlbum();

  return (
    <>
      <div className="row">
        <div className="container">
          <div className="md-5 col-2" style={{ float: "right" }}>
            <select
              className="form-select"
              aria-label="select year"
              onChange={(e) => setCurrentYear(Number(e.target.value))}
            >
              <option defaultChecked value="0">
                Все
              </option>
              {years.map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <ListAlbums
              albums={albums}
              currentAlbums={currentAlbums}
              loading={loading}
              year={currentYear}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
