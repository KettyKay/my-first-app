export default function Home() {
  return (
    <main style={{ padding: "60px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        ZamCreator
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px", color: "#555" }}>
        Support creators directly from anywhere
      </p>

      <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
        <button style={{
          padding: "12px 20px",
          fontSize: "16px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          border: "none"
        }}>
          Join as Creator
        </button>

        <button style={{
          padding: "12px 20px",
          fontSize: "16px",
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
          borderRadius: "8px"
        }}>
          Explore Creators
        </button>
      </div>
    </main>
  );
}