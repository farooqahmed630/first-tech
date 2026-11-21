export default function Header(){
  return <header className="header"><a className="logo" href="#">⚡ TechPulse</a>
  <nav><a className="active" href="#">Home</a><a href="#tools">AI Tools ▾</a><a href="#blogs">Guides ▾</a><a href="#blogs">Reviews ▾</a><a href="#blogs">Blog ▾</a><a href="#why">About</a></nav>
  <div className="header-actions"><input placeholder="Search anything..." aria-label="Search"/><button className="btn">Subscribe</button></div></header>
}
