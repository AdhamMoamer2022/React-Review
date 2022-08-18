# React-Review
Just a some basic concepts of React for refresh and review.
# What is React?
    React is a JavaScript library for building user interfaces.
    it s client side only and it is used to create UI components.
    It is maintained by Facebook and a community of individual developers and companies.
    React can be used as a base in the development of single-page or mobile applications.
    It is used in combination with other JavaScript libraries such as React-Router for building single-page applications.
    we can use higher order components to create reusable UI components. and we can use state management libraries like Redux to manage the state of the application.
    also we it will minimize the amount of code we have to write.because we are writing in a declarative way rather than js code which is used the imperative way.
    Different between React and JavaScript is in React we have additional build step as the browser doesn't understand the jsx code.

# Creating a React Project 
    npx create react-app my-app
    if you want to use typescript then you can use the following command 
        npx create-react-app my-app --template typescript

# More About Components & Styling with CSS Classes 
    Components are the building blocks of React applications. and they are just a javascript function which returns jsx which is a javascript code with html tags included
    we should use capital letter for component name.
    we can use className to style the components.

# Building & Reusing Another Component 4 
    we use components so we can use the same the code in different places.
    and to structure the code 

# Pros & Dynamic Content 
    we can use props to pass data to the component.
    we can use the Dynamic expression to show the props value or we can execute any javascript code inside the component using {}.
  
# Handling Events 
    in plain javascript to handle an event on particular element we have to do the below
        document.getElementById('id').addEventListener('click', function(){
            console.log('clicked');
        });
        in React we just add additional attribute on the component
        like we could add it similar to what we do with props for example : onClick={() => console.log('clicked')} -> we use that if we need to execute some javascript code inside the component.
        or we can write the function inside the component and then we can use it in the component.
        we can also use the onClick={this.handleClick} -> this is the best way to handle the event.
 # Introducing State 
    let's talk about state for a while , there is a perfect article for this using this link https://academind.com/tutorials/what-is-state
    state in React is just a variable that's hold the current state of the component it could be any type of data and we can use multiple states in the same component to 
    manage the state of the application.
    state is just to know what this component or block of code is doing.
    React has a build-in concept of state which is called state management.
    using this hook -UseState- we can create a state variable and we can use it in the component.
    thats it it is a simple 
 # Event Props 
    as we can passing attributes and objects and data from component to another using props we can pass event handlers as props.
    event handler are just a function and as we know in javascript functions are first class citizens, so we can treat them ass variables and methods.
    to change the state in a component from a child component we have to pass the function which can change the state as prop to the child component.
    as this attribute or prop is not built in attribute as it is in div,button .... we can name it as we want.
    for example we dona have to name it onclick for click event but we can name it onCancel :)
    