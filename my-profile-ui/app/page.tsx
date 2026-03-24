import ProfileView from "./components/ProfileView";
import type { ProfileResponse } from "./types/profile";

async function getProfile(): Promise<ProfileResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/profile`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function Home() {
  const profile = await getProfile();

  if (!profile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f0f2f5",
          fontFamily: "sans-serif",
        }}
      >
        <p style={{ color: "#6b7280", fontSize: 16 }}>
          Unable to load profile data. Make sure the API is running on{" "}
          <code
            style={{
              background: "#f3f4f6",
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            {process.env.NEXT_PUBLIC_API_URL}
          </code>
          .
        </p>
      </div>
    );
  }

  return <ProfileView profile={profile} />;
}
