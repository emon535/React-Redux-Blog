# React-Redux- Real World Example

> React-redux app using the basic redux features to create a blog post app using Json Placeholder public api and create blog posts.

### How I learned React Redux

#### :rocket: Comparing React Redux main terminology with real world things

:dart: **Store**:

Lets think store as a Real Store. Where I have many data and information. 

:dart: **Reducer**:

Reducer is a person works at my store. I can assign him in many task ( *Actions* ) and make him to re organaise my store ( *read state* ). 

For example if I ask him to ***sort the soap section*** and give him the soap name ***Lux Soap*** he will sort the soap section.

Reducer accepts two parameter
    - ACTION
    - STATE

Like the Store boy, he will need 2 things to do the work.

If we code the state we can see

    const initialState = {
    articles: []
    };

    function rootReducer(state = initialState, action) {
    return state;
    };

    export default rootReducer;


:dart: **Actions**: 

Here the **Actions** is the "type" and "payload" object like this:

        {
            type: 'SORT_THE_SHOP_SECTION', // Which work - Sort the soap
            payload: { brand: 'Lux', id: 1 } // Which brand
        }


Here we can use **Constant** for the type value instade of String. Think of this as a shortcut which you use for the store boy to do any task and he understands the full task.

    export const SORT_SOAP = "SORT_THE_SOAP_SECTION";


Now the code will look like : 

        
    import { SORT_SOAP } from "../constants/action-types";
    export function addArticle(payload) {
    return { type: SORT_SOAP, payload };
    }


### How do you tell the boy to do the task ? 

Before telling this ( how he knows the task ) first set some rule for the store management: 
- The boy can't damage the items in the store ( Can't mutate the store data [Redux principle: immutability.] )
- Can't open the box of the items in the store and change internal items to sort (we can't change the initial state in place.)

> This example may not make sense, but keep in mind : 
> - We can't change the state in place 
> - We can't use impure function for reducer
> -  Remember two key points for avoiding mutations in Redux:
>    - use concat(), slice(), or the spread operator for arrays
>    - use Object.assign() or object spread of objects



***So, how the boy knows what to do: [ Action for Reducer ]***

There is a board in the store where all the instructions are placed. The boy checks for a task and related information for the task.

if we think in code, the reducer checks what is the task from actions [ type of work , payload ] and act accordingly. 

    initialState = {
        soap_brand:[
            // unsorted soap 
        ]
    }

    function rootReducer(state = initialState, action)  {
        if (action.type === SORT_SHOP) {
        return {
            soap_brand:[
                    // Sorted soap 
                ]
            } 
        });
        }
    
        return state;

    }


### :dart:  **Redux store methods**:

- getState - We can know the current **state of the state** of the application/ store
- dispatch - to let reducer know what action is to complete (Posting the task in the task-board )
- subscribe - for listening on state changes . ***Not clear? I will discuss this later*** 
  

### :dart: **Where is React with Redux?**

How I connect react with redux? 

Yes You have given the answer, with ***connect*** we connect the react with redux. We get ***connect***  from *react-redux* library.

#### what is the "connect":

connect is used to connect the react states and actions with redux state and actions with the two following functions;
- mapStateToProps
- mapDispatchToProps


> Always remember: the state in redux comes from reducers.

