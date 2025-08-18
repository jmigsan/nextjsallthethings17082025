const AnotherPage = async () => {
  // throw new Error('Test error: This should trigger error.tsx');
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <div>
      <div>AnotherPage</div>
    </div>
  );
};
export default AnotherPage;
