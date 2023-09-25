function Title({ hidden, ...props }) {
  if (hidden) {
    return null;
  }

  return (
    <>
      <h1 {...props}></h1>
    </>
  );
}

export { Title };
