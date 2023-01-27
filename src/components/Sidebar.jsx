import {PencilLine} from 'phosphor-react'

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}      
      src="https://images.unsplash.com/photo-1646666477664-d19273808d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZW5nZW5lZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <img 
            className={styles.avatar}
            src="https://github.com/HerbertAMS.png" 
        
        />
        <strong>Herbert Severino</strong>
        <span>Mechanical Engineer</span>
      </div>  

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
