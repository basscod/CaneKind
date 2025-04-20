"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

// Define the type for a single data point
interface NutrientDataPoint {
  name: string;
  Calories_kcal: number;
  Carbohydrates_g: number;
  Total_Sugars_g: number;
  Potassium_mg: number;
}

// Define the props for the chart component
interface BenefitsChartProps {
  data: NutrientDataPoint[];
}

export const BenefitsChart: React.FC<BenefitsChartProps> = ({ data }) => {
  // Recharts components often trigger hydration errors if not properly handled.
  // Ensuring it only renders client-side helps prevent this.
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // You can return a placeholder or null during server rendering / hydration mismatch
    return <div style={{ height: '400px' }} className="w-full bg-gray-200/10 animate-pulse rounded-lg"></div>;
  }

  return (
    <Card className="p-6 shadow-lg max-w-4xl mx-auto glass-card">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
          <XAxis dataKey="name" />
          <YAxis />
          {/* Apply custom styles to Tooltip to match the rest of the page */}
          <Tooltip 
            contentStyle={{ 
                backgroundColor: 'rgba(30, 41, 59, 0.8)', // Darker background
                backdropFilter: 'blur(5px)', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                borderRadius: '0.5rem',
                color: '#e2e8f0' // Lighter text color
            }}
            itemStyle={{ color: '#e2e8f0' }} // Ensure item text is also light
            cursor={{ fill: 'rgba(251, 191, 36, 0.1)' }} // Match yellow accent
          />
          <Legend />
          <Bar dataKey="Calories_kcal" fill="#fbbf24" name="Calories (kcal)" radius={[4, 4, 0, 0]}/>
          <Bar dataKey="Carbohydrates_g" fill="#84cc16" name="Carbs (g)" radius={[4, 4, 0, 0]}/>
          <Bar dataKey="Total_Sugars_g" fill="#f97316" name="Sugars (g)" radius={[4, 4, 0, 0]}/>
          <Bar dataKey="Potassium_mg" fill="#3b82f6" name="Potassium (mg)" radius={[4, 4, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}; 