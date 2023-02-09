const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((result) => {
            setStore({ people: result.results });
            console.log(result);
          })

          .catch((error) => {
            console.log(error, "occurred at my fetch");
          });
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((result) => setStore({ planets: result.results }))
          .catch((error) => {
            console.log(error, "occurred at my fetch");
          });
        fetch("https://swapi.dev/api/vehicles")
          .then((response) => response.json())
          .then((result) => setStore({ vehicles: result.results }))
          .catch((error) => {
            console.log(error, "occurred at my fetch");
          });
      },
getPerson: (index) => {
	const person=getStore().people
	return person[index];
},

getPlanet: (index) => {
	const planet=getStore().planets
	return planet[index];
},

deleteFavorite: (index) => {
  const favorites=getStore().favorites
  let filtered = favorites.filter((f, i) => i !== index)
  setStore({favorites: filtered})
},

addFavorite : (name) => {
  const favorite = getStore().favorites
  favorite.push(name)
  setStore({favorites: favorite})
},
  
    },
  };
};

export default getState;
