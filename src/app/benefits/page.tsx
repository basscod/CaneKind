import React from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { Card } from "@/components/ui/card";
import { BenefitsChart } from "@/components/charts/benefits-chart";

// Nutrient data from user input
const nutrientData = [
  { name: 'Sugarcane Juice', Calories_kcal: 49, Carbohydrates_g: 11.5, Total_Sugars_g: 8.5, Potassium_mg: 160 },
  { name: 'Orange Juice', Calories_kcal: 45.8, Carbohydrates_g: 10.8, Total_Sugars_g: 10.4, Potassium_mg: 167 },
  { name: 'Coconut Water', Calories_kcal: 19, Carbohydrates_g: 3.7, Total_Sugars_g: 3.7, Potassium_mg: 254 },
];

export default function BenefitsPage() {
  return (
    <PageLayout>
       {/* Using a simpler hero section for this specific data page */}
       <section className="relative overflow-hidden py-20 md:py-32">
         <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-sugarcane-yellow/10 blur-3xl"></div>
         </div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nutritional Insights: <span className="text-sugarcane-yellow">Sugarcane Juice</span></h1>
             <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                Explore the detailed nutritional breakdown, key health benefits, and practical uses of fresh sugarcane juice compared to other popular drinks.
            </p>
         </div>
       </section>


      {/* Nutrient Comparison Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Nutrient Comparison (per 100mL)</h2>
          <BenefitsChart data={nutrientData} />
          <div className="mt-8 text-center text-text-secondary space-y-1 max-w-xl mx-auto">
              <p><strong>Calories:</strong> Sugarcane ≈ Orange » Coconut</p>
              <p><strong>Sugars:</strong> Orange &gt; Sugarcane » Coconut</p>
              <p><strong>Potassium:</strong> Coconut » Orange ≈ Sugarcane</p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center">Key Benefits of Sugarcane Juice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 shadow-md glass-card">
                <h3 className="text-xl font-semibold mb-3 text-sugarcane-yellow">Rapid Energy & Hydration</h3>
                <p className="text-text-secondary">Provides ≈49 kcal and 11.5g of natural carbohydrates per 100mL for a quick energy boost. Its ~160mg potassium helps replace electrolytes lost through sweat, making it a great pick-me-up, especially in hot climates or after exercise.</p>
              </Card>
              <Card className="p-6 shadow-md glass-card">
                <h3 className="text-xl font-semibold mb-3 text-sugarcane-yellow">Useful Electrolyte Profile</h3>
                <p className="text-text-secondary">While coconut water leads in potassium, sugarcane juice matches orange juice and provides small amounts of calcium, magnesium, and iron. Beneficial for those needing extra potassium or prone to cramps.</p>
                 <p className="text-xs mt-3 text-gray-400 italic">Source: Redcliffe Labs</p>
              </Card>
              <Card className="p-6 shadow-md glass-card">
                <h3 className="text-xl font-semibold mb-3 text-sugarcane-yellow">Antioxidant Power</h3>
                <p className="text-text-secondary">Contains &gt;150 mg GAE/100mL of polyphenols, offering significant antioxidant potential. Studies suggest possible protective effects against oxidative stress and inflammation.</p>
                 <p className="text-xs mt-3 text-gray-400 italic">Source: PubMed</p>
              </Card>
              <Card className="p-6 shadow-md glass-card">
                <h3 className="text-xl font-semibold mb-3 text-sugarcane-yellow">Moderate Glycemic Index</h3>
                <p className="text-text-secondary">Has a surprisingly moderate GI of ~43. However, its high sugar content means a high glycemic load if consumed in large quantities. A 200mL serving (GL ≈ 9) is generally well-tolerated by healthy individuals.</p>
                 <p className="text-xs mt-3 text-gray-400 italic">Source: Signos</p>
              </Card>
               <Card className="p-6 shadow-md glass-card">
                <h3 className="text-xl font-semibold mb-3 text-sugarcane-yellow">Oral Health Minerals (Emerging)</h3>
                <p className="text-text-secondary">Supplies trace fluoride and calcium. Its alkaline nature might help buffer oral acidity, though evidence is still limited.</p>
              </Card>
               <Card className="p-6 shadow-md glass-card">
                <h3 className="text-xl font-semibold mb-3 text-sugarcane-yellow">Processing Matters</h3>
                <p className="text-text-secondary">Fresh, chilled juice preserves the most nutrients and antioxidants. Heat treatments or pasteurization can reduce antioxidant activity, and bottled versions often contain added sugar.</p>
              </Card>
            </div>
        </div>
      </section>

       {/* Practical Ways to Enjoy */}
      <section className="py-16">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center">Practical Ways to Enjoy the Benefits</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <Card className="p-6 shadow-sm border border-white/10">
                    <h4 className="font-semibold text-lg mb-2">Quick Re-fuel During Activity (&ge; 60 min)</h4>
                    <p className="text-sm text-text-secondary">Dilute 150–200 mL juice 1:1 with cold water, add a pinch of sea salt. Consume every 45 min for ~12–15 g carbs and ~160 mg K.</p>
                </Card>
                 <Card className="p-6 shadow-sm border border-white/10">
                    <h4 className="font-semibold text-lg mb-2">Post-Exercise Recovery</h4>
                    <p className="text-sm text-text-secondary">Blend 250 mL juice with 15 g whey or soy protein isolate for fast carbs and protein to aid glycogen refill and muscle repair.</p>
                </Card>
                 <Card className="p-6 shadow-sm border border-white/10">
                    <h4 className="font-semibold text-lg mb-2">Antioxidant Boost</h4>
                    <p className="text-sm text-text-secondary">Mix equal parts cane juice and lime juice. The citric acid helps stabilize polyphenols and adds Vitamin C. Drink within 30 minutes.</p>
                </Card>
                 <Card className="p-6 shadow-sm border border-white/10">
                    <h4 className="font-semibold text-lg mb-2">Summer Rehydration</h4>
                    <p className="text-sm text-text-secondary">Freeze diluted juice (1:1 with water) in ice-pop molds for a refreshing, electrolyte-rich treat without plastic waste.</p>
                </Card>
             </div>
        </div>
      </section>

      {/* Safety and Considerations */}
      <section className="py-16 bg-yellow-900/10">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-yellow-500">Important Considerations</h2>
             <div className="max-w-3xl mx-auto space-y-6">
                <Card className="p-6 bg-yellow-100/10 border border-yellow-500/30 text-yellow-200">
                     <div className="flex items-start">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 flex-shrink-0 text-yellow-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div>
                            <h4 className="font-semibold text-lg text-yellow-400 mb-1">Hygiene is Crucial</h4>
                            <p className="text-yellow-200/90">Due to its high sugar content, sugarcane juice is prone to microbial growth (E. coli, Salmonella). Always ensure hygienic pressing, use clean ice, and consume immediately after preparation.</p>
                             <p className="text-xs mt-2 text-yellow-400/70 italic">Source: PMC</p>
                        </div>
                    </div>
                </Card>
                 <Card className="p-6 bg-yellow-100/10 border border-yellow-500/30 text-yellow-200">
                    <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 flex-shrink-0 text-yellow-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                         <div>
                            <h4 className="font-semibold text-lg text-yellow-400 mb-1">Who Should Be Cautious?</h4>
                            <p className="text-yellow-200/90">Individuals with diabetes or insulin resistance (due to high glycemic load), those on low-potassium diets for renal issues, or anyone tracking calorie intake should moderate their consumption.</p>
                             <p className="text-xs mt-2 text-yellow-400/70 italic">Source: Healthline</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
      </section>

      {/* Bottom Line */}
       <section className="py-20 text-center">
         <div className="container mx-auto px-4">
             <h2 className="text-3xl font-semibold mb-8">The Bottom Line</h2>
             <Card className="p-8 md:p-12 shadow-lg max-w-4xl mx-auto glass-card bg-gradient-to-br from-lime-900/20 via-transparent to-yellow-900/20">
                <p className="text-lg md:text-xl leading-relaxed text-text-secondary">
                 Sugarcane juice offers a unique balance: more quick energy than coconut water, coupled with electrolytes and antioxidants that orange juice doesn't fully match. When enjoyed in moderation (≤ 250mL per serving) and sourced hygienically, it's a natural way to hydrate, refuel, and boost polyphenol intake. Be mindful of portion sizes if you have metabolic or renal health concerns.
                </p>
             </Card>
         </div>
      </section>
    </PageLayout>
  );
} 