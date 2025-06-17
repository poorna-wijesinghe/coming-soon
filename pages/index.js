import Head from "next/head";

export default function Home() {  

  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center text-center px-4">
      <Head>
        <title>TattooArtistHub - Coming Soon</title>
      </Head>

      <div className="w-20 h-20 mb-6 bg-accent rounded-full animate-pulse"></div>

      <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4">
        Tattoo Artist Hub
      </h1>

      <p className="text-lg md:text-xl mb-4">
        We're crafting the ultimate global directory for tattoo artists.
      </p>

      <p className="text-sm text-gray-400">
        Your one-stop shop for finding talented tattoo artists from around the
        world.
      </p>
      <p className="text-sm text-gray-400 mb-8">Stay tuned for our launch!</p>

      {/* 🚀 Contact Us Section */}
      <div className="bg-muted/20 p-4 rounded-xl text-sm text-white max-w-md w-full">
        <p className="mb-2">
          Are you a tattoo artist? Want to showcase your portfolio on TattooArtistHub?
        </p>
        <p>
          📬 Contact us at:{" "}
          <a
            href="mailto:info@tattooartisthub.com"
            className="text-accent hover:underline font-semibold"
          >
            info@tattooartisthub.com
          </a>
        </p>
      </div>
    </div>
  );
}
