import React from 'react';
import ReactDom from 'react-dom'


/*function App() {
    return <h1>Benim adım Samed</h1>;
}*/

class App2 extends React.Component {
render () {
    return <h1>Benim adım Samed</h1>;
}
}


ReactDom.render(
    <App/>,
    document.getElementById('root')
);