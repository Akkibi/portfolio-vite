import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { AboutComponent } from './components/AboutRender'
import { HomeComponent } from './components/HomeRender'
import LoadAnimation from './components/LoadAnimationComponent'
import App from './App'
import './index.css'
import projectData from './data.json'
import LoadProject from './components/LoadProjectComponent'
import LoadAbout from './components/LoadAboutComponent'

interface Project {
  name: string
  date: string
  title: string
  description: string
  images: string[]
  videos: string[]
  link: string[]
  colors: string[]
}

const categorie0Projects = Object.keys(projectData['Developer']).length
const categorie1Projects = Object.keys(projectData['2DArtist']).length
const categorie2Projects = Object.keys(projectData['3DArtist']).length
const countData: Array<number> = [
  categorie0Projects,
  categorie1Projects,
  categorie2Projects,
  categorie0Projects + categorie1Projects + categorie2Projects,
]

let categoryList: Array<string> = []

projectData['Developer'].forEach((element) => {
  categoryList.push(element.name)
})
projectData['2DArtist'].forEach((element) => {
  categoryList.push(element.name)
})
projectData['3DArtist'].forEach((element) => {
  categoryList.push(element.name)
})

const generateProjectRoutes = (data: any) => {
  const categoryArrays = Object.values(data)
  let ProjectIndex = 0
  const output: any = categoryArrays.flatMap((category: any, index: number) => {
    return category.map(
      (project: Project) => (
        ProjectIndex++,
        {
          path: project.name,
          element: (
            <LoadProject
              projectData={project}
              projectIndex={ProjectIndex}
              index={index + 1}
              countData={countData}
              projectList={categoryList}
            />
          ),
        }
      )
    )
  })
  return output
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App countData={countData} projectList={categoryList} />,
    children: [
      {
        path: '/',
        element: <LoadAnimation anim={HomeComponent} />,
      },
      {
        path: 'about',
        element: <LoadAbout anim={AboutComponent} />,
      },
      ...generateProjectRoutes(projectData),
    ],
  },
])

let container: HTMLElement | null = null

document.addEventListener('DOMContentLoaded', function () {
  if (!container) {
    container = document.getElementById('root') as HTMLElement
    const root = createRoot(container)
    console.log(router)
    root.render(<RouterProvider router={router} />)
  }
})

reportWebVitals()

// For this kind of Json architecture:
// ```
// {
//   "Developer": [
//     {
//       "name": "portrait-chinois",
//       "date": "18/03/2022",
//       "title": "Portrait Chinois",
//       "description": "Ce projet me représente (de 2021) en 8 chauses. Ce site à été créé dans le but d'en apprendre plus sur le code en js. C'est aussi le premier site avec lequel j'ai utilisé Git et Github.",
//       "images": [
//         "ecran.png",
//         "Frame3.png",
//         "Frame54.png",
//         "Frame81.png",
//         "Frame17.png"
//       ],
//       "videos": [],
//       "link": ["https://akkibi.github.io/myfirstproject/", "Lien vers le site."]
//     },
// "2DArtist": [
//     {
//       "name": "akkibi-chromatic",
//       "date": "26/12/2022",
//       "title": "Animation logo Akkibi",
//       "description": "Ce projet m'a appris a faire des animations sur figma en utilisant un peut de créativité et de smart animation.",
//       "images": ["carre.jpg", "stretch.jpg", "normal.jpg", "colors-break.jpg"],
//       "videos": ["iulmVPjB35U.jpg"],
//       "link": ["", ""]
//     },
//     {
//       "name": "kirby",
//       "date": "16/10/2021",
//       "title": "kirby design",
//       "description": "Ce projet m'a appris à faire des effets 3d sur figma en jouant avec les lumières.",
//       "images": ["kirby.png", "kirby-king.png"],
//       "videos": [],
//       "link": ["", ""]
//     },
// "3DArtst": [
//     {
//       "name": "araignee-qui-marche",
//       "date": "29/11/2022",
//       "title": "Mr spider walkin'",
//       "description": "Ce projet m'a appris à créer une animation procédurale de marche pour une araignée.",
//       "images": ["step4.png", "no-shader.png"],
//       "videos": ["tTwpU5etMNE.png", "_X9301nrFYA.png", "XbXeqAd5QDg.png"],
//       "link": ["", ""]
//     },
//     {
//       "name": "firby",
//       "date": "25/02/2023",
//       "title": "3D Cursed worm Firby",
//       "description": "C'est mon premier personnage 3D avec des poils, un Furby étrange. Je l'ai créé avec l'intention d'en apprendre plus sur la génération de particules sur blender.",
//       "images": [
//         "firby-close-128-lighten.jpg",
//         "firby-large.jpg",
//         "firby-wireframe.jpg"
//       ],
//       "videos": [],
//       "link": ["", ""]
//     }
//   ]
// }
// ```
