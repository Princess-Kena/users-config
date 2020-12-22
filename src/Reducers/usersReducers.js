 const initialState = {
     users:[
         {name: "Anita", email:"ann@gmail.comm", gen: "23"},
         {name: "Paa", email:"paa@gmail.comm", gen: "15"},
         {name: "Danny", email:"danny@gmail.comm", gen: "7"}

   ],
 };
 const usersReducers =(state = initialState, action ) => {
 switch (action.type) {
     case "ADD_USER":
         return state;
 
     default:
         return state;
 }    
     
 };
 export default usersReducers;