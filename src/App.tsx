import { Header } from "./components/Header";
import  { Post }  from "./components/Post";
import { Sidebar } from "./components/Sidebar";


import styles from './App.module.css';

import './global.css';

//author: {avatar_url: "", name: "", role: ""}
//publisheAt:Date
//content: String

const posts = [
{
  id:1,
  author: {
    avatarUrl:'https://github.com/erikpolsci.png',
    name: 'Erik Sales',
    role: 'Web Developer'
  },
  content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
        { type: 'link', content: 'jane.design/doctorcare'},              
                
    ],
    publishedAt: new Date('2022-12-03 1:00:00'),
  },

  {
    id:2,
    author: {
      avatarUrl:'https://github.com/smithbsb.png',
      name: 'Cesar Smith',
      role: 'Senior Web Developer'
    },
    content: [
          { type: 'paragraph', content: 'Fala galeraa 👋', },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
          { type: 'link', content: 'jane.design/doctorcare'},              
                  
      ],
      publishedAt: new Date('2022-12-10 1:00:00'),
    },
];


export function App() {
  

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
         })
         
         }
        </main>

      </div>
    </div>
  )
}
 