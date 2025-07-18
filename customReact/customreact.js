function coustomRender(reactElement,Container){

    // code get reapted
    /*const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    Container.appendChild(domElement)*/

    // Here i use loop to avoid the repetation of code
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props
        [prop])
    }
    Container.appendChild()

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https:google.com',
        target: '_blanck'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

coustomRender(reactElement, mainContainer)

