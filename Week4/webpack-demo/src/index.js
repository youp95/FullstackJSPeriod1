import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './icon.png';
import 'bootstrap/dist/css/bootstrap.css'



// You must implement the makeTable(..) function, used below:
const table = makeTable(persons);
document.getElementById('my-table').innerHTML = table;


 function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Adding button feature
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    // Adding image to div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    const name = 'Kurt Wonnegut';
    setTimeout(() => alert(`Hello there from ${name}`), 1000);

    

    return element;
  }
  
  document.body.appendChild(component());
  