import NewestPost from "../pages/NewestPost.vue"
import PostByCategory from "../pages/PostByCategory.vue"
import PostDetails from "../pages/PostDetails.vue"
import About from "../components/About.vue"
const routes = [
  { path: '/', name: 'home', component: NewestPost },
  { path: '/post/:category/:id', component: PostByCategory },
  { path: '/post-details/:id', component: PostDetails },
  { path: '/about', component: About },
]

export default routes