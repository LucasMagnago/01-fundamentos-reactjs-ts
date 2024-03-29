import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar.jsx";

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: string

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/lucasmagnago.png",
			name: "Lucas Magnago de Oliveira",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
			},
			{
				type: "paragraph",
				content:
					"no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2024/03/28 17:42:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/lucasmagnago.png",
			name: "Matheus Magnago de Oliveira",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
			},
			{
				type: "paragraph",
				content:
					"no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2024/03/29 15:42:00"),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
