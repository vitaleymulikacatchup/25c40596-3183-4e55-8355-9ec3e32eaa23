"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <nav className="fixed top-0 w-full bg-white shadow-md p-4 z-10">
        <h1 className="text-2xl font-bold">MemecoinX</h1>
        <ul className="flex space-x-4">
          <li><a href="#hero">Hero</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#how-to-buy">How to Buy</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>
      </nav>
      <div id="hero" data-section="hero" className="bg-gradient-radial-to-br from-pink-500 to-orange-500 scroll-mt-24">
        <TokenBillboardHero title="Welcome to MemecoinX" subtitle="The future of meme tokens!" contractAddress="0x1234567890" copyButtonText="Copy Address" copiedText="Address Copied" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="MemecoinX combines community and innovation, providing a fun and engaging space for meme enthusiasts to communicate and invest." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Tokenomics Overview" description="Discover our comprehensive tokenomics strategy that focuses on sustainability and growth." tokenData={[{ value: "1M", description: "Total Supply" }, { value: "50%", description: "Liquidity" }]} />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline items={[{ year: "2023", title: "Launch", description: "Our project goes live!" }, { year: "2024", title: "Expansion", description: "New features and partnerships coming soon!" }]} className="my-8" />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis logoSrc="/images/logo.svg" logoAlt="MemecoinX Logo" columns={[{ items: [{ label: "Privacy Policy", onClick: () => alert('Privacy policy clicked') }] }] } logoText="MemecoinX" className="bg-white" />
      </div>
    </SiteThemeProvider>
  );
}