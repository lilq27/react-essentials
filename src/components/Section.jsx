export default function Secstion({ title, children, ...props }) {
  return (
    <section {...props}>
        {/* ...props => 모든 속성 자동으로 가져옴 */}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
