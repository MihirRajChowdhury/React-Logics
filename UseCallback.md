// UseCallBack hook --> It is used when you are passing a function to a child component and even when your funciton in not changed the child component rerenders it happens because the reference of function keeps on changing and to stop that we use UseCallBack hook we wrap the function being passed to use call back hook 

eg- 
useCallback(function work(){
    console.log("I am working")
})

<Todo work={work}/>


React.memo ---> it stops the rerendering of children component when the props being passed to children doesn't change and the parent is rerendering we use it for this 

memo(.....)


useMemo hook --> it is use to memoize expensive operations and to stop them from happening when they aren't needed. 