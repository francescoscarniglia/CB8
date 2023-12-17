import './index.css'

const links = [
    {
        id: 1,
        url: '/',
        title: 'Home'
    },
    {
        id: 2,
        url: '/blog',
        title: 'Blog'
    },
    {
        id: 3,
        url: '/contatti',
        title: 'Contatti'
    }
]
const Navbar = () => {
    return (
			<nav className="navbar">
				<img src="https://img.logoipsum.com/294.svg" alt="" />
				<ul class="navbar__list">
					{links.map((link) => (
						<li id={link.id}>
							{" "}
							<a href={link.url}>{link.title}</a>{" "}
						</li>
					))}
				</ul>
			</nav>
		);
}
export default Navbar