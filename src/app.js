import React from 'react';  //these were from react docs
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'              //yarn add normalize.css
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));



// const Layout = (props) => {
//     return (
//         <div>
//         <p>Header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     );
// };


// const template = (
//     <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//     </div>
// );


//// ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));  had {props.content} in layout between f & h


// //another way, when you pass the <p> into a component like this, you have access to it via the children prop
// //its easier to visualize this than to have some jsx defined elsewhere and pass it in as a prop
// ReactDOM.render((
//     <Layout>
//         <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//         </div>
//     </Layout>
//     ),
//     document.getElementById('app'));
