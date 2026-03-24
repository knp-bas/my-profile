<p align="center">
  <img src="https://media.discordapp.net/attachments/1265290601201537024/1486088859413647510/image.png?ex=69c43b9a&is=69c2ea1a&hm=b2a37fe06252019172cafeba2386a22f9dc842519f73300aa0b0a547a073cd9d&=&format=webp&quality=lossless&width=1452&height=864" width="600" />
</p>

# My Profile

A personal portfolio website that displays profile information on a modern landing page. The frontend fetches data from a REST API at render time and presents it using a clean, section-based layout.

---

## Stack

### Frontend — `my-profile-ui`

| Technology | Version |
|---|---|
| Next.js | 16 |
| React | 19 |
| TypeScript | 5 |
| Ant Design | 6 |
| @ant-design/nextjs-registry | 1 |

### Backend — `my-profile-api`

| Technology | Version |
|---|---|
| C# / .NET | 8 |
| ASP.NET Core Web API | 8 |
| Swagger / OpenAPI | (Swashbuckle 6) |

---

## Install

### API

No manual install step is required. NuGet packages are restored automatically when you build or run the project via Visual Studio or the dotnet CLI.

### Frontend

```bash
cd my-profile-ui
npm install
```

---

## Run

Both the API and the frontend must be running at the same time.

### 1. Start the API

**Option A — dotnet CLI (HTTP, port 5018)**

```bash
cd my-profile-api/my-profile-api
dotnet run --launch-profile http
```

- API base URL: `http://localhost:5018`
- Swagger UI: `http://localhost:5018/swagger`

**Option B — Visual Studio / IIS Express (port 29750)**

Select the `IIS Express` launch profile in Visual Studio and press Run.

- API base URL: `http://localhost:29750`

### 2. Configure the frontend environment

Create or update `my-profile-ui/.env.local` to match the API port you chose above:

```env
# If using dotnet run (Option A)
NEXT_PUBLIC_API_URL=http://localhost:5018

# If using IIS Express (Option B)
NEXT_PUBLIC_API_URL=http://localhost:29750
```

### 3. Start the frontend

```bash
cd my-profile-ui
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
my-profile/
  my-profile-api/          # C# .NET 8 REST API
    my-profile-api/
      Controllers/
        ProfileController.cs   # GET /api/profile
      Models/
        Profile.cs             # Response model classes
      Program.cs               # App setup + CORS
  my-profile-ui/           # Next.js frontend
    app/
      components/
        ProfileView.tsx        # Root client component
        sections/              # Page sections (Hero, About, Experience, ...)
        ui/                    # Shared UI components (SectionHeading, ContactItem)
      lib/
        theme.ts               # Ant Design theme + color constants
      types/
        profile.ts             # TypeScript interfaces
      page.tsx                 # Server component — fetches profile data
      layout.tsx               # Root layout with AntdRegistry
```
