import { Server, Battery, Cpu, Wind } from 'lucide-react';

const solutions = [
  {
    title: 'Green Data Centers',
    description: 'Energy-efficient data centers powered by renewable energy sources.',
    icon: Server,
  },
  {
    title: 'Sustainable Hardware',
    description: 'Eco-friendly computer components and devices built to last.',
    icon: Cpu,
  },
  {
    title: 'Clean Energy Tech',
    description: 'Innovative solutions for renewable energy implementation.',
    icon: Wind,
  },
  {
    title: 'Energy Storage',
    description: 'Advanced battery technology for sustainable energy storage.',
    icon: Battery,
  },
];

export default function Solutions() {
  return (
    <div id="solutions" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Sustainable Technology Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of sustainable technology solutions helps businesses reduce their environmental impact.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {solutions.map((solution) => (
              <div key={solution.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                  <solution.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{solution.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
