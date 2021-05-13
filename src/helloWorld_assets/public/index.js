import helloWorld from 'ic:canisters/helloWorld';

helloWorld.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
