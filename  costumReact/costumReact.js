function costumReact(reactElement,container){
  // const domelement=document.createElement(reactElement.type);
  // domelement.innerHTML=reactElement.children;
  // domelement.setAttribute('href',reactElement.props.href);
  // domelement.setAttribute('target',reactElement.props.target);
  // container.appendChild(domelement);
  //if i had more attributes it will be proble for me to set it one by one instead of it i will use forin loop for props
  const domelement=document.createElement(reactElement.type);
  domelement.innerHTML=reactElement.children;
  for (const prop in reactElement.props) {
    if(prop=="children") continue;
    domelement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domelement);

}
const reactElement={
  type:'a',
  props:{
    href:"https://google.com",
    target:'_blank',
  },
  children:'click me to visit google'
}
const maincontainer=document.querySelector('#root')

costumReact(reactElement,maincontainer);