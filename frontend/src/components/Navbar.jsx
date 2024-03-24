import '../App.css'



const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-with-frame">


    <div class="container-fluid">
        <a class="navbar-brand" href="/">MyCoin</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                <a class="nav-link" href="/About">About</a>
                <a class="nav-link" href="/SignNavbox">Signup</a>
                <a class="nav-link" href="#">Contact</a>
                <a class="nav-link" href="/AccountHome">My Account</a>
            </div>
        </div>
    </div>
</nav>
  );
};



export default Navbar;