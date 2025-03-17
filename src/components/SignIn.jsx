function SignIn() {
  return (
    <div className="bg-amber-50 h-screen font-['Ubuntu']">
      <div className="text-center pt-20">
        <p className="font-['Ubuntu'] font-bold text-2xl">
          Unlock a world of endless entertainment
        </p>
        <p className="text-sm">Login to Discover ,Stream, and Enjoy!</p>
      </div>
      <div className="bg-white inline-block">
        <p className="font-bold text-2xl">Sign in</p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col bg-gray-100">
            <label className="font-bold text-sm">Email</label>
            <input
              className="font-['montserrat'] text-xs"
              type="text"
              placeholder="example.email@gmail.com"
            />
          </div>
          <div className="flex flex-col bg-gray-100">
            <label className="font-bold text-sm">Password</label>
            <input
              className="font-['montserrat'] text-xs"
              type="text"
              placeholder="Enter atleast 8+ characters"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
