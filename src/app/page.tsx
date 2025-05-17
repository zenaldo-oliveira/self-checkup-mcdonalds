import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="rounded-xl border-red-500 p-5">
      <h1 className="text-red-500">hello world</h1>
      <Button>FWS 7.0</Button>
      <Input placeholder="Bora fechar com felipao"></Input>
    </div>
  );
};

export default HomePage;
