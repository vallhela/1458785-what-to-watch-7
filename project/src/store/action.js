export const Action = {

  selecteMainScreenCatalogGenre: {
    type: 'SELECT_MAIN_SCREEN_CATALOG_GENRE',
    create(genre){
      return {
        type: this.type,
        payload: genre,
      };
    },
  },
};
