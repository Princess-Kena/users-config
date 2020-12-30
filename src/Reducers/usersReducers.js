 const initialState = {
    users: [
        { 
          name: "Ahmed Zaky",
          email: "ahmed@gmail.com",
          gen: "12",
          id: "ggnikt668"
        },
        {
          name: "Princess Kena",
          email: "princess@gmail.com",
          gen: "15",
          id: "bdhfj4i75"
        },
        {
          name: "Adwoa Comfort",
          email: "comfy@gmail.com",
          gen: "12",
          id: "rgfmhfu68,"
        },
        {
          name: "Adwoa Comfort",
          email: "comfy@gmail.com",
          gen: "12",
          id: "ghyegn364587"
        },
      ]
     };
 const usersReducers =(state = initialState, action ) => {
 switch (action.type) {
     case "ADD_USER":
         return{...state, users: [...state.users,action.payload]};
 
     default:
         return state;
 }    
     
 };
 export default usersReducers;