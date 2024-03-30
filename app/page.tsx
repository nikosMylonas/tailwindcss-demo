// import Image from 'next/image';

export default function Home() {
    return (
        <main className="py-8 mt-20">
            <div className="container">
                {/* Hero section 1 */}
                <section>
                    <div className="col-custom col-1 md:col-2 lg:col-3 mr-2 lg:mr-0">
                        <div className="w-full bg-slate-100 rounded-lg">
                            <div className="card-a">
                                <div className="flex flex-col gap-16 content-between">
                                    <div>
                                        <h2 className="text-left md:text-center">
                                            Reliable
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit. Esse,
                                            vitae nisi cupiditate eos quod
                                            explicabo dolore laudantium quas
                                            corporis mollitia!
                                        </p>
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        <a
                                            href="#"
                                            className="text-white bg-seaGreen rounded-md p-4 align-middle no-underline hover:text-white hover:opacity-80 hover:transition hover:duration-300"
                                        >
                                            Read more...
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-slate-100 rounded-lg">
                            <div className="card-a">
                                <div className="flex flex-col gap-16  content-between">
                                    <div>
                                        <h2 className="text-left md:text-center">
                                            Safe
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Maxime
                                            provident nulla accusamus delectus
                                            magnam voluptate ducimus cum numquam
                                            nostrum quae!
                                        </p>
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        <a
                                            href="#"
                                            className="text-white bg-seaGreen rounded-md p-4 align-middle no-underline hover:text-white hover:opacity-80 hover:transition hover:duration-300"
                                        >
                                            Read more...
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="centered-last bg-slate-100 rounded-lg">
                            <div className="centered-last-width">
                                <div className="card-a">
                                    <div className="flex flex-col gap-16 content-between">
                                        <div>
                                            <h2 className="text-left md:text-center">
                                                Available
                                            </h2>
                                            <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Similique consequuntur repellat
                                                ullam eum quasi harum laudantium
                                                recusandae omnis, quos nulla.
                                            </p>
                                        </div>
                                        <div className="flex justify-center mb-4">
                                            <a
                                                href="#"
                                                className="text-white bg-seaGreen rounded-md p-4 align-middle no-underline hover:text-white hover:opacity-80 hover:transition hover:duration-300"
                                            >
                                                Read more...
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Hero section 2 */}
                <section id="hero-2">
                    <div className="flex flex-col md:flex-row space-y-8 md:space-x-4 lg:space-x-0 md:space-y-0 mx-auto p-6 mt-10">
                        <div className="flex flex-col space-y-6 md:w-1/2">
                            <h2 className="max-w-sm text-3xl font-semibold text-left">
                                What&apos;s different about Manage?
                            </h2>
                            <p className="max-w-sm lg:max-w-md text-textSecondary">
                                Manage provides all the functionality your team
                                needs, without the complexity. Our software is
                                tailor-made for modern digital product teams.
                            </p>
                            <div className="flex justify-center lg:justify-start w-full">
                                <a
                                    href="#"
                                    className="bg-seaGreen w-32 self-center lg:self-start rounded-md text-center p-4 hover:opacity-80 hover:transition hover:duration-300 text-white no-underline hover:text-white "
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        {/* numbered list */}
                        <div className="flex flex-col md:w-1/2 space-y-8">
                            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-6">
                                <div className="rounded-l-full bg-lightGreen md:bg-transparent md:-mt-1">
                                    <div className="flex items-center space-x-2">
                                        <div className="text-white bg-seaGreen rounded-full px-4 py-2">
                                            01
                                        </div>
                                        <h3 className="text-base font-semibold md:mb-4 md:hidden">
                                            Track company-wide progress
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="hidden md:block mb-4 text-lg font-semibold">
                                        Track company-wide progress
                                    </h3>
                                    <p className="text-textSecondary">
                                        See how your day-to-day tasks fit into
                                        the wider vision. Go from tracking
                                        progress at the milestone level all the
                                        way down to the smallest of details.
                                        Never lose sight of the bigger picture
                                        again.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-6">
                                <div className="rounded-l-full bg-lightGreen md:bg-transparent md:-mt-1">
                                    <div className="flex items-center space-x-2">
                                        <div className="text-white bg-seaGreen rounded-full px-4 py-2">
                                            02
                                        </div>
                                        <h3 className="text-base font-semibold md:mb-4 md:hidden">
                                            Advanced built-in reports
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="hidden md:block mb-4 text-lg font-semibold">
                                        Advanced built-in reports
                                    </h3>
                                    <p className="text-textSecondary">
                                        Set internal delivery estimates and
                                        track progress toward company goals. Our
                                        customisable dashboard helps you build
                                        out the reports you need to keep key
                                        stakeholders informed.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-6">
                                <div className="rounded-l-full bg-lightGreen md:bg-transparent md:-mt-1">
                                    <div className="flex items-center space-x-2">
                                        <div className="text-white bg-seaGreen rounded-full px-4 py-2">
                                            03
                                        </div>
                                        <h3 className="text-base font-semibold md:mb-4 md:hidden">
                                            Everything you need in one place
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="hidden md:block mb-4 text-lg font-semibold">
                                        Everything you need in one place
                                    </h3>
                                    <p className="text-textSecondary">
                                        Stop jumping from one service to another
                                        to communicate, store files, track tasks
                                        and share documents. Manage offers an
                                        all-in-one team productivity solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="py-8">
                <div className="container">
                    {/* Articles section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-4">
                            Text Section
                        </h2>
                        <article>
                            <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-8">
                                <div className="w-full pr-2 mb-4 lg:w-2/6 lg:mb-0">
                                    <img
                                        className="shadow-lg shadow-slate-800/50"
                                        src="./img/ancient-temple-1.jpg"
                                        alt="temple"
                                    />
                                </div>
                                <div className="w-full lg:w-4/6 lg:px-4">
                                    <h2>My Article</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Reprehenderit, quia?
                                        Recusandae, porro tempora. Nostrum quam
                                        corrupti voluptatem doloremque sapiente
                                        ab itaque mollitia asperiores ducimus
                                        aspernatur minus rem qui debitis
                                        perspiciatis blanditiis optio, nisi
                                        incidunt eum illum? Totam, atque dolorem
                                        quae beatae nisi quo, minima obcaecati
                                        similique eaque minus veritatis
                                        praesentium.
                                    </p>
                                    <p>
                                        <a
                                            className="hover:text-seaGreen"
                                            href="https://freecodecamp.org"
                                            target="_blank"
                                        >
                                            This is an anchor
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
            <div className="bg-slate-200 py-8 mb-8">
                <div className="container">
                    {/* Buttons section */}
                    <section>
                        <h2 className="text-3xl font-semibold">
                            Buttons Section
                        </h2>
                        <div className="my-4">
                            <h3 className="text-2xl font-semibold mb-2">
                                Primary Button
                            </h3>
                            <button className="btn btn-primary">
                                This is a primary button
                            </button>
                        </div>
                        <div className="my-4">
                            <h3 className="text-2xl font-semibold mb-2">
                                Secondary Button
                            </h3>
                            <button className="btn btn-secondary">
                                This is a secondary button
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container">
                <section>
                    <h1>Contact Us</h1>
                    <form action="" method="post">
                        <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-32 lg:space-y-0">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email..."
                                />
                            </div>
                            <div>
                                <label htmlFor="date">Date: </label>
                                <input type="date" id="date" />
                            </div>
                        </div>
                        <div className="flex items-start my-4">
                            <input type="checkbox" name="" id="checkbox" />
                            <label htmlFor="checkbox">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reprehenderit, quia?
                                Recusandae, porro tempora.
                            </label>
                        </div>
                        <div className="my-4">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}
