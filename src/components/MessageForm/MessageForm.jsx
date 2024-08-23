function MessageForm() {
  const handleSubmit = console.log('Hello');
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} />
      <button type="submit">Send</button>
    </form>
  );
}
export default MessageForm;
