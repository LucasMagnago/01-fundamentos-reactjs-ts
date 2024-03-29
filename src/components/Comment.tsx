import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}
export function Comment({ content, onDeleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount(likeCount + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/lucasmagnago.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Lucas Magnago de Oliveira</strong>
							<time
								title="28 de março às 14:14h"
								dateTime="2024-03-28 14:14:00"
							>
								Cerca de 1h atrás
							</time>
						</div>
						<button onClick={handleDeleteComment} title="Deleter comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={20} />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
