export default function Impact() {
  return (
    <div id="impact" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Environmental Impact
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Making a measurable difference in the tech industry
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Carbon Reduction
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-yellow-500">100K+</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Renewable Energy
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-yellow-500">85%</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              E-Waste Recycled
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-yellow-500">50T</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
