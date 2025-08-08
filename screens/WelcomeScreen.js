export default function Login() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email: </label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password: </label>
          <input type="password" placeholder="Your password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
