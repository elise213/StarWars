const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
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

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
