
const Article = () => {
   return (
      
<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white ">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header className="mb-4 lg:mb-6 not-format">
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
            <div>
              <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">Graphic Designer, educator &amp; CEO Flowbite</p>
              <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
            </div>
          </div>
        </address>
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Best practices for successful prototypes</h1>
      </header>
      <p className="lead">Flowbite is an open-source library of UI components built with the utility-first
        classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
        datepickers.</p>
      <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
        you can think things through before committing to an actual design project.</p>
      <p>But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called
          Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation
        bars, cards, form elements, and more which are conveniently built with the utility classes from
        Tailwind CSS.</p>
      <figure><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt />
        <figcaption>Digital art by Anonymous</figcaption>
      </figure>
    </article></div></main>



    );
};

export default Article;