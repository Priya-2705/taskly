export default function About() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to Taskly
          </h1>
          <p className="mb-8 leading-relaxed">
            Taskly is your go-to task management app designed to simplify your day and supercharge productivity. Whether you're managing personal goals or team projects, Taskly keeps everything organized, intuitive, and stress-free.
            With a sleek interface and smart features like due dates, progress tracking, and custom categories, staying on top of your to-do list has never been easier.
          </p>
          <div className="flex justify-center">
            <a href="/tasks">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}