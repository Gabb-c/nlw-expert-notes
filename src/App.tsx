import logo from "@assets/logo-nlw-expert.svg";
import { NoteCard } from "@components/NoteCard";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert Logo" />
      <form className="w-full" action="submit" method="post">
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          type="text"
          placeholder="Busque em suas notas..."
          name=""
          id=""
        />
      </form>

      <div className="h-1 bg-slate-700 rounded-md" />

      <div className="grid grid-cols-3 auto-rows-[258px] gap-6">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};
