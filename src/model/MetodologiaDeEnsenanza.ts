export class MetodologiaDeEnsenanza {
  id: number;
  nombre: string;
  descripcion: string;
  videoUrl: string;

  constructor(nombre: string, descripcion: string, videoUrl: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.videoUrl = videoUrl;
  }
}
