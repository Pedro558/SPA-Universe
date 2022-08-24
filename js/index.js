/*class Route{
  route(e){
    e = window.event || e
    e.preventDefault()
    
    window.history.pushState(null, null, e.target.href)

    this.handle()
  }

  routes = {
    "/": "/pages/home.html",
    "/universe": "/pages/universe.html",
    "/exploration": "/pages/exploration.html"
  }

  handle = async() => {
    const pathname = location.pathname
    const route = this.routes[pathname]
    const html = await fetch(route).then(data => data.text())

    let content = document.getElementById('content')
    content.innerHTML = html
  }
}

const router = new Route()
router.handle()*/


import {Router} from "./router.js"

const router = new Router()

router.add('/', "/pages/home.html")
router.add('/exploration', "/pages/exploration.html")
router.add('/universe', "/pages/universe.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()


const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
  const nav = document.getElementById('nav-bar')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)


