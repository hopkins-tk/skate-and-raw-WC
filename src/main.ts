import './style.css';
import './app/skate-wc';

console.log('hello');

const mountPoint = document.getElementById('app');


const App = `
    <h4>SkateJS WC</h4>
    <x-counter test="TEST"></x-counter>
    <my-counter></my-counter>
    <x-hello name="fofof"></x-hello>
`;
mountPoint.innerHTML = App;
