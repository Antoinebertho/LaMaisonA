import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";

export const Header = () => {
  return (
    <section className="relative bg-[url(https://i.pinimg.com/originals/bf/23/13/bf2313f512b2aa9f8d58130796efd545.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Trouvez des plantes
            <strong className="block font-extrabold text-rose-700">
              Près de chez vous.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Un large choix disponible directement sur notre site et dans nos
            boutiques.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto scroll-smooth"
              to="Products"
              smooth={true}
              href="/"
            >
              Découvir
            </Link>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
