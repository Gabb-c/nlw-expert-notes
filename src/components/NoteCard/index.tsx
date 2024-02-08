export const NoteCard: React.FC = (): JSX.Element => {
  return (
    <button
      type="button"
      className="bg-slate-800 text-left outline-none rounded-md p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400"
    >
      <span className="text-sm font-medium text-slate-300">ha dois dias...</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ex voluptatem dolores
        pariatur quibusdam ipsa ducimus quidem nobis nihil consequatur non nesciunt assumenda vel
        rem ut, quo a vero illo!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black-0 pointer-events-none" />
    </button>
  );
};
