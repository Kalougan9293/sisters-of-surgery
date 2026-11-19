import { HeroVideo } from "@/components/home/HeroVideo";
import { LatestVideos } from "@/components/home/LatestVideos";
import { getFeaturedVideo, getLatestVideos } from "@/data/videos";

export default function HomePage() {
  const featured = getFeaturedVideo();
  const latest = getLatestVideos(4, featured.slug);

  return (
    <>
      <HeroVideo video={featured} />
      <LatestVideos videos={latest} />
    </>
  );
}
