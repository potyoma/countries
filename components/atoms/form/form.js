export default function Form({ children, onSubmit, ...formProps }) {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form onSubmit={handleSubmit} {...formProps}>
      {children}
    </form>
  );
}
