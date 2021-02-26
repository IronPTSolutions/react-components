
function Section({ title, children }) {
  return (
    <section className="Section mb-5">
      <h3 className="text-left mb-4">{title}</h3>
      {children}
    </section>
  );
}

export default Section;
