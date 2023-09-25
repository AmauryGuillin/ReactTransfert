function SearchHeader() {
  return (
    <>
      <div>
        <div>
          <input type="search" placeholder="Rechercher" />
        </div>
        <div>
          <input type="checkbox" name="cb1" />
          <label htmlFor="cb1">N'afficher que les produits en stock</label>
        </div>
      </div>
    </>
  );
}

export { SearchHeader };
