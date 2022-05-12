import { theme } from '@theme';

interface Props {
  className?: string;
}

//TODO: Cambiar los links del footer

export const Footer = ({ className }: Props) => {
  return (
    <footer
      className={ `px-4 py-8 flex flex-col sm:flex-row sm:items-center justify-around ${ theme.bgFooter }  ${theme.textColor} ${ className }` }
    >
      <div className={`sm:w-1/4 mb-4 sm:mb-0`}>
        <p
          className={ `font-bold mb-2` }
        >Información</p>
        <p>Este es un ejemplo de un chat implementado con sockets en NextJS</p>
      </div>
      <div className={`sm:w-1/4 mb-4 sm:mb-0`}>
        <p
          className={ `font-bold mb-2` }
        >Creador</p>
        <p>Creada por Jairo para la página</p>
        <a
          href="https://blog.jcoder.es"
          target="_blank"
          className={ `text-blue-500` }
        >JCodeR.es</a>
      </div>
      <div className={`sm:w-1/4 mb-4 sm:mb-0`}>
        <p
          className={ `font-bold mb-2` }
        >Links</p>
        <p>
          <a
            href="https://blog.jcoder.es"
            target="_blank"
            className={ `text-blue-500` }
          >JCodeR.es</a>
        </p>
        <p>
          <a
            href="https://blog.jcoder.es"
            target="_blank"
            className={ `text-blue-500` }
          >Repositorio en GitHub</a>
        </p>
        <p>
          <a
            href="https://blog.jcoder.es"
            target="_blank"
            className={ `text-blue-500` }
          >Descripción del proyecto</a>
        </p>
      </div>
    </footer>
  );
};
