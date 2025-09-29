// UseCallBack hook --> It is used when you are passing a function to a child component and even when your funciton in not changed the child component rerenders it happens because the reference of function keeps on changing and to stop that we use UseCallBack hook we wrap the function being passed to use call back hook 

eg- 
useCallback(function work(){
    console.log("I am working")
})

<Todo work={work}/>


React.memo ---> it stops the rerendering of children component when the props being passed to children doesn't change and the parent is rerendering we use it for this 

memo(.....)


useMemo hook --> it is use to memoize expensive operations and to stop them from happening when they aren't needed. 


-------------- Routing ----------------

For Routing in React we use BrowseRouter and useNavigate hook now the component in which we are using use navigate hook should be wrapped inside browseRouter please check some notes of it and all 
it helps to not reload the website and giving them the changes 

---------------Lazy loading 

When you are in the need of a particular component then only we will give you that component and if there isn't the need for that piece of code currently then we will not be giving you that code 
we will lazily load the component 