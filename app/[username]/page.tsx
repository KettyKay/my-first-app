export default function CreatorProfile({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;

  return (
    <main style={{ padding: "60px", fontFamily: "Arial" }}>
      
      {/* Profile Picture Placeholder */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "#ddd",
          marginBottom: "20px",
        }}
      />

      {/* Name */}
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
        @{username}
      </h1>

      {/* Bio */}
      <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
        This is a placeholder bio for {username}. Creators will be able to
        describe themselves here.
      </p>

      {/* Social Links */}
      <div style={{ marginTop: "30px" }}>
        <h3>Social Links</h3>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>📺 YouTube</li>
          <li>🎵 TikTok</li>
          <li>📸 Instagram</li>
        </ul>
      </div>

    </main>
  );
}