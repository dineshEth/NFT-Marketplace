import { Home, Profile, CreateNFT, Collections } from "./pages/index";

function App() {
  return (
    <div className="flex-1 flex-col bg-[#55bc] w-[100vw] h-[100vh]">
      <div className="mx-[10vh] flex-col justify-center ">
        <Home />
        <Profile />
        <Collections />
        <CreateNFT />
      </div>
    </div>
  );
}

export default App;
