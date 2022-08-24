// creating class
export class Router{
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

   route(e){
    e = e || window.event
    
    // prevent the "anchor" tag from performing it's default behavior of navigating directly to the target link
    e.preventDefault()
  
    // update url in the browser
    window.history.pushState({}, "", e.target.href);
    this.handle()
  }
  
   handle(){
    // capturing the pathname from the current location
    const {pathname} = window.location
    
    // selecting a route from the routes array
    const route = this.routes[pathname] || this.routes[404]
  
    // promise being created
    // return from '.then' happens in the next '.then'
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#content').innerHTML = html
      })
      
      this.background()
    }
    
    background(){
      const {pathname} = window.location
      const cssVariable = document.documentElement.style
  
     if(pathname == '/'){
      cssVariable.setProperty('--background', 'url(images/mountains-universe.png)')
     } 
     else if(pathname == '/universe'){
      cssVariable.setProperty('--background', 'url(images/mountains-universe02.png)')
     }
     else if(pathname == '/exploration'){
      cssVariable.setProperty('--background', 'url(images/mountains-universe-3.png)')
     }
    }
    
}
