'use client';

import React from 'react';
import { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 mt-16">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div key={index} className="flex  gap-12">
          
            <div className="text-blue-500">
              <Icon size={48} />
            </div>
            
           <div className='flex flex-col gap-4'>

            <h3 className="text-2xl  font-bold text-gray-900 dark:text-white">
              {service.title}
            </h3>
            
           
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed">
              {service.description}
            </p>
           </div>
          </div>
        );
      })}
    </div>
  );
}
