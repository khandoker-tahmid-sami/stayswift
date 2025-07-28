const Search = ({ fromList }) => {
  return (
    <div className="lg:max-h-[250px] mt-6">
      <div className="container">
        <div className={`search-params ${fromList ? "!shadow-none" : ""}`}>
          <div>
            <span>Destination</span>
            <h4 className="mt-2">
              <select
                name="destination"
                id="destination"
                className="custom-select"
              >
                <option value="Bali">Bali</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saint Martin">Saint Martin</option>
              </select>
            </h4>
          </div>

          <div>
            <span>Check in</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkin"
                id="checkin"
                className="custom-date"
              />
            </h4>
          </div>

          <div>
            <span>Checkout</span>
            <h4 className="mt-2">
              <input
                type="date"
                name="checkout"
                id="checkout"
                className="custom-date"
              />
            </h4>
          </div>
        </div>

        <button className="search-btn mt-4">
          🔍️ {fromList ? "Modify Search" : "Search"}
        </button>
      </div>
    </div>
  );
};

export default Search;
