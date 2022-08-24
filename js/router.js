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
      const { pathname } = window.location
      const cssVariable = document.documentElement.style
      const listItem = document.querySelectorAll('.menu-item')

      listItem.forEach((item) =>{
        item.firstChild.classList.remove('focus')
      })

      switch( pathname ){
        case '/':
          cssVariable.setProperty('--background', 'url(images/mountains-universe.jpg)')
          listItem[0].firstChild.classList.add('focus')
          break

        case '/universe':
          cssVariable.setProperty('--background', 'url(images/mountains-universe02.jpg)')
          listItem[1].firstChild.classList.add('focus')
          break

        case '/exploration':
          cssVariable.setProperty('--background', 'url(images/mountains-universe-3.jpg)')
          listItem[2].firstChild.classList.add('focus')
          break

        default:
          cssVariable.setProperty('--background', 'url(https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/pt/files/2013/12/http_code_404_error.jpg?itok=uFS5CFuQ)')
      }
    }
}
