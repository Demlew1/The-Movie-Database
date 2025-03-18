import NavBar from "./NavBar";
function HomePage() {
  return (
    <div className="bg-[url(src/assets/images/Home-background.jpg)] bg-cover h-screen p-6">
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default HomePage;
