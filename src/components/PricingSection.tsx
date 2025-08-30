import React from 'react';
import { Check, X } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: 'Essential',
      price: 299,
      description: 'Perfect for small businesses getting started',
      features: [
        { text: 'Basic video editing', included: true },
        { text: '1-2 day turnaround', included: true },
        { text: '1080p delivery', included: true },
        { text: 'Basic color correction', included: true },
        { text: 'Raw footage delivery', included: false },
        { text: 'Priority support', included: false },
        { text: 'Multiple revisions', included: false }
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Professional',
      price: 599,
      description: 'Ideal for growing businesses and brands',
      features: [
        { text: 'Advanced video editing', included: true },
        { text: 'Same day turnaround', included: true },
        { text: '4K delivery available', included: true },
        { text: 'Professional color grading', included: true },
        { text: 'Raw footage delivery', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Multiple revisions', included: false }
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 1299,
      description: 'Complete solution for established brands',
      features: [
        { text: 'Cinematic post-production', included: true },
        { text: 'Rush delivery options', included: true },
        { text: '8K capability & HDR', included: true },
        { text: 'Advanced color grading', included: true },
        { text: 'All source files included', included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'Unlimited revisions', included: true }
      ],
      popular: false
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose your perfect plan!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select from our best packages, ensuring a perfect match for your creative needs. 
            Want something custom? We can tailor a solution just for you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${
                plan.popular ? 'ring-2 ring-amber-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600"> / project</span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-amber-500 text-gray-900 hover:bg-amber-400'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;