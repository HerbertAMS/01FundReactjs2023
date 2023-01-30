import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https:/github.com/HerbertAMS.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Herbert Severino</strong>
                            <time title="27 Janeiro às 18:17h" dateTime="2023-01-27 18:17:04">
                                Cercar de 1h atŕas
                            </time>

                        </div>

                        <button title="Deletar um comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}