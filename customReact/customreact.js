
function customRender(reactElement, container) {


/*
    Creating with Basic method

    Creating DOM element
    const domElement = document.createElement(reactElement.type)

    //Passing Html type from react element object
    domElement.innerHTML = reactElement.children

    //passing href from props of react element object
    domElement.setAttribute('href', reactElement.props.href)

    // passing target from props of react element object
    domElement.setAttribute('target', reactElement.props.target)

    // Appending the created domElement to Container 
    container.appendChild(domElement)
*/


    // Doing same with optimized code by passing props with loop

    const domElement = document.createElement(reactElement.type)

    // Passing Children of react element object 
    domElement.innerHTML = reactElement.children

    // Dynamically passing Props of react element object
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    // Appending the created domElement to a container with id root
    container.appendChild(domElement)
}


// This is react element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'

}


// This is container for that we've initialized root element
const mainContainer = document.querySelector('#root')


//Passing react element object and container with id root to render, where we append them
customRender(reactElement, mainContainer)
