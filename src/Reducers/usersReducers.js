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
         
 case "DELETE_USER":
   let undeletedUsers = state.users.filter((user) => user.id !== action.payload);
   return {...state, users: undeletedUsers}
     
 case "EDIT_USER":
   return {...state, users: state.users.map((user) =>
    user.id === action.payload.id ?action.payload  : user
 ),}
    default:
       return state;
 }    
 };
 export default usersReducers;