import { Injectable } from '@angular/core';
import { MetodologiaDeEnsenanza } from '../model/MetodologiaDeEnsenanza';

@Injectable()
export class MetodologiasDeEnsenanzaService {
  metodologias: MetodologiaDeEnsenanza[];

  constructor() {
    this.metodologias = [];

    const aulaInvertida = new MetodologiaDeEnsenanza("Aula invertida",
      "Es un modelo pedagógico en el que el los elementos tradicionales de la lección impartida por el profesor se invierten – los materiales educativos primarios son estudiados por los alumnos en casa y, luego, se trabajan en el aula.\n" +
      "\n" +
      "El principal objetivo de esta metodología es optimizar el tiempo en clase dedicándolo, por ejemplo, a atender las necesidades especiales de cada alumno, desarrollar proyectos cooperativos o trabajar por proyectos.",
      "https://www.youtube.com/embed/ePOnn0H9GMY");
    this.metodologias.push(aulaInvertida);

    const aprendizajeBasadoEnProyectos = new MetodologiaDeEnsenanza("Aprendizaje basado en proyectos", "En su esencia, el ABP permite a los alumnos adquirir conocimientos y competencias clave a través de la elaboración de proyectos que dan respuesta a problemas de la vida real." +
      "La enseñanza basada en proyectos o tareas integradas, supone hoy la mejor garantía didáctica para una contribución eficaz al desarrollo de las competencias clave y al aprendizaje de los contenidos del currículo." +
      "Partiendo de un problema concreto y real, en lugar del modelo teórico y abstracto tradicional, parecen evidentes las mejoras en la capacidad de retener conocimiento por parte del alumnado así como la oportunidad de desarrollar competencias complejas como el pensamiento crítico, la comunicación, la colaboración o la resolución de problemas.",
      "https://www.youtube.com/embed/ahxDLOiR15Y");
    this.metodologias.push(aprendizajeBasadoEnProyectos);

    const aprendizajeCooperativo = new MetodologiaDeEnsenanza("Aprendizaje cooperativo",
      "“Más fuertes juntos”. Así se podría resumir de forma sencilla el aprendizaje cooperativo, una metodología que los maestros usan para agrupar a los estudiantes y, así, impactar en el aprendizaje de una manera positiva.\n" +
      "\n" +
      "Los defensores de este modelo teorizan que trabajar en grupo mejora la atención, la implicación y la adquisición de conocimientos por parte de los alumnos." +
      "El objetivo final es siempre común y  se va a lograr si cada uno de los miembros realiza con éxito sus tareas." +
      "La principal característica es que se estructura en base a la formación de grupos de entre 3-6 personas, donde cada miembro tiene un rol determinado y para alcanzar los objetivos es necesario interactuar y trabajar de forma coordinada.\n" +
      "\n" +
      "En el aprendizaje cooperativo, el objetivo final es siempre común y  se va a lograr si cada uno de los miembros realiza con éxito sus tareas. Por su parte en el Aprendizaje Individual el alumno se focaliza en conseguir sus objetivos sin tener que depender del resto de compañeros.",
      "https://www.youtube.com/embed/nmjELIihLOM");
    this.metodologias.push(aprendizajeCooperativo);

    const gamificacion = new MetodologiaDeEnsenanza("Gamificación",
      "La integración de mecánicas y dinámicas propias de jugos y videojuegos en entornos no lúdicos, o gamificación, se practica desde hace tiempo pero ha sido en los últimos cuando el fenómeno ha adquirido una dimensión sin precedentes, y es una de las apuestas recurrentes de los expertos del sector cuando analizan las tendencias actuales y futuras de la industria EdTech.\n" +
      "\n" +
      "Desde que, en los años 80, juegos con vocación internacional como la serie “Carmen Sandiego” o “Reader Rabbit” (ver infografía abajo) ganaron popularidad mundial, el desarrollo de títulos educativos se ha multiplicado, no solo los dirigidos a la población en general sino, cada día más, los dirigidos a alumnos y cursos específicos.",
      "https://www.youtube.com/embed/LfS8xai2u1Q");
    this.metodologias.push(gamificacion);

    const basadoEnProblemas = new MetodologiaDeEnsenanza("Basado en problemas",
      "El aprendizaje basado en problemas es un proceso de aprendizaje cíclico compuesto de muchas etapas diferentes, comenzando por hacer preguntas y adquirir conocimientos que, por su vez, llevan a más preguntas en un ciclo creciente de complejidad.\n" +
      "\n" +
      "Poner en práctica esta metodología no supone sólo el ejercicio de indagación por parte de los alumnos, sino convertirlo en datos e información útil. De acuerdo con múltiples pedagogos, las cuatro grandes ventajas observadas con el uso de esta metodología son:\n" +
      "\n" +
      "    El desarrollo del pensamiento crítico y competencias creativas\n" +
      "    La mejora de las habilidades de resolución de problemas\n" +
      "    El aumento de la motivación del alumno\n" +
      "    La mejor capacidad de transferir conocimientos a nuevas situaciones\n",
      "https://www.youtube.com/embed/2fpEUvqenqY");
    this.metodologias.push(basadoEnProblemas);

    const designThinking = new MetodologiaDeEnsenanza("Design Thinking",
      "La educación siempre ha sido un espacio por excelencia para la innovación. Maestros en todo el mundo están constantemente trayendo nuevas ideas y metodologías al aula haciendo el mejor uso de las herramientas a su disposición.\n" +
      "\n" +
      "El Design Thinking (DT) – o “Pensamiento de Diseño” – nace con los diseñadores y su método para resolver problemas y satisfacer así las necesidades de sus clientes. Aplicado a la educación, este modelo permite identificar con mayor exactitud los problemas individuales de cada alumno y generar en su experiencia educativa la creación y la innovación hacia la satisfacción de los demás, que luego se vuelve simbiótica.",
      "https://www.youtube.com/embed/kwIJo4Ia4qI");
    this.metodologias.push(designThinking);

    const aprendizajeBasadoEnElPensamiento = new MetodologiaDeEnsenanza("Aprendizaje Basado En El Pensamiento",
      "Más allá del debate sobre la eficacia de aprender “de memoria”, cuando se habla de educación uno de los aspectos más discutidos es la necesidad de enseñar a los alumnos a trabajar con la información que reciben en la escuela. Enseñarles a contextualizar, analizar, relacionar, argumentar…En definitiva, convertir información en conocimiento.\n" +
      "\n" +
      "Este es el objetivo del thinking-based learning o aprendizaje basado en el pensamiento (TBL), desarrollar destrezas del pensamiento más allá de la memorización, desarrollar un pensamiento eficaz.",
      "https://www.youtube.com/embed/g8NZS-QZd98");
    this.metodologias.push(aprendizajeBasadoEnElPensamiento);

    const aprendizajeBasadoEnCompetencias = new MetodologiaDeEnsenanza("Aprendizaje Basado En Competencias",
      "Por definición, todo aprendizaje tiene obtiene como objetivo la adquisición de conocimiento, el desarrollo de habilidades y la solidificación de hábitos de trabajo. El Aprendizaje Basado en Competencias representa un conjunto de estrategias para lograr esta finalidad.\n" +
      "\n" +
      "A través de herramientas de evaluación como las rúbricas, los maestros pueden impartir el currículo académico sin desviaciones del plan de estudios vigente pero enfocándolo de forma distinta, poniendo en práctica ejemplos reales y, así, transmitiendo a sus alumnos una dimensión más tangible de las lecciones.",
      "https://www.youtube.com/embed/VDCf2DWJJQ0");
    this.metodologias.push(aprendizajeBasadoEnCompetencias);
  }
}
