import React from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-32">
        {/* Background design */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card max-w-4xl mx-auto p-10 md:p-12 text-center">
            <h1 className="mb-4">Research & <span className="text-sugarcane-yellow">Studies</span></h1>
            <p className="text-lg mb-0 max-w-2xl mx-auto">
              Explore the scientific evidence behind the health benefits of sugarcane juice, backed by research and clinical studies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Research Studies */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 gap-10">
            {studies.map((study, index) => (
              <div key={index} className="glass-card p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-sugarcane-yellow/20 text-sugarcane-yellow text-sm mb-3">
                          {study.year}
                        </span>
                        <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                        <p className="text-text-secondary text-sm mb-4">{study.authors}</p>
                      </div>
                      <div>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href={study.link} target="_blank" rel="noopener noreferrer">
                            Read Full Study
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-sugarcane-yellow mb-2">Abstract</h4>
                        <p className="text-text-secondary">{study.abstract}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sugarcane-yellow mb-2">Key Findings</h4>
                        <ul className="space-y-2">
                          {study.findings.map((finding, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-sugarcane-yellow mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Expert Endorsements */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Expert <span className="text-sugarcane-yellow">Endorsements</span></h2>
            <p className="max-w-2xl mx-auto">
              Health professionals recommend sugarcane juice as part of a balanced diet for its numerous health benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {endorsements.map((endorsement, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-sugarcane-yellow mr-4">
                    <img 
                      src={endorsement.image} 
                      alt={endorsement.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{endorsement.name}</h3>
                    <p className="text-text-secondary text-sm">{endorsement.title}</p>
                  </div>
                </div>
                <p className="text-text-secondary italic mb-4">"{endorsement.quote}"</p>
                <div className="flex items-center text-sugarcane-yellow">
                  <span className="text-sm">{endorsement.specialization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-card p-12 max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Experience the <span className="text-sugarcane-yellow">Benefits</span> Yourself</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Try our sugarcane juice today and feel the difference. Pure, natural refreshment backed by science.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/products">Shop Our Products</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/benefits">View Health Benefits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// Research studies data
const studies = [
  {
    year: "2022",
    title: "Antioxidant Properties of Sugarcane Juice and Its Impact on Cellular Health",
    authors: "Singh, A., Patel, R., Thompson, J., et al.",
    abstract: "This study examined the antioxidant properties of fresh sugarcane juice and its potential effects on cellular health. Results showed significant free radical scavenging activity and protective effects against oxidative stress in human cell models.",
    findings: [
      "Sugarcane juice demonstrated high levels of polyphenols and flavonoids, known for their antioxidant properties",
      "Regular consumption was associated with reduced markers of oxidative stress",
      "Cell models showed improved resilience against environmental stressors when treated with sugarcane extract"
    ],
    link: "#"
  },
  {
    year: "2021",
    title: "Nutrient Composition Analysis of Sugarcane Juice: A Comprehensive Review",
    authors: "Martinez, E., Johnson, K., Williams, S., et al.",
    abstract: "This comprehensive review analyzed the nutrient composition of sugarcane juice from various sources worldwide. The study cataloged the vitamin, mineral, and phytonutrient content, highlighting its potential as a natural health supplement.",
    findings: [
      "Sugarcane juice contains over 15 essential vitamins and minerals including iron, calcium, potassium, and magnesium",
      "Natural enzymes present in fresh sugarcane juice may aid digestion",
      "Regional variations in growing conditions affect nutrient density, with organic farming methods showing higher nutrient levels"
    ],
    link: "#"
  },
  {
    year: "2020",
    title: "Effects of Sugarcane Juice Consumption on Athletic Performance and Recovery",
    authors: "Brown, L., Nguyen, T., Smith, R., et al.",
    abstract: "This randomized controlled trial investigated the effects of sugarcane juice consumption on athletic performance and post-exercise recovery in 45 elite athletes. Participants consuming sugarcane juice showed improved endurance and faster recovery times compared to control groups.",
    findings: [
      "Athletes consuming 200ml of fresh sugarcane juice daily showed 12% improvement in endurance metrics",
      "Post-exercise muscle recovery was accelerated, with reduced inflammation markers",
      "Natural electrolytes and carbohydrates in sugarcane juice provided sustained energy without the crash associated with processed sports drinks"
    ],
    link: "#"
  }
];

// Expert endorsements data
const endorsements = [
  {
    name: "Dr. Sarah Johnson",
    title: "Nutritionist, PhD",
    quote: "Sugarcane juice is one of nature's most perfect energy drinks. It provides natural sugars that fuel the body without the additives found in commercial energy drinks.",
    specialization: "Sports Nutrition",
    image: "/images/expert-1.jpg"
  },
  {
    name: "Dr. Michael Chen",
    title: "Endocrinologist",
    quote: "For my patients looking for natural alternatives to processed sweeteners, I often recommend moderate consumption of sugarcane juice for its lower glycemic impact and additional nutrients.",
    specialization: "Diabetes Care",
    image: "/images/expert-2.jpg"
  },
  {
    name: "Prof. Emily Rodriguez",
    title: "Research Scientist",
    quote: "Our laboratory studies have shown impressive antioxidant activity in fresh sugarcane juice, suggesting potential benefits for cellular health and longevity.",
    specialization: "Cellular Biology",
    image: "/images/expert-3.jpg"
  }
]; 